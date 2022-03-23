/* Useful aliases */

// No, we don't have easy access to web3 here.
// And bn.js new BN() weirdly doesn't work with truffle-assertions
const toBN = a => a;
const toBNHex = a => a;


// Configfuration for our tokens

export const NUM_ACCESSORIES = 48;
export const MINT_INITIAL_SUPPLY = [15000, 12000, 9000, 6000, 19500, 26000];
export const INITIAL_SUPPLY = ('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE');

export const CLASS_A = 0;
export const CLASS_B = 1;
export const CLASS_C = 2;
export const CLASS_D = 3;
export const CLASS_S = 4;
export const CLASS_SS = 5;
export const NUM_CLASSES = 6;

export const LOOTBOX_OPTION_META = toBN(0);
export const LOOTBOX_OPTION_PRINO = toBN(1);
export const LOOTBOX_OPTION_VOKA = toBN(2);
export const LOOTBOX_OPTION_NEGE = toBN(3);
export const LOOTBOX_OPTION_HELI = toBN(4);
export const LOOTBOX_OPTIONS = [LOOTBOX_OPTION_META, LOOTBOX_OPTION_PRINO, LOOTBOX_OPTION_VOKA,LOOTBOX_OPTION_NEGE,LOOTBOX_OPTION_HELI];
export const NUM_LOOTBOX_OPTIONS = LOOTBOX_OPTIONS.length;

export const LOOTBOX_PRE_MINT_AMOUNT = [6220, 12048, INITIAL_SUPPLY, INITIAL_SUPPLY, INITIAL_SUPPLY]; //2 TYPES OF BOXES

export const NO_SUCH_LOOTBOX_OPTION = (NUM_LOOTBOX_OPTIONS + 10);
export const LOOTBOX_OPTION_AMOUNTS = [(1), (1), (1), (1), (1)];
// Note that these are token IDs, not option IDs, so they are one higher
export const LOOTBOX_OPTION_GUARANTEES = [
  {},
  {},
  {},
  {},
  {}
];

module.exports = {
  NUM_ACCESSORIES,
  MINT_INITIAL_SUPPLY,
  INITIAL_SUPPLY,
  CLASS_A,
  CLASS_B,
  CLASS_C,
  CLASS_D,
  CLASS_S,
  CLASS_SS,
  NUM_CLASSES,
  LOOTBOX_OPTION_META,
  LOOTBOX_OPTION_PRINO,
  LOOTBOX_PRE_MINT_AMOUNT,
  LOOTBOX_OPTIONS,
  NUM_LOOTBOX_OPTIONS,
  NO_SUCH_LOOTBOX_OPTION,
  LOOTBOX_OPTION_AMOUNTS,
  LOOTBOX_OPTION_GUARANTEES,
  LOOTBOX_OPTION_VOKA,
  LOOTBOX_OPTION_NEGE,
  LOOTBOX_OPTION_HELI
};
