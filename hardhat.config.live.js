require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: {
      url: "https://polygon-rpc.com/",
      accounts: [PRIVATE_KEY],
      gasPrice: 33000000000
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",

  },
  mocha: { timeout: 20000 }
};
