import hre, { ethers } from "hardhat";
import { ContractFactory } from "ethers";
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

import { setupCreatureAccessories } from "../../scripts/lib/setupCreatureAccessories"
/* libraries used */

import { setupMarketplaceWithAddress, setSales } from "../../scripts/lib/setupMarketplace";
import { 
  expect,
  assert,
  RevertError,
  ZERO_ADDRESS,
} from '../utils'

import { ADDRESS_ZERO } from '../../scripts/lib/testValuesCommon'

/* Contracts in this test */
import {   
  Metacana,
  ERC1155,
  Marketplace,
  CanaItemLootBox,
  CanaItemFactory
} from 'src/gen/typechain'

// import { web3 } from 'hardhat'

import Web3 from 'web3';
const web3 = new Web3("http://localhost:8545") as Web3;

import * as utils from '../utils'

/* Useful aliases */

const toBN = web3.utils.toBN;
import { BigNumber } from 'ethers'
import { text } from "node:stream/consumers";

/* Utilities */

const boxPrice = 1;
const boxId = 1;
const metaBoxId = 0;
const prinoBoxId = 1;
const nonce = 1;
const transactionFee = 100;
const sellAmount = 5;
const buyAmount1 = 2;
const buyAmount2 = 1;
const wbnbAddress='0x5b3e2bc1da86ff6235d9ead4504d598cae77dbcb'

