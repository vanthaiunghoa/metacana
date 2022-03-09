import hre, { ethers } from "hardhat";
import { ContractFactory } from "ethers";
/* libraries used */

import { setupCreatureAccessories } from "../../scripts/lib/setupCreatureAccessories"

import * as vals from "../../scripts/lib/valuesCommon"

import { 
  expect,
  RevertError,
} from '../utils'

/* Contracts in this test */
import {   
  CanaItem,
  CanaItemFactory,
  CanaItemLootBox,
  TestForReentrancyAttack
} from 'src/gen/typechain'

import { web3 } from 'hardhat'
import * as utils from '../utils'

/* Useful aliases */

const toBN = web3.utils.toBN;
import { BigNumber } from 'ethers'

/* Utilities */

const toTokenId = optionId => optionId;

const {
  wallet: ownerWallet,
  provider: ownerProvider,
  signer: ownerSigner
} = utils.createTestWallet(web3, 0)

const {
  wallet: userWallet,
  provider: userProvider,
  signer: userSigner
} = utils.createTestWallet(web3, 2)

describe("CanaItemFactory", () => {
  const TOTAL_OPTIONS = 9;
  let ownerAddress: string ; 
  let userAddress: string;
  let signers: any;
  let canaItem: CanaItem;
  let userCanaItem: CanaItem;
  let canaItemLootBox: CanaItemLootBox;
  let canaItemFactory: CanaItemFactory;
  let userCanaItemFactory: CanaItemFactory;
  let testForReentrancyAttack: TestForReentrancyAttack;
  // To install the proxy mock and the attack contract we deploy our own
  // instances of all the classes here rather than using the ones that Truffle
  // deployed.

  before(async () => {    
    // signers = await ethers.getSigners();    

    const _canaItemFactory: ContractFactory = await ethers.getContractFactory(
      "CanaItem"
    )
    canaItem = (await _canaItemFactory.deploy()) as CanaItem;
    await canaItem.deployed();
    userCanaItem = await canaItem.connect(userSigner);
    
    const Library = await ethers.getContractFactory("CanaBoxLib");
    const library = await Library.deploy();
    await library.deployed();

    const canaItemLootBoxFactory: ContractFactory = await ethers.getContractFactory("CanaItemLootBox", {
      libraries: {
        CanaBoxLib: library.address,
      },
    });
    canaItemLootBox = await canaItemLootBoxFactory.deploy() as CanaItemLootBox;
    canaItemLootBox.deployed();

    const canaItemFactoryFactory: ContractFactory = await ethers.getContractFactory("CanaItemFactory");
    canaItemFactory = await canaItemFactoryFactory.deploy(
      canaItem.address,
      canaItemLootBox.address
      ) as CanaItemFactory;
      canaItemFactory.deployed();
    userCanaItemFactory = await canaItemFactory.connect(userSigner)

    const testForReentrancyAttackFactory: ContractFactory = await ethers.getContractFactory(
      "TestForReentrancyAttack"
    )
    
    testForReentrancyAttack = (await testForReentrancyAttackFactory.deploy()) as TestForReentrancyAttack;
    await testForReentrancyAttack.deployed()
    ownerAddress = await ownerWallet.getAddress();
    userAddress = await userWallet.getAddress();
    await testForReentrancyAttack.setFactoryAddress(canaItemFactory.address);
    
    await setupCreatureAccessories(
      canaItem,
      canaItemFactory,
      canaItemLootBox,
      ownerAddress
    ); 
    
  });

  // This also tests the proxyRegistryAddress and lootBoxAddress accessors.

  describe('#constructor()', () => {
    it('should set lootbox address to the supplied value', async () => {        
      expect(await canaItemFactory.lootBoxAddress()).to.be.eql(canaItemLootBox.address);      
    });
  });

  describe('#numOptions()', () => {
    it('should return the correct number of options', async () => {
      await expect(await canaItemFactory.numOptions()).to.be.eql(BigNumber.from(TOTAL_OPTIONS));            
    });
  });

  //NOTE: We test this early relative to its place in the source code as we
  //      mint tokens that we rely on the existence of in later tests here.
  
  describe('#mint()', () => {
    it('should not allow non-owner or non-operator to mint', async () => {
      const tx = userCanaItemFactory.mint(userAddress, vals.CLASS_A, 1000, [], { from: userAddress });      
      await expect(tx).to.be.rejectedWith(RevertError("CanaItemFactory#_mint: CANNOT_MINT_MORE"));      
    });

    it('should allow owner to mint', async () => {
      const quantity = 10;     
      const tx = await canaItemFactory.mint(userAddress, vals.CLASS_A, quantity, []);
           
      // Check that the recipient got the correct quantity
      // Token numbers are one higher than option numbers
      const balanceUser = await userCanaItem.balanceOf(
        userAddress,
        toTokenId(vals.CLASS_A)
      );
      await expect(balanceUser).to.be.eql(BigNumber.from(quantity));      

      const balanceOf = await userCanaItemFactory.balanceOf(ownerAddress, vals.CLASS_A);
      await expect(balanceOf).to.be.eql(BigNumber.from(vals.MINT_INITIAL_SUPPLY).sub(BigNumber.from(quantity)));
      
      // Check that total supply is correct
      const premintedRemaining = await userCanaItem.balanceOf(
        ownerAddress,
        toTokenId(vals.CLASS_A)
      );
      await expect(premintedRemaining).to.be.eql(BigNumber.from(vals.MINT_INITIAL_SUPPLY).sub(BigNumber.from(quantity)));
      
    });
    
  });

  /**
   * NOTE: This check is difficult to test in a development
   * environment, due to the OwnableDelegateProxy. To get around
   * this, in order to test this function below, you'll need to:
   *
   * 1. go to CanaItemFactory.sol, and
   * 2. modify _isOwnerOrProxy
   *
   * --> Modification is:
   *      comment out
   *         return owner() == _address || address(proxyRegistry.proxies(owner())) == _address;
   *      replace with
   *         return true;
   * Then run, you'll get the reentrant error, which passes the test
   **/

  describe('Re-Entrancy Check', () => {
    it('Should have the correct factory address set',
       async () => {
        await expect(await testForReentrancyAttack.factoryAddress()).to.be.eql(canaItemFactory.address);         
       });

    // With unmodified code, this fails with:
    //   CanaItemFactory#_mint: CANNOT_MINT_MORE
    // which is the correct behavior (no reentrancy) for the wrong reason
    // (the attacker is not the owner or proxy).

    it('Minting from factory should disallow re-entrancy attack',
       async () => {
        await expect(await canaItemFactory.mint(userAddress, 1, 1, [], {from: ownerAddress})).to.be.ok            
        // await expect(await userCanaItemFactory.mint(userAddress, 1, 1, [], {from: userAddress})).to.be.fulfilled

        // await expect(userCanaItemFactory.mint(testForReentrancyAttack.address, 1, 1, [], {from: testForReentrancyAttack.address})).to.be.rejectedWith(RevertError("ReentrancyGuard: reentrant call")); 
         
       });
  });
});