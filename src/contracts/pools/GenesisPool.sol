// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "./core/NFTStakeablePool.sol";

contract GenesisPool is NFTStakeablePool {
  constructor(
    address _nftsAddress,
    address _underlyingAddress,
    address _stakeableStrategyAddress
  )
    public
    NFTStakeablePool("Genesis Pool", _nftsAddress, _underlyingAddress, _stakeableStrategyAddress)
  {}
}
