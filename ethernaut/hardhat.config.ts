import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('hardhat-storage-layout');

// Deploy the contract
task(
  "storage",
  "Storage Layout"
).setAction(async (taskArgs, hre) => {
  await
  hre.storageLayout.export();
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.0",
      },
      {
        version: "0.8.0",
      },
    ],
  }
};

export default config;
