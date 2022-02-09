import * as values from './valuesCommon'

import { BigNumber } from 'ethers'

// A function in case we need to change this relationship
const tokenIndexToId = a => a;
const startTime = BigNumber.from(Math.floor(Date.now() / 1000))
const endTime = BigNumber.from(startTime.add(1200*60*60)) // 1200 hour from now
const minRange = BigNumber.from(1);
  const maxRange = BigNumber.from(500);

// Configure the nfts

export const setupAccessory = async (
  accessories,
  owner
) => {
  for (let i = 0; i < values.NUM_ACCESSORIES; i++) {
    const id = tokenIndexToId(i);    
    await accessories.create(owner, id, values.MINT_INITIAL_SUPPLY, []);    
  }
};

// Configure the lootbox

export const setupAccessoryLootBox = async (lootBox, factory) => {
  await lootBox.setState(
    factory.address,
    values.NUM_LOOTBOX_OPTIONS,
    values.NUM_CLASSES,
    1337
  );
  // We have one token id per rarity class.
  for (let i = 0; i < values.NUM_CLASSES; i++) {
    const id = tokenIndexToId(i);
    await lootBox.setTokenIdsForClass(i, [id]);
  }
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_BASIC,
    3,
    [7300, 2100, 400, 100, 50, 50],
    [0, 0, 0, 0, 0, 0]
  );
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_PREMIUM,
    5,
    [7300, 2100, 400, 100, 50, 50],
    [3, 0, 0, 0, 0, 0]
  );
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_GOLD,
    7,
    [7300, 2100, 400, 100, 50, 50],
    [3, 0, 2, 0, 1, 0]
  );
};

// Deploy and configure everything

export const setupCreatureAccessories = async(accessories, factory, lootBox, owner) => {  
  await accessories.addMintPermission(factory.address, minRange, maxRange, startTime, endTime)
  await accessories.addMintPermission(accessories.address, minRange, maxRange, startTime, endTime)
  await setupAccessory(accessories, owner);
  // await accessories.setApprovalForAll(factory.address, true, { from: owner });
  // await accessories.transferOwnership(factory.address);
  // await setupAccessoryLootBox(lootBox, factory);
  // await lootBox.transferOwnership(factory.address);
};


module.exports = {
  setupAccessory,
  setupAccessoryLootBox,
  setupCreatureAccessories
};
