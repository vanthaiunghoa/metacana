#!/bin/sh

#npx hardhat --network bsc_testnet run ./scripts/deploy/console_setupLootboxEx.ts
npx hardhat --network $1 run ./scripts/deploy/console_setupMarketplace.ts