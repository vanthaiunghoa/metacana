// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

interface IStakeableStrategy {
  function canStake(address account) external returns (bool);
}
