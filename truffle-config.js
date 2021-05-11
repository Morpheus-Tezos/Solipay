const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();
const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/build/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    matic: {
      provider: function() {
        new HDWalletProvider(`${process.env.MNEMONIC}`, `https://rpc-mumbai.matic.today`)
        },
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://ropsten.infura.io/v3/${process.INFURA_ID}`)
      },
      network_id: 3
    },
    kovan: {
      provider: function() {
        var wallet = new HDWalletProvider(`${process.env.MNEMONIC}`, `https://kovan.infura.io/v3/${process.env.INFURA_ID}`);
        
        return wallet;
      },
      network_id: 42,
      skipDryRun: true  // cut simulation
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
     timeout: 99999999999999999999
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.11",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
