/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SocialProofableInterface extends utils.Interface {
  contractName: "SocialProofable";
  functions: {
    "getGithub()": FunctionFragment;
    "getGithubProof()": FunctionFragment;
    "getTelegram()": FunctionFragment;
    "getTwitter()": FunctionFragment;
    "getTwitterProof()": FunctionFragment;
    "getWebsite()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getGithub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getGithubProof",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTelegram",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTwitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTwitterProof",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWebsite",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getGithub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGithubProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTelegram",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTwitter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTwitterProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getWebsite", data: BytesLike): Result;

  events: {};
}

export interface SocialProofable extends BaseContract {
  contractName: "SocialProofable";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SocialProofableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getGithub(overrides?: CallOverrides): Promise<[string]>;

    getGithubProof(overrides?: CallOverrides): Promise<[string]>;

    getTelegram(overrides?: CallOverrides): Promise<[string]>;

    getTwitter(overrides?: CallOverrides): Promise<[string]>;

    getTwitterProof(overrides?: CallOverrides): Promise<[BigNumber]>;

    getWebsite(overrides?: CallOverrides): Promise<[string]>;
  };

  getGithub(overrides?: CallOverrides): Promise<string>;

  getGithubProof(overrides?: CallOverrides): Promise<string>;

  getTelegram(overrides?: CallOverrides): Promise<string>;

  getTwitter(overrides?: CallOverrides): Promise<string>;

  getTwitterProof(overrides?: CallOverrides): Promise<BigNumber>;

  getWebsite(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getGithub(overrides?: CallOverrides): Promise<string>;

    getGithubProof(overrides?: CallOverrides): Promise<string>;

    getTelegram(overrides?: CallOverrides): Promise<string>;

    getTwitter(overrides?: CallOverrides): Promise<string>;

    getTwitterProof(overrides?: CallOverrides): Promise<BigNumber>;

    getWebsite(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getGithub(overrides?: CallOverrides): Promise<BigNumber>;

    getGithubProof(overrides?: CallOverrides): Promise<BigNumber>;

    getTelegram(overrides?: CallOverrides): Promise<BigNumber>;

    getTwitter(overrides?: CallOverrides): Promise<BigNumber>;

    getTwitterProof(overrides?: CallOverrides): Promise<BigNumber>;

    getWebsite(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getGithub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGithubProof(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTelegram(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTwitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTwitterProof(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWebsite(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
