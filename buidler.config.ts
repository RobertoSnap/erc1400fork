import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-ethers");
usePlugin("buidler-typechain");
usePlugin("buidler-gas-reporter");

const config: BuidlerConfig = {
  defaultNetwork: "buidlerevm",
  networks: {
    gasless: {
      url: "http://localhost:7545"
    },
    local: {
      url: " http://127.0.0.1:8545/"
    },
    buidlerevm: {
      gas: "auto",
      blockGasLimit: 5000000000,
      loggingEnabled: true
    },
    sandaker: {
      url:
        "https://e0mcmsxgkk:zdh5CFSvVXzCUF8e3-QbN5tiVTBuekQYFgNxbMSJ68c@e0fsgog2j5-e0h0jkl669-rpc.de0-aws.kaleido.io"
      // port: 8545,
      // gas: 5000000,
      // gasPrice: 5e9,
      // chainId: '1118862899',
    }
  },
  solc: {
    version: "0.5.5",
    optimizer: {
      enabled: true,
      runs: 200
    }
    // evmVersion: "byzantium"
  },
  typechain: {
    outDir: "dist/types",
    target: "ethers"
  },
  gasReporter: {
    currency: "NOK",
    gasPrice: 5
  }
};

export default config;
