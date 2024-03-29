/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { RedeemableNFT, RedeemableNFTInterface } from "../RedeemableNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pointsToRedeem",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "strategyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "NFTAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NFTRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousStrategy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newStrategy",
        type: "address",
      },
    ],
    name: "NFTStrategyUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nfts",
    outputs: [
      {
        internalType: "contract IRedeemableStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pointsToRedeem",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftsContract",
    outputs: [
      {
        internalType: "contract IMetacanaNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "points",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class RedeemableNFT__factory {
  static readonly abi = _abi;
  static createInterface(): RedeemableNFTInterface {
    return new utils.Interface(_abi) as RedeemableNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemableNFT {
    return new Contract(address, _abi, signerOrProvider) as RedeemableNFT;
  }
}
