// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

library AssetRangeStruct {
    struct AssetRange {
      uint64 minID; // Minimum value the ID need to be to fall in the range
      uint64 maxID; // Maximum value the ID need to be to fall in the range
      uint64 startTime; // Timestamp when the range becomes valid
      uint64 endTime; // Timestamp after which the range is no longer valid
    }  
}