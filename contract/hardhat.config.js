// https://eth-ropsten.alchemyapi.io/v2/7SCRx_bscoAaABhazwhXton1p-HDRTLy
require("@nomiclabs/hardhat-waffle");
const { privateKey, alchemyapi } = require("./secret");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: alchemyapi,
      accounts: [privateKey],
    },
  },
};
