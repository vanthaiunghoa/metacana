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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace IMarketplace {
  export type ListingStruct = {
    listingId: BigNumberish;
    tokenOwner: string;
    assetContract: string;
    tokenId: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    quantity: BigNumberish;
    currency: string;
    reservePricePerToken: BigNumberish;
    buyoutPricePerToken: BigNumberish;
    tokenType: BigNumberish;
    listingType: BigNumberish;
  };

  export type ListingStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number,
    number
  ] & {
    listingId: BigNumber;
    tokenOwner: string;
    assetContract: string;
    tokenId: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    quantity: BigNumber;
    currency: string;
    reservePricePerToken: BigNumber;
    buyoutPricePerToken: BigNumber;
    tokenType: number;
    listingType: number;
  };

  export type ListingParametersStruct = {
    assetContract: string;
    tokenId: BigNumberish;
    startTime: BigNumberish;
    secondsUntilEndTime: BigNumberish;
    quantityToList: BigNumberish;
    currencyToAccept: string;
    reservePricePerToken: BigNumberish;
    buyoutPricePerToken: BigNumberish;
    listingType: BigNumberish;
  };

  export type ListingParametersStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number
  ] & {
    assetContract: string;
    tokenId: BigNumber;
    startTime: BigNumber;
    secondsUntilEndTime: BigNumber;
    quantityToList: BigNumber;
    currencyToAccept: string;
    reservePricePerToken: BigNumber;
    buyoutPricePerToken: BigNumber;
    listingType: number;
  };
}

