import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-ethers");
usePlugin("buidler-typechain");


const config: BuidlerConfig = {
    defaultNetwork: "sandaker",
    networks: {
        gasless: {
            url: 'http://localhost:7545',
        },
        sandaker: {
            url: 'https://e0mcmsxgkk:zdh5CFSvVXzCUF8e3-QbN5tiVTBuekQYFgNxbMSJ68c@e0fsgog2j5-e0h0jkl669-rpc.de0-aws.kaleido.io',
            // port: 8545,
            // gas: 5000000,
            // gasPrice: 5e9,
            // chainId: '1118862899',
        },
    },
    solc: {
        version: "0.5.0",
        evmVersion: "byzantium"
    },
    // typechain: {
    //     outDir: "src/types",
    //     target: "ethers"
    // }
};

export default config;