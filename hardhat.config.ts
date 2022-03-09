import { HardhatUserConfig } from 'hardhat/config'

import '@nomiclabs/hardhat-truffle5'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-web3'
import 'hardhat-gas-reporter'
import 'solidity-coverage'

import "@nomiclabs/hardhat-waffle";
// import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
// import "hardhat-deploy";
// import "hardhat-deploy-ethers";
// import "hardhat-watcher";
import { NetworkUserConfig } from "hardhat/types";

import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const chainIds = {
  hardhat: 31337,
  ganache: 1337,
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  avax: 43114,
  avax_testnet: 43113,
  fantom: 250,
  fantom_testnet: 4002,
  polygon: 137,
  mumbai: 80001,
  bsc: 56,
  bsc_testnet:97
};

const MNEMONIC_DEFAULT = "test test test test test test test test test test test junk";
const MNEMONIC_LOCALHOST = process.env.MNEMONIC_LOCALHOST || MNEMONIC_DEFAULT;
const MNEMONIC_TESTNET = process.env.MNEMONIC_TESTNET || MNEMONIC_DEFAULT;
const MNEMONIC_MAINNET = process.env.MNEMONIC_MAINNET || "";

// Ensure that we have all the environment variables we need.
let testPrivateKey: string = process.env.TEST_PRIVATE_KEY || "";
let alchemyKey: string = process.env.ALCHEMY_KEY || "";
let explorerScanKey: string = process.env.SCAN_API_KEY || "";

function createTestnetConfig(network: keyof typeof chainIds): NetworkUserConfig {
  // if (!alchemyKey) {
  //   throw new Error("Missing ALCHEMY_KEY");
  // }  

  const polygonNetworkName = network === "polygon" ? "mainnet" : "mumbai";

  let nodeUrl =
    chainIds[network] == 137 || chainIds[network] == 80001
      ? `https://polygon-${polygonNetworkName}.g.alchemy.com/v2/${alchemyKey}`
      : `https://eth-${network}.alchemyapi.io/v2/${alchemyKey}`;
  

  if (network === "avax") {
    nodeUrl = "https://api.avax.network/ext/bc/C/rpc";
  } else if (network === "avax_testnet") {
    nodeUrl = "https://api.avax-test.network/ext/bc/C/rpc";
  } else if (network === "fantom") {
    nodeUrl = "https://rpc.ftm.tools";
  } else if (network === "fantom_testnet") {
    nodeUrl = "https://rpc.testnet.fantom.network";
  } else if (network === "bsc") {
    nodeUrl = "https://bsc-dataseed1.binance.org";
  }else if (network === "bsc_testnet") {
    nodeUrl = "https://data-seed-prebsc-1-s2.binance.org:8545"; //"https://testnet.bscscan.com";
  }

  return {
    chainId: chainIds[network],
    url: nodeUrl,
    // gas: 2100000,
    // gasPrice: 2,
    // accounts: [`${testPrivateKey}`],
    accounts: {
      mnemonic: MNEMONIC_TESTNET
    },
  };
}

interface ConfigWithEtherscan extends HardhatUserConfig {
  etherscan: { apiKey: string };
}

const config: ConfigWithEtherscan = {
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
        details: {
          yul: true,
          constantOptimizer: false
        }
      }
    }
  },
  paths: {
    root: 'src',
    tests: '../tests'
  },
  // networks: {
  //   hardhat: {
  //     chainId: 127001,
  //     accounts: {
  //       mnemonic: MNEMONIC_LOCALHOST
  //     },
  //   },
  //   ganache: {
  //     url: 'http://127.0.0.1:8545',
  //     blockGasLimit: 10000000
  //   },
  //   ethnet: {
  //     url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API}/eth/mainnet`,
  //     chainId: 1,
  //     accounts: {
  //       mnemonic: MNEMONIC_LOCALHOST
  //     },
  //   },
  //   prebsc: {
  //     url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API}/bsc/testnet\n`,
  //     chainId: 97,
  //     accounts: {
  //       mnemonic: MNEMONIC_TESTNET
  //     },
  //   },
  //   bsc: {
  //     url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API}/bsc/mainnet`,
  //     chainId: 56,
  //     accounts: {
  //       mnemonic: MNEMONIC_MAINNET
  //     },
  //   }
  // },
  abiExporter: {
    flat: true,
  },
  etherscan: {
    apiKey: explorerScanKey,
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS === true,
    currency: 'USD',
    gasPrice: 10,
    showTimeSpent: true
  }
};

if (/*testPrivateKey MNEMONIC_TESTNET*/1) {
  config.networks = {
    mainnet: createTestnetConfig("mainnet"),
    rinkeby: createTestnetConfig("rinkeby"),
    polygon: createTestnetConfig("polygon"),
    mumbai: createTestnetConfig("mumbai"),
    fantom: createTestnetConfig("fantom"),
    fantom_testnet: createTestnetConfig("fantom_testnet"),
    avax: createTestnetConfig("avax"),
    bsc: createTestnetConfig("bsc"),
    avax_testnet: createTestnetConfig("avax_testnet"),
    bsc_testnet: createTestnetConfig("bsc_testnet"),
  };
}

config.networks = {
  ...config.networks,
  ganache: {
    url: 'http://127.0.0.1:8545',    
    blockGasLimit: 15000000,
    chainId: chainIds['ganache'],
    accounts:{
      mnemonic: MNEMONIC_LOCALHOST
    }
  },
  hardhat: {
    chainId: 1337,    
    accounts:{
      mnemonic: MNEMONIC_LOCALHOST
    }
  },
};

export default config
