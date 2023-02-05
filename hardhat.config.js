require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const GOERLI_URL = process.env.GOERLI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {};

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },
    goerli: {
      url: GOERLI_URL,
      account: [PRIVATE_KEY]
    }
  }
};
