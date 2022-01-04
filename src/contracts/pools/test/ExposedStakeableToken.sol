// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "../core/StakeableToken.sol";

contract ExposedStakeableToken is StakeableToken {
  constructor(address _underlyingAddress, address _stakeableStrategyAddress)
  public
  StakeableToken(_underlyingAddress, _stakeableStrategyAddress)
  {}

  function stake(uint256 amount) public {
    _stake(amount);
  }

  function withdraw(uint256 amount) public {
    _withdraw(amount);
  }

  function setStakeableStrategy(address _stakeableStrategyAddress) public {
    _setStakeableStrategy(_stakeableStrategyAddress);
  }
}