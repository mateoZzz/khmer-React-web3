import { useState } from 'react';
import Web3 from "web3";
import Web3Modal from "web3modal/dist/index.js";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export default function useWallet(){
  const [web3, setWeb3] = useState<any>();
  const providerOptions = {
    /* See Provider Options Section */
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "84e02827a94446f38cb4b655cc275363", // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "My Awesome App", // Required
        infuraId: "84e02827a94446f38cb4b655cc275363", // Required
        rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 3, // Optional. It defaults to 1 if not provided
        darkMode: false, // Optional. Use dark theme, defaults to false
      },
    },
  };
  const web3Modal = new Web3Modal({
    network: "ropsten", // optional
    cacheProvider: false, // optional
    providerOptions, // required
  });

  const web = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

  console.log(web,'web')

  console.log(web.eth.accounts,'accounts');

  console.log(web.version);

  const myWeb3 = new Web3();

  console.log(myWeb3.version);

  return {
    web3Modal,
    web3,
    setWeb3
  }
}


