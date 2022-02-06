// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

interface IRedeemableStrategy {
  function canRedeem(address account, uint256 nftId) external returns (bool);
}