describe("Maketplace", () => {
  let signers: any;
  let metacana: Metacana;
  let canaItem: ERC1155;
  let marketplace: Marketplace;
  let canaItemLootBox: CanaItemLootBox;
  let canaItemFactory: CanaItemFactory

  let owner: SignerWithAddress
  let buyer: SignerWithAddress
  let seller: SignerWithAddress
  let buyer1: SignerWithAddress
  let receiver: SignerWithAddress
  let addresses;
  const amounts = [100, 200];  

  before(async () => {    
       
    [owner, buyer, buyer1, seller, receiver] = await ethers.getSigners();
    addresses = [buyer.address, buyer1.address];
    const marketplaceFactory: ContractFactory = await ethers.getContractFactory(
      "Marketplace"
    )
    marketplace = (await marketplaceFactory.connect(owner).deploy()) as Marketplace;
    await marketplace.connect(owner).deployed();
        
    const _canaItemFactory: ContractFactory = await ethers.getContractFactory(
      "ERC1155"
    )
    canaItem = (await _canaItemFactory.connect(owner).deploy()) as ERC1155;
    await canaItem.connect(owner).deployed();

    const Metacana_Factory: ContractFactory = await ethers.getContractFactory("Metacana");
    metacana = await Metacana_Factory.connect(owner).deploy() as Metacana;
    await metacana.connect(owner).deployed();

    const Library = await ethers.getContractFactory("CanaBoxLib");
    const library = await Library.connect(owner).deploy();
    await library.connect(owner).deployed();

    const canaItemLootBoxFactory: ContractFactory = await ethers.getContractFactory("CanaItemLootBox", {
      libraries: {
        CanaBoxLib: library.address,
      },
    });    

    console.log(`****Deployed canaItemLootBoxFactory`)
    canaItemLootBox = await canaItemLootBoxFactory.connect(owner).deploy() as CanaItemLootBox;
    await canaItemLootBox.connect(owner).deployed();

    const canaItemFactoryFactory: ContractFactory = await ethers.getContractFactory("CanaItemFactory");
    canaItemFactory = await canaItemFactoryFactory.connect(owner).deploy(
      canaItem.address,
      canaItemLootBox.address
      ) as CanaItemFactory;
      canaItemFactory.connect(owner).deployed();

    console.log(`****Deployed canaItemLootBox`)
    metacana.mint(buyer.address, 1000*boxPrice);
    console.log(`****metacana Minted`)
    metacana.connect(buyer).approve(marketplace.address, 1000*boxPrice);
    console.log(`****metacana approved for marketplace`)
    canaItemLootBox.setApprovalForAll(marketplace.address, true);
    console.log(`****lootbox approvedForAll for marketplace`)
    
    await setupMarketplaceWithAddress(canaItem, canaItemLootBox, marketplace, receiver.address, transactionFee, metacana.address, canaItemFactory, owner)        
    await setSales(marketplace, addresses, amounts, 0, owner);
    // await setSales(marketplace, addresses, amounts, 1, owner);
    await setupCreatureAccessories(canaItem, canaItemFactory, canaItemLootBox, owner.address)
  });

  // This also tests the proxyRegistryAddress and lootBoxAddress accessors.
  describe('#matchTransaction()', () => {
    
    it('should allow owner to buy private boxes', async () => { 
      const round = 0;
      const message = await web3.utils.keccak256(web3.utils.encodePacked(
        canaItemLootBox.address,          
        addresses[0],
        ADDRESS_ZERO, 
        round,
        metaBoxId,
        boxPrice, 
        amounts[0], 
        nonce) as string);
      const signature =  await web3.eth.sign(message, owner.address);

      const txt = await marketplace.connect(buyer).matchTransaction(
        [owner.address, 
        canaItemLootBox.address, 
        ADDRESS_ZERO],
        [round, metaBoxId, boxPrice, amounts[0], amounts[0], nonce], signature);
      console.log('======TXN==========');
      console.log(txt) ;
      console.log('======RECEIVE==========');
      const receipt = await txt.wait(1)
      console.log(receipt) ;
      console.log('======EVENT==========')
      console.log(receipt.events)      
      const ev = receipt.events!.pop()!;
      expect(ev.event).to.be.eql('MatchTransaction');
      const args = ev.args! as any;
      console.log('args.tokenId=',args.tokenId);
      console.log("BigNumber.from(metaBoxId)=", BigNumber.from(metaBoxId))
      expect(BigNumber.from(args.tokenId)).to.be.eql(BigNumber.from(metaBoxId));
      expect(args.contractAddress).to.be.eql(canaItemLootBox.address);
      expect(BigNumber.from(args.price)).to.be.eql(BigNumber.from(boxPrice));
      expect(args.paymentToken).to.be.eql(ZERO_ADDRESS);       
      expect(args.seller).to.be.eql(owner.address);  
      expect(args.buyer).to.be.eql(buyer.address);     ;
      expect(BigNumber.from(args.sellerAmount)).to.be.eql(BigNumber.from(amounts[0]));
      expect(BigNumber.from(args.buyerAmount)).to.be.eql(BigNumber.from(amounts[0]));
      expect(BigNumber.from(args.fee)).to.be.eql(BigNumber.from(transactionFee));
      expect(BigNumber.from(args.round)).to.be.eql(BigNumber.from(round));      
    });

    // it('should allow owner to buy whitelist boxes', async () => { 
    //   const round = 0;
    //   const message = await web3.utils.keccak256(web3.utils.encodePacked(
    //     canaItemLootBox.address,          
    //     addresses[0],
    //     ADDRESS_ZERO, 
    //     round,
    //     metaBoxId,
    //     boxPrice, 
    //     amounts[0], 
    //     nonce) as string);
    //   const signature =  await web3.eth.sign(message, owner.address);

    //   const txt = await marketplace.connect(buyer).matchTransaction(
    //     [owner.address, 
    //     canaItemLootBox.address, 
    //     ADDRESS_ZERO],
    //     [round, metaBoxId, boxPrice, amounts[0], amounts[0], nonce], signature);
    //   console.log('======TXN==========');
    //   console.log(txt) ;
    //   console.log('======RECEIVE==========');
    //   const receipt = await txt.wait(1)
    //   console.log(receipt) ;
    //   console.log('======EVENT==========')
    //   console.log(receipt.events)      
    //   const ev = receipt.events!.pop()!;
    //   expect(ev.event).to.be.eql('MatchTransaction');
    //   const args = ev.args! as any;
    //   console.log('args.tokenId=',args.tokenId);
    //   console.log("BigNumber.from(metaBoxId)=", BigNumber.from(metaBoxId))
    //   expect(BigNumber.from(args.tokenId)).to.be.eql(BigNumber.from(metaBoxId));
    //   expect(args.contractAddress).to.be.eql(canaItemLootBox.address);
    //   expect(BigNumber.from(args.price)).to.be.eql(BigNumber.from(boxPrice));
    //   expect(args.paymentToken).to.be.eql(ZERO_ADDRESS);       
    //   expect(args.seller).to.be.eql(owner.address);  
    //   expect(args.buyer).to.be.eql(buyer.address);     ;
    //   expect(BigNumber.from(args.sellerAmount)).to.be.eql(BigNumber.from(amounts[0]));
    //   expect(BigNumber.from(args.buyerAmount)).to.be.eql(BigNumber.from(amounts[0]));
    //   expect(BigNumber.from(args.fee)).to.be.eql(BigNumber.from(transactionFee));
    //   expect(BigNumber.from(args.round)).to.be.eql(BigNumber.from(round));      
    // });

    it('should allow owner to buy box', async () => { 
      
      // const TEST_MESSAGE = await marketplace.getMessageHash(sellerAddress, boxId, metacana.address, boxPrice, nonce);      
      const TEST_MESSAGE =  await web3.utils.keccak256(web3.utils.encodePacked(canaItemLootBox.address, boxId, metacana.address, boxPrice, sellAmount, nonce) as string);
      // let accounts = await web3.eth.getAccounts();
      console.log('***********TEST_MESSAGE=', TEST_MESSAGE);
      // console.log(accounts)

      /*const account = web3.eth.accounts.privateKeyToAccount('108dd957700fa10ef2076d0afa3f286d97c38dd17551726876444ac4c89c4740')

      web3.eth.accounts.wallet.add(account);
      web3.eth.defaultAccount = sellerAddress;*/
      let signature =  await web3.eth.sign(TEST_MESSAGE, owner.address);
      console.log('owner, seller, buyer, receiver=', owner.address, seller.address, receiver.address)
      console.log('***********signature=',signature);
            
      const txt = await marketplace.connect(buyer).matchTransaction([/*sellerAddress*/owner.address, canaItemLootBox.address, metacana.address],
        [boxId, boxPrice, buyAmount1, sellAmount, nonce], signature);
      console.log('======TXN==========');
      console.log(txt) ;
      console.log('======RECEIVE==========');
      const receipt = await txt.wait(1)
      console.log(receipt) ;
      console.log('======EVENT==========')
      console.log(receipt.events)      
      const ev = receipt.events!.pop()!;
      expect(ev.event).to.be.eql('MatchTransaction');
      const args = ev.args! as any;
      expect(args.tokenId).to.be.eql(BigNumber.from(boxId));
      expect(args.contractAddress).to.be.eql(canaItemLootBox.address);
      expect(args.price).to.be.eql(BigNumber.from(boxPrice));
      expect(args.paymentToken).to.be.eql(metacana.address);       
      expect(args.seller).to.be.eql(owner.address);  
      expect(args.buyer).to.be.eql(buyer.address);  
      expect(args.amount).to.be.eql(BigNumber.from(1));        
    });
  });

});
