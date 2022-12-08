import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Telephone", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [victim, attacker] = await ethers.getSigners();

    const Telephone = await ethers.getContractFactory("Telephone");
    const telephone = await Telephone.connect(victim).deploy();

    const TelephoneAttacker = await ethers.getContractFactory("AttackTelephone");
    const telephoneAttacker = await TelephoneAttacker.connect(attacker).deploy(telephone.address);

    return { telephone, telephoneAttacker, victim, attacker };
  }


  it("Victim calling malicious contract should transfer ownership to attacker", async function () {
    const { telephone, telephoneAttacker, victim, attacker } = await loadFixture(deployFixture);

    expect(await telephone.owner()).to.equal(victim.address)
    expect(await telephoneAttacker.owner()).to.equal(attacker.address)
    
    // trick the victim to send a tx signed by them with another address
    const victimTelephone = telephoneAttacker.connect(victim)
    const tx = await victimTelephone.changeOwner(attacker.address)

    expect(await telephone.owner()).to.equal(attacker.address)
  });

});
