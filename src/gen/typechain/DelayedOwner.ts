/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace DelayedOwner {
  export type TransactionStruct = {
    status: BigNumberish;
    triggerTime: BigNumberish;
    target: string;
    id: BigNumberish;
    data: BytesLike;
  };

  export type TransactionStructOutput = [
    number,
    BigNumber,
    string,
    BigNumber,
    string
  ] & {
    status: number;
    triggerTime: BigNumber;
    target: string;
    id: BigNumber;
    data: string;
  };
}

export interface DelayedOwnerInterface extends utils.Interface {
  contractName: "DelayedOwner";
  functions: {
    "cancel((uint8,uint256,address,uint256,bytes))": FunctionFragment;
    "execute((uint8,uint256,address,uint256,bytes))": FunctionFragment;
    "isValidWitness((uint8,uint256,address,uint256,bytes))": FunctionFragment;
    "owner()": FunctionFragment;
    "register((uint8,uint256,address,uint256,bytes))": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "txHashes(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancel",
    values: [DelayedOwner.TransactionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [DelayedOwner.TransactionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidWitness",
    values: [DelayedOwner.TransactionStruct]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [DelayedOwner.TransactionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "txHashes",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidWitness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "txHashes", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "TransactionCancelled(tuple)": EventFragment;
    "TransactionExecuted(tuple)": EventFragment;
    "TransactionRegistered(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionRegistered"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TransactionCancelledEvent = TypedEvent<
  [DelayedOwner.TransactionStructOutput],
  { transaction: DelayedOwner.TransactionStructOutput }
>;

export type TransactionCancelledEventFilter =
  TypedEventFilter<TransactionCancelledEvent>;

export type TransactionExecutedEvent = TypedEvent<
  [DelayedOwner.TransactionStructOutput],
  { transaction: DelayedOwner.TransactionStructOutput }
>;

export type TransactionExecutedEventFilter =
  TypedEventFilter<TransactionExecutedEvent>;

export type TransactionRegisteredEvent = TypedEvent<
  [DelayedOwner.TransactionStructOutput],
  { transaction: DelayedOwner.TransactionStructOutput }
>;

export type TransactionRegisteredEventFilter =
  TypedEventFilter<TransactionRegisteredEvent>;

export interface DelayedOwner extends BaseContract {
  contractName: "DelayedOwner";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DelayedOwnerInterface;

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
    cancel(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isValidWitness(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isValid: boolean }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    register(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    txHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  cancel(
    _tx: DelayedOwner.TransactionStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    _tx: DelayedOwner.TransactionStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isValidWitness(
    _tx: DelayedOwner.TransactionStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  register(
    _tx: DelayedOwner.TransactionStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  txHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancel(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    isValidWitness(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    register(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    txHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TransactionCancelled(tuple)"(
      transaction?: null
    ): TransactionCancelledEventFilter;
    TransactionCancelled(transaction?: null): TransactionCancelledEventFilter;

    "TransactionExecuted(tuple)"(
      transaction?: null
    ): TransactionExecutedEventFilter;
    TransactionExecuted(transaction?: null): TransactionExecutedEventFilter;

    "TransactionRegistered(tuple)"(
      transaction?: null
    ): TransactionRegisteredEventFilter;
    TransactionRegistered(transaction?: null): TransactionRegisteredEventFilter;
  };

  estimateGas: {
    cancel(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isValidWitness(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    txHashes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isValidWitness(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      _tx: DelayedOwner.TransactionStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    txHashes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
