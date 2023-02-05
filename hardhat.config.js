require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const GOERLI_URL = process.env.GOERLI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  network: {
    goerli: {
      url: GOERLI_URL,
      account: [PRIVATE_KEY]
    }
  }
};
