// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IRedeemableStrategy {
  function canRedeem(address account, uint256 nftId) external returns (bool);
}
