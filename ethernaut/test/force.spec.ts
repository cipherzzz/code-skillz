import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Force", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployFixture() {

        // Contracts are deployed using the first signer/account by default
        const [victim, attacker] = await ethers.getSigners();

        const Force = await ethers.getContractFactory("Force");
        const force = await Force.connect(victim).deploy();

        const Forcer = await ethers.getContractFactory("Forcer");
        const forcer = await Forcer.connect(attacker).deploy();

        await attacker.sendTransaction({ to: forcer.address, value: ethers.utils.parseEther("1.0") })

        return { force, forcer, victim, attacker };
    }


    it("Attacker should be able to force ether into empty contract ", async function () {
        const { force, forcer, victim, attacker } = await loadFixture(deployFixture);

        //can't just send eth to the contract
        await (expect(attacker.sendTransaction({ to: force.address, value: ethers.utils.parseEther("1.0") }))).to.be.rejected
        expect(await ethers.provider.getBalance(force.address)).to.equal(0)

        expect(await ethers.provider.getBalance(forcer.address)).to.equal(ethers.utils.parseEther("1.0"))

        // call custom method to destroy contract and send ether to empty contract
        await forcer.force(force.address)

        expect(await ethers.provider.getBalance(force.address)).to.equal(ethers.utils.parseEther("1.0"))
    });

});
