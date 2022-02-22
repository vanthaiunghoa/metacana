#!/bin/sh

npx hardhat --network $1 run ./scripts/deploy/console_metacana.ts
npx hardhat --network $1 run ./scripts/deploy/console_canaItem.ts
npx hardhat --network $1 run ./scripts/deploy/console_canaItemLootBox.ts
npx hardhat --network $1 run ./scripts/deploy/console_canaItemFactory.ts
npx hardhat --network $1 run ./scripts/deploy/console_marketplace.ts