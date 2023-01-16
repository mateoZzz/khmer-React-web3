import React, { useState } from "react";

import Web3 from "web3";

import "./Index.css";
import GradenImg from "../assets/images/garden.jpg";
import useWallet from "components/wallet/connect.hook";

const Home = () => {
  const [stepVal, setStepVal] = useState<number>(1);

  const {
    web3,
    web3Modal,

  } = useWallet()

  const mint = async () => {
    const abi = [
      {
        inputs: [
          { internalType: "string", name: "_name", type: "string" },
          { internalType: "string", name: "_symbol", type: "string" },
          { internalType: "string", name: "_initBaseURI", type: "string" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseExtension",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "baseURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "cost",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getApproved",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "operator", type: "address" },
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "maxMintAmount",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "maxSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "_to", type: "address" },
          { internalType: "uint256", name: "_mintAmount", type: "uint256" },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "ownerOf",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "paused",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        name: "removeWhitelistUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "bytes", name: "_data", type: "bytes" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "string", name: "_newBaseExtension", type: "string" },
        ],
        name: "setBaseExtension",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "string", name: "_newBaseURI", type: "string" },
        ],
        name: "setBaseURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_newCost", type: "uint256" },
        ],
        name: "setCost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_newmaxMintAmount",
            type: "uint256",
          },
        ],
        name: "setmaxMintAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
        ],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
        name: "tokenByIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "uint256", name: "index", type: "uint256" },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "tokenURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "_owner", type: "address" }],
        name: "walletOfOwner",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        name: "whitelistUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "whitelisted",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ];
    const nftContractAddress = "0x338F57FC318a755D970FF1A59b4Eb8cf4Dc23926";
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const nftContract = new web3.eth.Contract(abi, nftContractAddress);
    await nftContract.methods
      .mint(accounts[0], 1)
      .send({ from: accounts[0], value: 100000000000000 });
  };

  const WalletConnect = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const chainID = await web3.eth.getChainId();
    console.log('provider',provider)
    console.log('accounts',accounts);
    console.log('chainID',chainID);
    
    // setProvider(provider);
    // setWeb3(web3);
    // setChainId(chainID);
  };

  // const disConnect = async() => {
  //   const clear = await web3Modal.clearCachedProvider();
  // }
  
  return (
    <div className={"container"}>
      <img src={GradenImg} alt="" object-fit="none" />
      <div className={"content"}>
        <div className={"text-white title"}>Khmer Maidens</div>
        <div style={{ height: "20px" }}></div>
        <div className={"based"}>
          Based on the story of "Liu Yi", the ancient queen of Cambodia & Khmer,
          combined with the unique style of the tropical rainforest and the
          hand-painted IP background of Angkor cultural architectural relics,
          this NFT series aims to reproduce the glory of Angkor and the
          flourishing times of Khmer.
        </div>
        <div style={{ height: "12px" }}></div>
        <div className={"based"}>
          We will explore the harmony and consistency between Southeast Asia
          island development and urban development, and recreate the new idea of
          "Khmer Metaverse", and reproduce the brilliant Khmer civilization in
          the metaverse world.
        </div>
        <div style={{ height: "32px" }}></div>

        <div className={"flex"}>
          <div className={"text-white"}>
            Issuer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div>
            Cambodia China Cultural Tourism Industry Promotion Association
            (https://cambodia-chinactipa.com/)
          </div>
        </div>
        <div style={{ height: "8px" }}></div>
        <div className={"flex"}>
          <div className={"text-white"}>Contract:&nbsp;&nbsp;&nbsp;</div>
          <div> ......</div>
        </div>
        <div style={{ height: "8px" }}></div>
        <div className={"flex"}>
          <div className={"text-white"}>
            Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div> 2,000</div>
        </div>
        <div style={{ height: "38px" }}></div>
        <div className={"count"}>
          <div className={"text-white jcc"}>
            <div>Price</div>
            <div>0.1ETh</div>
          </div>
          <div className={"text-white jcc"}>
            <div>Amount</div>
            <div>1000/2000</div>
          </div>
        </div>
        <div style={{ height: "8px" }}></div>

        <div className={"mint"} onClick={WalletConnect}>
          <div>Mint</div>
          <div className={"stepBtn"}>
            <div
              className={"step"}
              onClick={(e) => {
                e.stopPropagation()
                if (stepVal > 1) {
                  setStepVal(stepVal - 1);
                }
              }}
            >
              -
            </div>
            <input
              className={"num"}
              type="text"
              value={stepVal}
              onChange={() => {}}
            />
            <div
              className={"step"}
              onClick={(e) => {
                e.stopPropagation()
                console.log(stepVal);
                setStepVal(stepVal + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
