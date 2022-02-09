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

export interface RegistryInterface extends utils.Interface {
  contractName: "Registry";
  functions: {
    "MAX_PROVIDER_FEE_BPS()": FunctionFragment;
    "addProtocolControl(address,address)": FunctionFragment;
    "defaultFeeBps()": FunctionFragment;
    "deployProtocol(string)": FunctionFragment;
    "deployer()": FunctionFragment;
    "forwarder()": FunctionFragment;
    "getFeeBps(address)": FunctionFragment;
    "getProtocolControl(address,uint256)": FunctionFragment;
    "getProtocolControlCount(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDefaultFeeBps(uint256)": FunctionFragment;
    "setDeployer(address)": FunctionFragment;
    "setProtocolControlFeeBps(address,uint256)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_PROVIDER_FEE_BPS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addProtocolControl",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultFeeBps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployProtocol",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(functionFragment: "forwarder", values?: undefined): string;
  encodeFunctionData(functionFragment: "getFeeBps", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getProtocolControl",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolControlCount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultFeeBps",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setDeployer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setProtocolControlFeeBps",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setTreasury", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MAX_PROVIDER_FEE_BPS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addProtocolControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultFeeBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forwarder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFeeBps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolControlCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultFeeBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolControlFeeBps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;

  events: {
    "DefaultFeeBpsUpdated(uint256)": EventFragment;
    "DeployerUpdated(address)": EventFragment;
    "MigratedProtocolControl(address,uint256,address)": EventFragment;
    "NewProtocolControl(address,uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProtocolControlFeeBpsUpdated(address,uint256)": EventFragment;
    "TreasuryUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DefaultFeeBpsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MigratedProtocolControl"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewProtocolControl"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ProtocolControlFeeBpsUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryUpdated"): EventFragment;
}

export type DefaultFeeBpsUpdatedEvent = TypedEvent<
  [BigNumber],
  { defaultFeeBps: BigNumber }
>;

export type DefaultFeeBpsUpdatedEventFilter =
  TypedEventFilter<DefaultFeeBpsUpdatedEvent>;

export type DeployerUpdatedEvent = TypedEvent<
  [string],
  { newDeployer: string }
>;

export type DeployerUpdatedEventFilter = TypedEventFilter<DeployerUpdatedEvent>;

export type MigratedProtocolControlEvent = TypedEvent<
  [string, BigNumber, string],
  { deployer: string; version: BigNumber; controlAddress: string }
>;

export type MigratedProtocolControlEventFilter =
  TypedEventFilter<MigratedProtocolControlEvent>;

export type NewProtocolControlEvent = TypedEvent<
  [string, BigNumber, string, string],
  {
    deployer: string;
    version: BigNumber;
    controlAddress: string;
    controlDeployer: string;
  }
>;

export type NewProtocolControlEventFilter =
  TypedEventFilter<NewProtocolControlEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type ProtocolControlFeeBpsUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { control: string; feeBps: BigNumber }
>;

export type ProtocolControlFeeBpsUpdatedEventFilter =
  TypedEventFilter<ProtocolControlFeeBpsUpdatedEvent>;

export type TreasuryUpdatedEvent = TypedEvent<
  [string],
  { newTreasury: string }
>;

export type TreasuryUpdatedEventFilter = TypedEventFilter<TreasuryUpdatedEvent>;

export interface Registry extends BaseContract {
  contractName: "Registry";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistryInterface;

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
    MAX_PROVIDER_FEE_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    addProtocolControl(
      _deployer: string,
      _protocolControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    defaultFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;

    deployProtocol(
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    forwarder(overrides?: CallOverrides): Promise<[string]>;

    getFeeBps(
      protocolControl: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProtocolControl(
      _deployer: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getProtocolControlCount(
      _deployer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDefaultFeeBps(
      _newFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDeployer(
      _newDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProtocolControlFeeBps(
      protocolControl: string,
      _newFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_PROVIDER_FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;

  addProtocolControl(
    _deployer: string,
    _protocolControl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  defaultFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

  deployProtocol(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployer(overrides?: CallOverrides): Promise<string>;

  forwarder(overrides?: CallOverrides): Promise<string>;

  getFeeBps(
    protocolControl: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProtocolControl(
    _deployer: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getProtocolControlCount(
    _deployer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDefaultFeeBps(
    _newFeeBps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDeployer(
    _newDeployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProtocolControlFeeBps(
    protocolControl: string,
    _newFeeBps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasury(
    _newTreasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_PROVIDER_FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    addProtocolControl(
      _deployer: string,
      _protocolControl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    defaultFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

    deployProtocol(uri: string, overrides?: CallOverrides): Promise<void>;

    deployer(overrides?: CallOverrides): Promise<string>;

    forwarder(overrides?: CallOverrides): Promise<string>;

    getFeeBps(
      protocolControl: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolControl(
      _deployer: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getProtocolControlCount(
      _deployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setDefaultFeeBps(
      _newFeeBps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDeployer(_newDeployer: string, overrides?: CallOverrides): Promise<void>;

    setProtocolControlFeeBps(
      protocolControl: string,
      _newFeeBps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasury(_newTreasury: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DefaultFeeBpsUpdated(uint256)"(
      defaultFeeBps?: null
    ): DefaultFeeBpsUpdatedEventFilter;
    DefaultFeeBpsUpdated(defaultFeeBps?: null): DefaultFeeBpsUpdatedEventFilter;

    "DeployerUpdated(address)"(newDeployer?: null): DeployerUpdatedEventFilter;
    DeployerUpdated(newDeployer?: null): DeployerUpdatedEventFilter;

    "MigratedProtocolControl(address,uint256,address)"(
      deployer?: string | null,
      version?: BigNumberish | null,
      controlAddress?: string | null
    ): MigratedProtocolControlEventFilter;
    MigratedProtocolControl(
      deployer?: string | null,
      version?: BigNumberish | null,
      controlAddress?: string | null
    ): MigratedProtocolControlEventFilter;

    "NewProtocolControl(address,uint256,address,address)"(
      deployer?: string | null,
      version?: BigNumberish | null,
      controlAddress?: string | null,
      controlDeployer?: null
    ): NewProtocolControlEventFilter;
    NewProtocolControl(
      deployer?: string | null,
      version?: BigNumberish | null,
      controlAddress?: string | null,
      controlDeployer?: null
    ): NewProtocolControlEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ProtocolControlFeeBpsUpdated(address,uint256)"(
      control?: string | null,
      feeBps?: null
    ): ProtocolControlFeeBpsUpdatedEventFilter;
    ProtocolControlFeeBpsUpdated(
      control?: string | null,
      feeBps?: null
    ): ProtocolControlFeeBpsUpdatedEventFilter;

    "TreasuryUpdated(address)"(newTreasury?: null): TreasuryUpdatedEventFilter;
    TreasuryUpdated(newTreasury?: null): TreasuryUpdatedEventFilter;
  };

  estimateGas: {
    MAX_PROVIDER_FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    addProtocolControl(
      _deployer: string,
      _protocolControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    defaultFeeBps(overrides?: CallOverrides): Promise<BigNumber>;

    deployProtocol(
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    forwarder(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeBps(
      protocolControl: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolControl(
      _deployer: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProtocolControlCount(
      _deployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDefaultFeeBps(
      _newFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDeployer(
      _newDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProtocolControlFeeBps(
      protocolControl: string,
      _newFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_PROVIDER_FEE_BPS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addProtocolControl(
      _deployer: string,
      _protocolControl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    defaultFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployProtocol(
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeeBps(
      protocolControl: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolControl(
      _deployer: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolControlCount(
      _deployer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDefaultFeeBps(
      _newFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDeployer(
      _newDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolControlFeeBps(
      protocolControl: string,
      _newFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _newTreasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
