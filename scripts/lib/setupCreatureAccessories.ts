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
  await new Promise(f => setTimeout(f, 5000));
  for (let i = 0; i < values.NUM_ACCESSORIES; i++) {    
    console.log('***Creating accessory token id=',i, 'amount=', values.MINT_INITIAL_SUPPLY[Math.floor(i/8)], 'owner=',owner)
    const id = tokenIndexToId(i);    
    await accessories.create(owner, id, values.MINT_INITIAL_SUPPLY[Math.floor(i/8)], []);    
    await new Promise(f => setTimeout(f, 1500));
  }
  console.log('***Done setupAccessory')
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
  console.log('Done setting up pre-minted boxes')
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
  await new Promise(f => setTimeout(f, 5000));
  for (let j = 0; j < values.NUM_LOOTBOX_OPTIONS; j++) {     
    for (let i = 0; i < values.NUM_CLASSES; i++) {      
      let realI = i;
      switch (j) {
        case values.LOOTBOX_OPTION_META: //B,A,S,SS,C,D
          switch (i) {
            case 0:
              realI = 1;
              break;
            case 1:
              realI = 0;
              break;
            case 2:
              realI = 4;
              break;
            case 3:
              realI = 5;
              break;
            case 4:
              realI = 2;
              break;
            case 5:
              realI = 3;
              break;
            default:
              break;
          }
          
          break;
        case values.LOOTBOX_OPTION_PRINO:          
          switch (i) {
            case 0:
              realI = 3;
              break;
            case 1:
              realI = 2;
              break;
            case 2:
              realI = 1;
              break;
            case 3:
              realI = 0;
              break;
            default:
              break;
          }
          break;
        case values.LOOTBOX_OPTION_VOKA: 
          switch (i) {
            case 0:
              realI = 2;
              break;
            case 2:
              realI = 3;
              break;
            case 3:
              realI = 0;
              break;
            default:
              break;
          }
          break;
        case values.LOOTBOX_OPTION_NEGE: 
          switch (i) {
            case 0:
              realI = 1;
              break;
            case 1:
              realI = 2;
              break;
            case 2:
              realI = 0;
              break;
            case 3:
              realI = 4;
              break;
            case 4:
              realI = 3;
              break;
            default:
              break;
          }
          break;
        case values.LOOTBOX_OPTION_HELI: 
          switch (i) {
            case 1:
              realI = 4;
              break;
            case 2:
              realI = 1;
              break;
            case 3:
              realI = 2;
              break;
            case 4:
              realI = 5;
              break;
            case 5:
              realI = 3;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      const ids = [...Array.from(Array(values.NUM_ACCESSORIES/values.NUM_CLASSES).keys())].map(k => tokenIndexToId(k + realI*values.NUM_ACCESSORIES/values.NUM_CLASSES));   
      
      //Todo: Need to add optionId param
      console.log('setTokenIdsForClass: i=',i, 'j=',j);
      console.log(ids);
      //o,c, ids
      await lootBox.setTokenIdsForClass(j, i, ids);
      await new Promise(f => setTimeout(f, 5000));
    }
  }
  //A,B,C,D,S,SS
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_META,
    1,
    [5556, 2630, 1466, 347, 0, 0],//B,A,S,SS,C,D
    [0, 0, 0, 0, 0, 0]
  );  
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_PRINO,
    (1),
    [(6139), (3569), (166), (83), (40), (3)], //D,C,B,A,S,SS
    [(0), (0), (0), (0), (0), (0)]
  );    
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_VOKA,
    (1),
    [(3500), (2500), (1500), (2200), (300), (0)], //C,B,D,A,S,SS
    [(0), (0), (0), (0), (0), (0)]
  );
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_NEGE,
    (1),
    [(3500), (2000), (1700), (1700), (900), (200)], //B,C,A,S,D,SS
    [(0), (0), (0), (0), (0), (0)]
  );
  
  await lootBox.setOptionSettings(
    values.LOOTBOX_OPTION_HELI,
    (1),
    [(3500), (3500), (1500), (1000), (500), (0)], //A,S,B,C,SS,D
    [(0), (0), (0), (0), (0), (0)]
  );
  console.log('***Done setting up option-setting');
};

// Deploy and configure everything

export const setupCreatureAccessories = async(accessories, factory, lootBox, owner) => {      
  await setupAccessory(accessories, owner);  
  await accessories.setApprovalForAll(factory.address, true);  
  await setupAccessoryLootBox(lootBox, factory);
  await setupPreMintBox(lootBox, owner);  
  console.log('Done setupCreatureAccessories');
};


module.exports = {
  setupAccessory,
  setupAccessoryLootBox,
  setupCreatureAccessories,
  setupPreMintBox
};
