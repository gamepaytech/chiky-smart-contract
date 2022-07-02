/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("hardhat-gas-reporter");
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");

 const ALCHEMY_API_KEY = "Tv277_RjwkXDuii_WGiG_X8RL-T56yyG";
 const PRIVATE_KEY = "8c87f1cefab07508a72c5fbc447de66fd3f399cb2f4cfb611f26351df4fc5102";
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rinkeby: {
      url: "https://speedy-nodes-nyc.moralis.io/362fc40c1ab324c15e79d4da/eth/rinkeby",
      gasPrice: 20000000000,
      gas: 6000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ethereum: {
      url: "https://speedy-nodes-nyc.moralis.io/362fc40c1ab324c15e79d4da/eth/mainnet",
      gasPrice: 20000000000,
      gas: 6000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      gasPrice: 20000000000,
      gas: 6000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    binance: {
      url: "https://bsc-dataseed1.binance.org/",
      gas: 30000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    matic: {
      url: "https://speedy-nodes-nyc.moralis.io/362fc40c1ab324c15e79d4da/polygon/mainnet",
      gas: 30000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mumbai: {
        url: "https://speedy-nodes-nyc.moralis.io/362fc40c1ab324c15e79d4da/polygon/mumbai",
        gas: 30000000,
        accounts: [`0x${PRIVATE_KEY}`],
    }

  },
  etherscan: {
    apiKey: "A5BXIMVEBKN2ZABGZRG755MPAEWRUCZ6NC"
  }
};

// {
//   bscTestnet:  "PD6XDADQWIK74S8RZSAQVE1ZC1BHZ3129N",
//   bsc: "G7698MYEQEQTMN56Q771W34NR4RB9BCUGT",
//   rinkeby: "V2AP5EKH2BZRC6S72UUKINQ1U6C2UYWBCX",
//   mainnet: "V2AP5EKH2BZRC6S72UUKINQ1U6C2UYWBCX",
//   polygon: "A5BXIMVEBKN2ZABGZRG755MPAEWRUCZ6NC"
// }