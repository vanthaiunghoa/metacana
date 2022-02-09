import hre, { ethers } from "hardhat";
import { ContractFactory } from "ethers";
/* libraries used */

import { setupCreatureAccessories } from "../../lib/setupCreatureAccessories"

import * as vals from "../../lib/valuesCommon"

import { 
  AbstractContract, 
  expect,
  RevertError,
  ZERO_ADDRESS
} from '../utils'

/* Contracts in this test */
import {   
  MockProxyRegistry,
  CreatureAccessory,
  LootBoxRandomness,
  CreatureAccessoryFactory,
  CreatureAccessoryFactory__factory,
  CreatureAccessoryLootBox__factory,
  CreatureAccessoryLootBox,
  TestForReentrancyAttack,
  Forwarder,
} from 'src/gen/typechain'

import { web3 } from 'hardhat'
import * as utils from '../utils'

/* Useful aliases */

const toBN = web3.utils.toBN;

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

describe("CreatureAccessoryFactory", () => {
  const TOTAL_OPTIONS = 9;
  let ownerAddress: string  

  let creatureAccessoryContract: CreatureAccessory;
  let userCreatureAccessoryContract: CreatureAccessory;

  let testForReentrancyAttackContract: TestForReentrancyAttack;
  let userTestForReentrancyAttackContract: TestForReentrancyAttack;

  let creatureAccessoryFactoryContract: CreatureAccessoryFactory;
  let userCreatureAccessoryFactoryContract: CreatureAccessoryFactory;

  let creatureAccessoryLootBoxContract: CreatureAccessoryLootBox;
  let userCreatureAccessoryLootBoxContract: CreatureAccessoryLootBox;

  let forwarderContract: Forwarder;
  let userForwarderContract: Forwarder;

  let lootBoxRandomnessLib;

  let creatureAccessoryAbstract: AbstractContract
  let creatureAccessoryLootBoxAbstract: AbstractContract;
  let creatureAccessoryFactoryAbstract: AbstractContract;
  let forwarderAbstract: AbstractContract;

  let testForReentrancyAttackAbstract: AbstractContract;
//==========================
  let signers: any;
  let forwarder: Forwarder;
  let creatureAccessory: CreatureAccessory;
  let creatureLootBox: CreatureAccessoryLootBox;
  let creatureAccessoryFactory: CreatureAccessoryFactory;
  let testForReentrancyAttack: TestForReentrancyAttack;
  // To install the proxy mock and the attack contract we deploy our own
  // instances of all the classes here rather than using the ones that Truffle
  // deployed.

  before(async () => {    
    signers = await ethers.getSigners();
    const forwarderFactory: ContractFactory = await ethers.getContractFactory(
      "Forwarder",
      signers[0]
    )
    forwarder = (await forwarderFactory.deploy()) as Forwarder;
    await forwarder.deployed()

    const _creatureAccessoryFactory: ContractFactory = await ethers.getContractFactory(
      "CreatureAccessory",
      signers[0]
    )
    creatureAccessory = (await _creatureAccessoryFactory.deploy(forwarder.address)) as CreatureAccessory;
    await creatureAccessory.deployed()
    
    const Library = await ethers.getContractFactory("LootBoxRandomness");
    const library = await Library.deploy();
    await library.deployed();

    const creatureAccessoryLootboxFactory: ContractFactory = await ethers.getContractFactory("CreatureAccessoryLootBox", {
      libraries: {
        LootBoxRandomness: library.address,
      },
    });
    creatureLootBox = await creatureAccessoryLootboxFactory.deploy(forwarder.address) as CreatureAccessoryLootBox;
    creatureLootBox.deployed();

    const creatureAccessoryFactoryFactory: ContractFactory = await ethers.getContractFactory("CreatureAccessoryFactory", signers[0]);
    creatureAccessoryFactory = await creatureAccessoryFactoryFactory.deploy(
      creatureAccessory.address,
      creatureLootBox.address
      ) as CreatureAccessoryFactory;
      creatureAccessoryFactory.deployed();

    const testForReentrancyAttackFactory: ContractFactory = await ethers.getContractFactory(
      "TestForReentrancyAttack",
      signers[0]
    )
    testForReentrancyAttack = (await testForReentrancyAttackFactory.deploy()) as TestForReentrancyAttack;
    await testForReentrancyAttack.deployed()
    // forwarderAbstract = await AbstractContract.fromArtifactName('Forwarder');
    // creatureAccessoryAbstract = await AbstractContract.fromArtifactName('CreatureAccessory');
    
    // lootBoxRandomnessLib = await AbstractContract.fromArtifactName('LootBoxRandomness');
    // const lootBoxRandomnessLibContract = await lootBoxRandomnessLib.deploy(ownerWallet, []);

    // creatureAccessoryLootBoxAbstract = await AbstractContract.fromArtifactName('CreatureAccessoryLootBox', {LootBoxRandomness: lootBoxRandomnessLibContract.address});

    // creatureAccessoryFactoryAbstract = await AbstractContract.fromArtifactName('CreatureAccessoryFactory');        
    // testForReentrancyAttackAbstract = await AbstractContract.fromArtifactName('TestForReentrancyAttack')
    ownerAddress = await ownerWallet.getAddress();
    
  });

  beforeEach(async () => {
    // forwarderContract = await forwarderAbstract.deploy(ownerWallet, []) as Forwarder
    // userForwarderContract = await forwarderContract.connect(userSigner);        

    // creatureAccessoryLootBoxContract = await creatureAccessoryLootBoxAbstract.deploy(ownerWallet, [forwarderContract.address]) as CreatureAccessoryLootBox;
    // userCreatureAccessoryLootBoxContract = await creatureAccessoryLootBoxContract.connect(userSigner) as CreatureAccessoryLootBox;

    // creatureAccessoryContract = await creatureAccessoryAbstract.deploy(ownerWallet, [forwarderContract.address]) as CreatureAccessory;
    // userCreatureAccessoryContract = await creatureAccessoryContract.connect(userSigner) as CreatureAccessory;    

    // creatureAccessoryFactoryContract = await creatureAccessoryFactoryAbstract.deploy(ownerWallet, [creatureAccessoryContract.address, creatureAccessoryLootBoxContract.address]) as CreatureAccessoryFactory;
    // userCreatureAccessoryFactoryContract = await creatureAccessoryFactoryContract.connect(userSigner) as CreatureAccessoryFactory;

    // testForReentrancyAttackContract = await testForReentrancyAttackAbstract.deploy(ownerWallet, []) as TestForReentrancyAttack
    // userTestForReentrancyAttackContract = await testForReentrancyAttackContract.connect(userSigner) as TestForReentrancyAttack;

    await testForReentrancyAttack.setFactoryAddress(creatureAccessoryFactory.address);
    await setupCreatureAccessories(
      creatureAccessory,
      creatureAccessoryFactory,
      creatureLootBox,
      ownerAddress
    );    
  })
  // This also tests the proxyRegistryAddress and lootBoxAddress accessors.

  describe('#constructor()', () => {
    it('should set lootbox address to the supplied value', async () => {        
      // expect(await creatureAccessoryFactoryContract.lootBoxAddress()).to.be.eql(creatureAccessoryLootBoxContract.address);      
    });
  });

  // describe('#name()', () => {
  //   it('should return the correct name', async () => {      
  //     assert.equal(
  //       await myFactory.name(),
  //       'Marketplace Creature Accessory Pre-Sale'
  //     );
  //   });
  // });

  // describe('#symbol()', () => {
  //   it('should return the correct symbol', async () => {
  //     assert.equal(await myFactory.symbol(), 'OSCAP');
  //   });
  // });

  describe('#supportsFactoryInterface()', () => {
    it('should return true', async () => {
      await expect(await creatureAccessoryFactory.supportsFactoryInterface()).to.be.eql(true);      
    });
  });

  describe('#factorySchemaName()', () => {
    it('should return the schema name', async () => {
      await expect(await creatureAccessoryFactory.factorySchemaName()).to.be.eql('ERC1155');            
    });
  });

  describe('#numOptions()', () => {
    it('should return the correct number of options', async () => {
      await expect(await creatureAccessoryFactory.numOptions()).to.be.eql(TOTAL_OPTIONS);            
    });
  });

  //NOTE: We test this early relative to its place in the source code as we
  //      mint tokens that we rely on the existence of in later tests here.
  
  describe('#mint()', () => {
    it('should not allow non-owner or non-operator to mint', async () => {
      const tx = await creatureAccessoryFactory.mint(userWallet.address, vals.CLASS_COMMON, 1000, "0x0", { from: userWallet.address });
      await expect(tx).to.be.rejectedWith(RevertError("CreatureAccessoryFactory#_mint: CANNOT_MINT_MORE"));      
    });

    it('should allow owner to mint', async () => {
      const quantity = 10;
      const tx = await creatureAccessoryFactory.mint(userWallet.address, vals.CLASS_COMMON, quantity, "0x0", { from: ownerAddress});
           
      // Check that the recipient got the correct quantity
      // Token numbers are one higher than option numbers
      const balanceUser = await creatureAccessoryContract.balanceOf(
        userWallet.address,
        toTokenId(vals.CLASS_COMMON)
      );
      await expect(balanceUser).to.be.eql(quantity);      

      const balanceOf = await creatureAccessoryFactory.balanceOf(ownerAddress, vals.CLASS_COMMON);
      await expect(balanceOf).to.be.eql(toBN(vals.MINT_INITIAL_SUPPLY).sub(toBN(quantity)));
      
      // Check that total supply is correct
      const premintedRemaining = await creatureAccessoryContract.balanceOf(
        ownerAddress,
        toTokenId(vals.CLASS_COMMON)
      );
      await expect(premintedRemaining).to.be.eql(toBN(vals.MINT_INITIAL_SUPPLY).sub(toBN(quantity)));
      
    });
    
  });

  /**
   * NOTE: This check is difficult to test in a development
   * environment, due to the OwnableDelegateProxy. To get around
   * this, in order to test this function below, you'll need to:
   *
   * 1. go to CreatureAccessoryFactory.sol, and
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
        await expect(testForReentrancyAttackContract.factoryAddress()).to.be.eql(creatureAccessoryContract.address);         
       });

    // With unmodified code, this fails with:
    //   CreatureAccessoryFactory#_mint: CANNOT_MINT_MORE
    // which is the correct behavior (no reentrancy) for the wrong reason
    // (the attacker is not the owner or proxy).

    xit('Minting from factory should disallow re-entrancy attack',
       async () => {
        await expect(creatureAccessoryFactory.mint(userWallet.address, 1, 1, "0x0", {from: ownerAddress})).to.be.fulfilled
        await expect(creatureAccessoryFactory.mint(userWallet.address, 1, 1, "0x0", {from: userWallet.address})).to.be.fulfilled

        await expect(creatureAccessoryFactory.mint(userWallet.address, 1, 1, "0x0", {from: userWallet.address})).to.be.rejectedWith(RevertError("ReentrancyGuard: reentrant call")); 
         
       });
  });
});
