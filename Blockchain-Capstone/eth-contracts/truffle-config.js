const HDWalletProvider = require('truffle-hdwallet-provider');

const fs = require('fs');
const MNEMONIC = "boil huge bullet bomb age tobacco arrow sun diagram path elbow engine";
const ENDPOINT = "https://rinkeby.infura.io/v3/b783572f579e4fe1acde30fcf8a7fb20";

module.exports = {

  networks: {

    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, ENDPOINT)
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    },

  },

  // Configure your compilers
  compilers: {
    solc: {
      settings:{
        //evmVersion:"istanbul"
      },
       version: "^0.5.0"    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}