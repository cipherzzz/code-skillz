import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { HackedEvent } from "../typechain";


describe("GateKeeper One", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployFixture() {

        // Contracts are deployed using the first signer/account by default
        const [victim, attacker] = await ethers.getSigners();

        const GateKeeperOne = await ethers.getContractFactory("GateKeeperOne");
        const gateKeeperOne = await GateKeeperOne.connect(victim).deploy();

        const AttackGateOne = await ethers.getContractFactory("AttackGateOne");
        const attackGateOne = await AttackGateOne.connect(attacker).deploy();

        return { gateKeeperOne, attackGateOne, victim, attacker };
    }


    it("Attacker should be able to bypass the gates", async function () {
        const { gateKeeperOne, attackGateOne, victim, attacker } = await loadFixture(deployFixture);

        // call intermediate attacker contract so tx.origin is not equal to msg.senger 
        const tx = await attackGateOne.bruteForceInitialGasAmount(gateKeeperOne.address, 1, 1000, )

        const { events } = await tx.wait();
        //const { args: { gasBrute } } = events?.find(({ event }) => (event === "Hacked")) as HackedEvent;

        // find event with Hacked event
        const { args: { gasBrute } } = events?.find(({ event }) => (event === "Hacked")) as HackedEvent;


        expect(gasBrute.toNumber()).to.not.equal(0);
        console.log(`[>] GAS BRUTE: ${gasBrute}`);
    
        expect(attacker.address).to.equal(await gateKeeperOne.entrant());

    });

});
