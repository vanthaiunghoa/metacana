/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUniswapV2Router01 } from "../IUniswapV2Router01";

export class IUniswapV2Router01__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV2Router01 {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV2Router01;
  }
}

const _abi = [
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
