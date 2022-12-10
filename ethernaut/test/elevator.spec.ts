import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("King", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployFixture() {

        // Contracts are deployed using the first signer/account by default
        const [victim, attacker] = await ethers.getSigners();

        const Elevator = await ethers.getContractFactory("Elevator");
        const elevator = await Elevator.connect(victim).deploy();

        const Penthouse = await ethers.getContractFactory("Penthouse");
        const penthouse = await Penthouse.connect(attacker).deploy(elevator.address);

        return { elevator, penthouse, victim, attacker };
    }


    it.only("Attacker should be able to get to the top floor of the building", async function () {
        const { elevator, penthouse } = await loadFixture(deployFixture);
        expect(await elevator.top()).to.be.equal(false)
        await penthouse.hack()
        expect(await elevator.top()).to.be.equal(true)
    });

});
