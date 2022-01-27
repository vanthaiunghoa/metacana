// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "../../nft/interfaces/IMetacanaAssets.sol";
import "../interfaces/IRedeemableStrategy.sol";

abstract contract RedeemableNFT {
  using SafeMath for uint256;

  struct NFT {
    IRedeemableStrategy strategy;
    uint256 pointsToRedeem;
    address creator;
  }

  IMetacanaAssets public nftsContract;
  mapping(uint256 => NFT) public nfts;
  mapping(address => uint256) public points;

  constructor(address _nftsAddress) internal {
    nftsContract = IMetacanaAssets(_nftsAddress);
  }

  event NFTAdded(
    uint256 indexed nftId,
    uint256 indexed pointsToRedeem,
    address indexed strategyAddress,
    address creator
  );

  event NFTStrategyUpdated(
    uint256 indexed nftId,
    address indexed previousStrategy,
    address indexed newStrategy
  );

  event NFTRedeemed(address indexed user, uint256 amount);

  function _addNFT(
    uint256 nftId,
    uint256 pointsToRedeem,
    address strategy
  ) internal {
    // require(nftsContract.exists(nftId), "RedeemableNFT#_addNFT: NFT doesn't exist"); //TODO: need to check more
    nfts[nftId] = NFT(IRedeemableStrategy(strategy), pointsToRedeem, msg.sender);
    emit NFTAdded(nftId, pointsToRedeem, strategy, msg.sender);
  }

  function _updateNFTStrategy(uint256 nftId, address strategy) internal {
    NFT storage nft = nfts[nftId];
    require(nft.pointsToRedeem != 0, "RedeemableNFT#updateNFTStrategy: NFT not found");

    // Gotta emit before changing the address
    emit NFTStrategyUpdated(
      nftId,
      address(nft.strategy),
      strategy
    );

    nft.strategy = IRedeemableStrategy(strategy);
  }

  function _increasePoints(address account, uint256 pointsToAdd) internal {
    points[account] = points[account].add(pointsToAdd);
  }

  function _redeem(uint256 nftId) internal {
    NFT storage nft = nfts[nftId];

    require(nft.pointsToRedeem != 0, "RedeemableNFT#_redeem: NFT not found");
    require(points[msg.sender] >= nft.pointsToRedeem, "RedeemableNFT#_redeem: Not enough points to redeem for NFT");
    // require(nftsContract.mintable(nftId), "RedeemableNFT#_redeem: Max NFTs minted"); //TODO: need to check
    require(
      address(nft.strategy) == address(0) || nft.strategy.canRedeem(msg.sender, nftId),
      "RedeemableNFT#_redeem: Sender doesn't meet the requirements to mint."
    );

    points[msg.sender] = points[msg.sender].sub(nft.pointsToRedeem);
    // nftsContract.mint(msg.sender, nftId, 1, ""); //TODO: need to check

    emit NFTRedeemed(msg.sender, nft.pointsToRedeem);
  }

}