export interface IMarketplaceInterface extends utils.Interface {
  contractName: "IMarketplace";
  functions: {
    "acceptOffer(uint256,address)": FunctionFragment;
    "buy(uint256,uint256,address,uint256)": FunctionFragment;
    "closeAuction(uint256,address)": FunctionFragment;
    "createListing((address,uint256,uint256,uint256,uint256,address,uint256,uint256,uint8))": FunctionFragment;
    "offer(uint256,uint256,address,uint256)": FunctionFragment;
    "updateListing(uint256,uint256,uint256,uint256,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeAuction",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createListing",
    values: [IMarketplace.ListingParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "offer",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "offer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;

  events: {
    "AuctionBuffersUpdated(uint256,uint256)": EventFragment;
    "AuctionClosed(uint256,address,bool,address,address)": EventFragment;
    "ListingRestricted(bool)": EventFragment;
    "ListingUpdate(uint256,address)": EventFragment;
    "MarketFeeUpdate(uint64)": EventFragment;
    "NewListing(uint256,address,address,tuple)": EventFragment;
    "NewOffer(uint256,address,uint8,uint256,uint256,address)": EventFragment;
    "NewSale(uint256,address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionBuffersUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingRestricted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketFeeUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewListing"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOffer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSale"): EventFragment;
}

export type AuctionBuffersUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { timeBuffer: BigNumber; bidBufferBps: BigNumber }
>;

export type AuctionBuffersUpdatedEventFilter =
  TypedEventFilter<AuctionBuffersUpdatedEvent>;

export type AuctionClosedEvent = TypedEvent<
  [BigNumber, string, boolean, string, string],
  {
    listingId: BigNumber;
    closer: string;
    cancelled: boolean;
    auctionCreator: string;
    winningBidder: string;
  }
>;

export type AuctionClosedEventFilter = TypedEventFilter<AuctionClosedEvent>;

export type ListingRestrictedEvent = TypedEvent<
  [boolean],
  { restricted: boolean }
>;

export type ListingRestrictedEventFilter =
  TypedEventFilter<ListingRestrictedEvent>;

export type ListingUpdateEvent = TypedEvent<
  [BigNumber, string],
  { listingId: BigNumber; listingCreator: string }
>;

export type ListingUpdateEventFilter = TypedEventFilter<ListingUpdateEvent>;

export type MarketFeeUpdateEvent = TypedEvent<
  [BigNumber],
  { newFee: BigNumber }
>;

export type MarketFeeUpdateEventFilter = TypedEventFilter<MarketFeeUpdateEvent>;

export type NewListingEvent = TypedEvent<
  [BigNumber, string, string, IMarketplace.ListingStructOutput],
  {
    listingId: BigNumber;
    assetContract: string;
    lister: string;
    listing: IMarketplace.ListingStructOutput;
  }
>;

export type NewListingEventFilter = TypedEventFilter<NewListingEvent>;

export type NewOfferEvent = TypedEvent<
  [BigNumber, string, number, BigNumber, BigNumber, string],
  {
    listingId: BigNumber;
    offeror: string;
    listingType: number;
    quantityWanted: BigNumber;
    totalOfferAmount: BigNumber;
    currency: string;
  }
>;

export type NewOfferEventFilter = TypedEventFilter<NewOfferEvent>;

export type NewSaleEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber, BigNumber],
  {
    listingId: BigNumber;
    assetContract: string;
    lister: string;
    buyer: string;
    quantityBought: BigNumber;
    totalPricePaid: BigNumber;
  }
>;

export type NewSaleEventFilter = TypedEventFilter<NewSaleEvent>;

export interface IMarketplace extends BaseContract {
  contractName: "IMarketplace";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMarketplaceInterface;

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
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      _listingId: BigNumberish,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOffer(
    _listingId: BigNumberish,
    _offeror: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    _listingId: BigNumberish,
    _quantity: BigNumberish,
    _currency: string,
    _totalPrice: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closeAuction(
    _listingId: BigNumberish,
    _closeFor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createListing(
    _params: IMarketplace.ListingParametersStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  offer(
    _listingId: BigNumberish,
    _quantityWanted: BigNumberish,
    _currency: string,
    _pricePerToken: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateListing(
    _listingId: BigNumberish,
    _quantityToList: BigNumberish,
    _reservePricePerToken: BigNumberish,
    _buyoutPricePerToken: BigNumberish,
    _currencyToAccept: string,
    _startTime: BigNumberish,
    _secondsUntilEndTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(
      _listingId: BigNumberish,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuctionBuffersUpdated(uint256,uint256)"(
      timeBuffer?: null,
      bidBufferBps?: null
    ): AuctionBuffersUpdatedEventFilter;
    AuctionBuffersUpdated(
      timeBuffer?: null,
      bidBufferBps?: null
    ): AuctionBuffersUpdatedEventFilter;

    "AuctionClosed(uint256,address,bool,address,address)"(
      listingId?: BigNumberish | null,
      closer?: string | null,
      cancelled?: boolean | null,
      auctionCreator?: null,
      winningBidder?: null
    ): AuctionClosedEventFilter;
    AuctionClosed(
      listingId?: BigNumberish | null,
      closer?: string | null,
      cancelled?: boolean | null,
      auctionCreator?: null,
      winningBidder?: null
    ): AuctionClosedEventFilter;

    "ListingRestricted(bool)"(restricted?: null): ListingRestrictedEventFilter;
    ListingRestricted(restricted?: null): ListingRestrictedEventFilter;

    "ListingUpdate(uint256,address)"(
      listingId?: BigNumberish | null,
      listingCreator?: string | null
    ): ListingUpdateEventFilter;
    ListingUpdate(
      listingId?: BigNumberish | null,
      listingCreator?: string | null
    ): ListingUpdateEventFilter;

    "MarketFeeUpdate(uint64)"(newFee?: null): MarketFeeUpdateEventFilter;
    MarketFeeUpdate(newFee?: null): MarketFeeUpdateEventFilter;

    "NewListing(uint256,address,address,tuple)"(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      listing?: null
    ): NewListingEventFilter;
    NewListing(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      listing?: null
    ): NewListingEventFilter;

    "NewOffer(uint256,address,uint8,uint256,uint256,address)"(
      listingId?: BigNumberish | null,
      offeror?: string | null,
      listingType?: BigNumberish | null,
      quantityWanted?: null,
      totalOfferAmount?: null,
      currency?: null
    ): NewOfferEventFilter;
    NewOffer(
      listingId?: BigNumberish | null,
      offeror?: string | null,
      listingType?: BigNumberish | null,
      quantityWanted?: null,
      totalOfferAmount?: null,
      currency?: null
    ): NewOfferEventFilter;

    "NewSale(uint256,address,address,address,uint256,uint256)"(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      buyer?: null,
      quantityBought?: null,
      totalPricePaid?: null
    ): NewSaleEventFilter;
    NewSale(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      buyer?: null,
      quantityBought?: null,
      totalPricePaid?: null
    ): NewSaleEventFilter;
  };

  estimateGas: {
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      _listingId: BigNumberish,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      _listingId: BigNumberish,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
