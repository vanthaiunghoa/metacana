/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GenesisPool, GenesisPoolInterface } from "../GenesisPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftsAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakeableStrategyAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "previousStakeableStrategy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newStakeableStrategy",
        type: "address",
      },
    ],
    name: "StakeableStrategyUpdated",
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
    name: "StakedTokens",
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
    name: "WithdrawnTokens",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pointsToRedeem",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "addNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "denyList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earnedPoints",
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
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "lastUpdateTime",
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
  {
    inputs: [],
    name: "maximumStake",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
  {
    inputs: [],
    name: "poolName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    name: "redeem",
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
      {
        internalType: "uint256",
        name: "_stakeSize",
        type: "uint256",
      },
    ],
    name: "setMaximumStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeableStrategy",
        type: "address",
      },
    ],
    name: "setStakeableStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeableStrategy",
    outputs: [
      {
        internalType: "contract IStakeableStrategy",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "updateNFTStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052612710600c553480156200001757600080fd5b5060405162002110380380620021108339810160408190526200003a91620002a3565b60408051808201909152600c81527f47656e6573697320506f6f6c000000000000000000000000000000000000000060208201526000805473ffffffffffffffffffffffffffffffffffffffff8086167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600680548386169083161790556007805492871692909116919091179055838383620000e5620000df3390565b6200015c565b8351620000fa90600d906020870190620001d3565b506200014f8273ffffffffffffffffffffffffffffffffffffffff166000908152600b6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b5050505050505062000329565b600a805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001e190620002ec565b90600052602060002090601f01602090048101928262000205576000855562000250565b82601f106200022057805160ff191683800117855562000250565b8280016001018555821562000250579182015b828111156200025057825182559160200191906001019062000233565b506200025e92915062000262565b5090565b5b808211156200025e576000815560010162000263565b805173ffffffffffffffffffffffffffffffffffffffff811681146200029e57600080fd5b919050565b600080600060608486031215620002b8578283fd5b620002c38462000279565b9250620002d36020850162000279565b9150620002e36040850162000279565b90509250925092565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b611dd780620003396000396000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c8063715018a6116100ee578063bcb5c63611610097578063e9fad8ee11610071578063e9fad8ee1461045a578063f2fde38b14610462578063f3466dfa14610475578063fd5e6dd11461048a576101ae565b8063bcb5c63614610421578063c3e3e69014610434578063db006a7514610447576101ae565b806399cc23cb116100c857806399cc23cb146103f2578063a694fc3a14610405578063b5c6b45314610418576101ae565b8063715018a6146103ac57806385e656f9146103b45780638da5cb5b146103d4576101ae565b8063406821521161015b5780635705ae43116101355780635705ae4314610330578063584333ed146103435780636f307dc31461035657806370a0823114610376576101ae565b806340682152146102a357806343352d61146102d65780635153e5cc146102eb576101ae565b80632d9ee1391161018c5780632d9ee1391461025b5780632e1a7d4d1461026e578063358b816614610283576101ae565b806318160ddd146101b3578063265aa621146101ca5780632ce9aead14610248575b600080fd5b6001545b6040519081526020015b60405180910390f35b6102116101d8366004611b37565b60086020526000908152604090208054600182015460029092015473ffffffffffffffffffffffffffffffffffffffff91821692911683565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815260208101939093529216918101919091526060016101c1565b6101b7610256366004611ad4565b61049d565b6101b7610269366004611ad4565b6104c9565b61028161027c366004611b37565b610509565b005b6101b7610291366004611ad4565b60096020526000908152604090205481565b6102c66102b1366004611ad4565b600b6020526000908152604090205460ff1681565b60405190151581526020016101c1565b6102de61052f565b6040516101c19190611bae565b60065461030b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c1565b61028161033e366004611aee565b61059e565b610281610351366004611b7a565b610827565b60005461030b9073ffffffffffffffffffffffffffffffffffffffff1681565b6101b7610384366004611ad4565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b6102816108b3565b60075461030b9073ffffffffffffffffffffffffffffffffffffffff1681565b600a5473ffffffffffffffffffffffffffffffffffffffff1661030b565b610281610400366004611ad4565b610940565b610281610413366004611b37565b6109cd565b6101b7600c5481565b61028161042f366004611b37565b610aa8565b610281610442366004611b4f565b610b2e565b610281610455366004611b37565b610bb9565b610281610bd6565b610281610470366004611ad4565b610bef565b61047d610d1c565b6040516101c19190611c08565b61030b610498366004611b37565b610daa565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600360205260409020545b919050565b60006105036104d783610de1565b73ffffffffffffffffffffffffffffffffffffffff841660009081526009602052604090205490610e56565b92915050565b338015610522576105228161051d83610de1565b610e62565b61052b82610ebf565b5050565b6060600580548060200260200160405190810160405280929190818152602001828054801561059457602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610569575b5050505050905090565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b602052604090205460ff16156106da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f546f6b656e5265636f766572237265636f7665723a2043616e6e6f742072656360448201527f6f76657220746f6b656e732066726f6d207468652064656e796c697374000000606482015260840161061b565b73ffffffffffffffffffffffffffffffffffffffff821661074257600a5460405173ffffffffffffffffffffffffffffffffffffffff9091169082156108fc029083906000818181858888f1935050505015801561073c573d6000803e3d6000fd5b5061052b565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61077d600a5473ffffffffffffffffffffffffffffffffffffffff1690565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff909116600482015260248101849052604401602060405180830381600087803b1580156107ea57600080fd5b505af11580156107fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108229190611b17565b505050565b600a5473ffffffffffffffffffffffffffffffffffffffff1633146108a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161061b565b610822838383610ec9565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610934576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161061b565b61093e6000610f8e565b565b600a5473ffffffffffffffffffffffffffffffffffffffff1633146109c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161061b565b6109ca81611005565b50565b3380156109e1576109e18161051d83610de1565b600c546109f690670de0b6b3a7640000611093565b33600090815260026020526040902054610a11908490610e56565b1115610a9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4e46545374616b6561626c65506f6f6c237374616b653a2043616e6e6f74207360448201527f74616b65206d6f726520746f6b656e7300000000000000000000000000000000606482015260840161061b565b61052b8261109f565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610b29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161061b565b600c55565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610baf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161061b565b61052b82826113ea565b338015610bcd57610bcd8161051d83610de1565b61052b82611517565b3360009081526002602052604090205461093e9061027c565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610c70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161061b565b73ffffffffffffffffffffffffffffffffffffffff8116610d13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161061b565b6109ca81610f8e565b600d8054610d2990611d1e565b80601f0160208091040260200160405190810160405280929190818152602001828054610d5590611d1e565b8015610da25780601f10610d7757610100808354040283529160200191610da2565b820191906000526020600020905b815481529060010190602001808311610d8557829003601f168201915b505050505081565b60058181548110610dba57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b600042610e4f670de0b6b3a7640000610e496201518081610e248873ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b610e43670de0b6b3a7640000610e43610e3c8c61049d565b8a9061183d565b90611093565b90611849565b9392505050565b6000610e4f8284611c79565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260096020526040902054610e929082610e56565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526009602052604090209190915550565b6109ca8133611855565b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff83811680835260208084018781523385870181815260008b815260088552889020965187549087167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161788559251600188015551600290960180549690951695909116949094179092559251918252849186917f8d2859dbeda2989ace461ec9b60da19bc4ef71b9cc32b41cb475ee0835915f67910160405180910390a4505050565b600a805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60065460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f75774f26d6124c861a4792c459d439572cd2430cbcd07f031b24315c0ad86cec90600090a3600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000610e4f8284611cca565b3380156110cf5773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b60065473ffffffffffffffffffffffffffffffffffffffff16158061119257506006546040517f36d8bf9300000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116906336d8bf9390602401602060405180830381600087803b15801561115a57600080fd5b505af115801561116e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111929190611b17565b611244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604560248201527f5374616b6561626c65546f6b656e235f7374616b653a2053656e64657220646f60448201527f65736e2774206d6565742074686520726571756972656d656e747320746f207360648201527f74616b652e000000000000000000000000000000000000000000000000000000608482015260a40161061b565b336000908152600460205260409020546112c25760058054600181019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009081526004602052604090204290555b6001546112cf9083610e56565b600155336000908152600260205260409020546112ec9083610e56565b33600081815260026020526040808220939093555491517f23b872dd00000000000000000000000000000000000000000000000000000000815260048101919091523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90606401602060405180830381600087803b15801561137757600080fd5b505af115801561138b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113af9190611b17565b5060405182815233907f07ebe4cc0edd899e6e61889dcebbcaeb1e6ae4e97d01019119e07184016bd076906020015b60405180910390a25050565b60008281526008602052604090206001810154611489576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f52656465656d61626c654e4654237570646174654e465453747261746567793a60448201527f204e4654206e6f7420666f756e64000000000000000000000000000000000000606482015260840161061b565b805460405173ffffffffffffffffffffffffffffffffffffffff80851692169085907f88ab94ea38fc8ccd3e63207caf4c6ca72efc456e6c0dd09bfb016bdcd370515f90600090a480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b600081815260086020526040902060018101546115b5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f52656465656d61626c654e4654235f72656465656d3a204e4654206e6f74206660448201527f6f756e6400000000000000000000000000000000000000000000000000000000606482015260840161061b565b6001810154336000908152600960205260409020541015611658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f52656465656d61626c654e4654235f72656465656d3a204e6f7420656e6f756760448201527f6820706f696e747320746f2072656465656d20666f72204e4654000000000000606482015260840161061b565b805473ffffffffffffffffffffffffffffffffffffffff161580611720575080546040517fcc1f8ffa0000000000000000000000000000000000000000000000000000000081523360048201526024810184905273ffffffffffffffffffffffffffffffffffffffff9091169063cc1f8ffa90604401602060405180830381600087803b1580156116e857600080fd5b505af11580156116fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117209190611b17565b6117d3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526044602482018190527f52656465656d61626c654e4654235f72656465656d3a2053656e64657220646f908201527f65736e2774206d6565742074686520726571756972656d656e747320746f206d60648201527f696e742e00000000000000000000000000000000000000000000000000000000608482015260a40161061b565b6001810154336000908152600960205260409020546117f19161183d565b3360008181526009602052604090819020929092556001830154915190917f14c9b4d4f4cc58cdc10083ad4d08288a39df874bbf3e4e0846f3fd1352d48c87916113de91815260200190565b6000610e4f8284611d07565b6000610e4f8284611c91565b3380156118855773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b600083116118ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015260640161061b565b3360009081526002602052604090205483111561198e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f43616e6e6f74207769746864726177206d6f7265207468616e2077686174277360448201527f207374616b65642e000000000000000000000000000000000000000000000000606482015260840161061b565b60015461199b908461183d565b600155336000908152600260205260409020546119b8908461183d565b33600090815260026020526040808220929092555490517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018690529091169063a9059cbb90604401602060405180830381600087803b158015611a3d57600080fd5b505af1158015611a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a759190611b17565b5060405183815233907f373d92bf7d9cdd58a8c86db5461f3cdcd325b803fdbac8d1b224a0f5fce847b89060200160405180910390a2505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104c457600080fd5b600060208284031215611ae5578081fd5b610e4f82611ab0565b60008060408385031215611b00578081fd5b611b0983611ab0565b946020939093013593505050565b600060208284031215611b28578081fd5b81518015158114610e4f578182fd5b600060208284031215611b48578081fd5b5035919050565b60008060408385031215611b61578182fd5b82359150611b7160208401611ab0565b90509250929050565b600080600060608486031215611b8e578081fd5b8335925060208401359150611ba560408501611ab0565b90509250925092565b6020808252825182820181905260009190848201906040850190845b81811015611bfc57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611bca565b50909695505050505050565b6000602080835283518082850152825b81811015611c3457858101830151858201604001528201611c18565b81811115611c455783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115611c8c57611c8c611d72565b500190565b600082611cc5577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d0257611d02611d72565b500290565b600082821015611d1957611d19611d72565b500390565b600181811c90821680611d3257607f821691505b60208210811415611d6c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220c18632a98a9a8ac4f600c438eaa84ca63b969f94fec6f061aa756ef298b2385c64736f6c63430008030033";

type GenesisPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenesisPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenesisPool__factory extends ContractFactory {
  constructor(...args: GenesisPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GenesisPool";
  }

  deploy(
    _nftsAddress: string,
    _underlyingAddress: string,
    _stakeableStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenesisPool> {
    return super.deploy(
      _nftsAddress,
      _underlyingAddress,
      _stakeableStrategyAddress,
      overrides || {}
    ) as Promise<GenesisPool>;
  }
  getDeployTransaction(
    _nftsAddress: string,
    _underlyingAddress: string,
    _stakeableStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nftsAddress,
      _underlyingAddress,
      _stakeableStrategyAddress,
      overrides || {}
    );
  }
  attach(address: string): GenesisPool {
    return super.attach(address) as GenesisPool;
  }
  connect(signer: Signer): GenesisPool__factory {
    return super.connect(signer) as GenesisPool__factory;
  }
  static readonly contractName: "GenesisPool";
  public readonly contractName: "GenesisPool";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenesisPoolInterface {
    return new utils.Interface(_abi) as GenesisPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenesisPool {
    return new Contract(address, _abi, signerOrProvider) as GenesisPool;
  }
}
