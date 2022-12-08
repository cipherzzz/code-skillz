import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Reentrant", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [victim, attacker] = await ethers.getSigners();

    const Reentrant = await ethers.getContractFactory("EtherStore");
    const reentrant = await Reentrant.connect(victim).deploy();

    const Attack = await ethers.getContractFactory("Attack");
    const attack = await Attack.connect(attacker).deploy(reentrant.address);

    return { reentrant, attack, victim, attacker };
  }


  it.only("Victim calling malicious contract should transfer ownership to attacker", async function () {
    const { reentrant, attack, victim, attacker } = await loadFixture(deployFixture);
    
    await victim.sendTransaction({to: reentrant.address, value: ethers.utils.parseEther('100')});
    expect(await ethers.provider.getBalance(reentrant.address)).to.equal(ethers.utils.parseEther('100'))
    
    // attack
    await attack.attack({value: ethers.utils.parseEther('1'), gasLimit: 1000000});
    expect(await ethers.provider.getBalance(attack.address)).to.equal(ethers.utils.parseEther('1'))
  });

});
1