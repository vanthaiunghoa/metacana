#!/bin/sh

npx hardhat --network $1 run ./console_metacana.ts
npx hardhat --network $1 run ./console_canaItem.ts
npx hardhat --network $1 run ./console_canaItemLootBox.ts
npx hardhat --network $1 run ./console_canaItemFactory.ts
npx hardhat --network $1 run ./console_marketplace.ts