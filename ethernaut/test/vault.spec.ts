import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber, utils } from "ethers";

describe("Vault", function () {

  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [victim, attacker] = await ethers.getSigners();

    // convert password to bytes32
    const password = "password"
    const passwordBytes = ethers.utils.formatBytes32String(password)

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.connect(victim).deploy(passwordBytes);

    return { vault, victim, attacker, password };
  }


  it("Attacker should be able to read the private variable value", async function () {
    const { vault, victim, attacker, password } = await loadFixture(deployFixture);

    // execute the underflow vulnerability
    const attackerVault = vault.connect(attacker)
    //get storage slot for password
    const privateValue = await ethers.provider.getStorageAt(vault.address, 1)
    // convert bytes32 to string
    const privateValueString = ethers.utils.parseBytes32String(privateValue)
    expect(privateValueString).to.equal(password)
  });

});
