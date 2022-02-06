// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

interface IStakeableStrategy {
  function canStake(address account) external returns (bool);
}
