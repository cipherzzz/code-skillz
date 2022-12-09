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

        const King = await ethers.getContractFactory("King");
        const king = await King.connect(victim).deploy();

        const Dethrone = await ethers.getContractFactory("Dethroner");
        const dethrone = await Dethrone.connect(attacker).deploy();

        await attacker.sendTransaction({ to: dethrone.address, value: ethers.utils.parseEther("1.0") })

        return { king, dethrone, victim, attacker };
    }


    it("Attacker should be able to break King contract by not allowing a new king", async function () {
        const { king, dethrone, victim, attacker } = await loadFixture(deployFixture);

        // call custom method to break king contract
        await dethrone.becomeKing(king.address)
        expect(await king._king()).to.be.equal(dethrone.address)
    });

});
