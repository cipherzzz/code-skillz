import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("CoinFlip", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const CoinFlip = await ethers.getContractFactory("CoinFlip");
    const coinFlip = await CoinFlip.deploy();

    const CoinFlipAttacker = await ethers.getContractFactory("CoinFlipAttacker");
    const coinFlipAttacker = await CoinFlipAttacker.deploy(coinFlip.address);

    return { coinFlip, coinFlipAttacker, owner, otherAccount };
  }

  async function attackNTimes(coinFlip:any, coinFlipAttacker:any, n:number) {
    for (let i = 1; i <= n; i++) {
      const tx = await coinFlipAttacker.attack();
      await tx.wait();
      const count = await coinFlip.consecutiveWins();
      expect(count).to.equal(i);
    }
  }

  it("Should correctly guess the coinflip 10 times in a row", async function () {
    const { coinFlip, coinFlipAttacker } = await loadFixture(deployFixture);
    const tries = 10;
    await attackNTimes(coinFlip, coinFlipAttacker, tries);
    expect(await coinFlip.consecutiveWins()).to.equal(tries);
  });

});
