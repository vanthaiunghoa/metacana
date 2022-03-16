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
    await accessories.create(owner, id, values.MINT_INITIAL_SUPPLY[Math.floor(i/8)], []);    
  }
};

//TODO: consider pre-minting only meta & prino
export const setupPreMintBox = async (lootBox, owner) => {
  for (let i = 0; i < values.NUM_LOOTBOX_OPTIONS; i++) {
    const option = values.LOOTBOX_OPTIONS[i];    
    const amount = values.LOOTBOX_PRE_MINT_AMOUNT[i];   
    await lootBox.mint(
      owner,
      option,
      amount,
      []
    );  
  } 
}

// Configure the lootbox
export const setupAccessoryLootBox = async (lootBox, factory) => {  
  console.log('values.NUM_CLASSES=',values.NUM_CLASSES, values.NUM_LOOTBOX_OPTIONS)
  await lootBox.setState(
    factory.address,
    values.NUM_LOOTBOX_OPTIONS,
    values.NUM_CLASSES,
    1337
  );
  // We have one token id per rarity class.
  for (let i = 0; i < values.NUM_CLASSES; i++) {    
    const ids = [...Array.from(Array(values.NUM_ACCESSORIES/values.NUM_CLASSES).keys())].map(j => tokenIndexToId(j + i*values.NUM_ACCESSORIES/values.NUM_CLASSES));   
    
    await lootBox.setTokenIdsForClass(i, ids);
  }
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_META,
    1,
    [5556, 2630, 1466, 347, 0, 0],
    [0, 0, 0, 0, 0, 0]
  );  
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_PRINO,
    (1),
    [(6139), (3569), (166), (83), (40), (3)],
    [(0), (0), (0), (0), (0), (0)]
  );    
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_VOKA,
    (1),
    [(3500), (2500), (1500), (2200), (300), (0)],
    [(0), (0), (0), (0), (0), (0)]
  );
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_NEGE,
    (1),
    [(3500), (2000), (1700), (1700), (900), (200)],
    [(0), (0), (0), (0), (0), (0)]
  );
  
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_HELI,
    (1),
    [(3500), (3500), (1500), (1000), (500), (0)],
    [(0), (0), (0), (0), (0), (0)]
  );
  console.log('Done setting up option-setting');
};

// Deploy and configure everything

export const setupCreatureAccessories = async(accessories, factory, lootBox, owner) => {      
  await setupAccessory(accessories, owner);  
  await accessories.setApprovalForAll(factory.address, true);
  await accessories.transferOwnership(factory.address);
  await setupAccessoryLootBox(lootBox, factory);
  await setupPreMintBox(lootBox, owner);
  await lootBox.transferOwnership(factory.address);
};


module.exports = {
  setupAccessory,
  setupAccessoryLootBox,
  setupCreatureAccessories,
  setupPreMintBox
};
