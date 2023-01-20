import { useState } from 'react';
import Web3 from "web3";
import Web3Modal from "web3modal/dist/index.js";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { AbiItem } from 'web3-utils';
import abi from "./abi.json"

export default function useWallet() {
  // const [web3, setWeb3] = useState<any>();
  const providerOptions = {
    /* See Provider Options Section */
    // walletconnect: {
    //   package: WalletConnectProvider, // required
    //   options: {
    //     infuraId: "84e02827a94446f38cb4b655cc275363", // required
    //   },
    // },
    // coinbasewallet: {
    //   package: CoinbaseWalletSDK, // Required
    //   options: {
    //     appName: "My Awesome App", // Required
    //     infuraId: "84e02827a94446f38cb4b655cc275363", // Required
    //     rpc: "", // Optional if `infuraId` is provided; otherwise it's required
    //     chainId: 3, // Optional. It defaults to 1 if not provided
    //     darkMode: false, // Optional. Use dark theme, defaults to false
    //   },
    // },
  };
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions, // required
  });

  const getCount = () => {
    const provider_rpc = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/73a5854771bd4d5394c19058c7985286")
    const web3_count = new Web3(provider_rpc);
    const address = "0x281851c4dd77BAC877bac193fA987BF8D0b3cc95";
    const contract = new web3_count.eth.Contract(abi as AbiItem[], address);
    contract.methods.totalSupply().call((err: any, result: any) => { alert(result) })

  }

  return {
    web3Modal,
    // web3,
    // setWeb3,
    getCount
  }
}


