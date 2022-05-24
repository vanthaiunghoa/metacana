/* Useful aliases */

// No, we don't have easy access to web3 here.
// And bn.js new BN() weirdly doesn't work with truffle-assertions
const toBN = a => a;
const toBNHex = a => a;


// Configfuration for our tokens
//chest
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

//CHEST
export const LOOTBOX_OPTION_META = toBN(0);
export const LOOTBOX_OPTION_PRINO = toBN(1);
export const LOOTBOX_OPTION_A = toBN(2);
export const LOOTBOX_OPTION_B = toBN(3);
export const LOOTBOX_OPTION_C = toBN(4);
export const LOOTBOX_OPTION_D = toBN(5);
export const LOOTBOX_OPTION_S = toBN(6);
export const LOOTBOX_OPTION_SS = toBN(7);
export const LOOTBOX_OPTION_TMP_D_D = toBN(8);
export const LOOTBOX_OPTION_TMP_C_D = toBN(9);
export const LOOTBOX_OPTION_TMP_C_C = toBN(10);
export const LOOTBOX_OPTION_TMP_B_D = toBN(11);
export const LOOTBOX_OPTION_TMP_B_C = toBN(12);
export const LOOTBOX_OPTION_TMP_B_B = toBN(13);
export const LOOTBOX_OPTION_TMP_A_C = toBN(14);
export const LOOTBOX_OPTION_TMP_A_B = toBN(15);
export const LOOTBOX_OPTION_TMP_A_A = toBN(16);
export const LOOTBOX_OPTION_TMP_S_B = toBN(17);
export const LOOTBOX_OPTION_TMP_S_A = toBN(18);
export const LOOTBOX_OPTION_TMP_S_S = toBN(19);
export const LOOTBOX_OPTION_TMP_SS_B = toBN(20);
export const LOOTBOX_OPTION_TMP_SS_A = toBN(21);
export const LOOTBOX_OPTION_TMP_SS_S = toBN(22);
export const LOOTBOX_OPTION_TMP_SS_SS = toBN(23);

//======================================

export const LOOTBOX_OPTIONS = [
  LOOTBOX_OPTION_META, 
  LOOTBOX_OPTION_PRINO, 
  LOOTBOX_OPTION_A,
  LOOTBOX_OPTION_B,
  LOOTBOX_OPTION_C,
  LOOTBOX_OPTION_D, 
  LOOTBOX_OPTION_SS,
  LOOTBOX_OPTION_TMP_D_D,
  LOOTBOX_OPTION_TMP_C_D,
  LOOTBOX_OPTION_TMP_C_C,
  LOOTBOX_OPTION_TMP_B_D,
  LOOTBOX_OPTION_TMP_B_C,
  LOOTBOX_OPTION_TMP_B_B,
  LOOTBOX_OPTION_TMP_A_C,
  LOOTBOX_OPTION_TMP_A_B,
  LOOTBOX_OPTION_TMP_A_A,
  LOOTBOX_OPTION_TMP_S_B,
  LOOTBOX_OPTION_TMP_S_A,
  LOOTBOX_OPTION_TMP_S_S,
  LOOTBOX_OPTION_TMP_SS_B,
  LOOTBOX_OPTION_TMP_SS_A,
  LOOTBOX_OPTION_TMP_SS_SS,
];
export const NUM_LOOTBOX_OPTIONS = LOOTBOX_OPTIONS.length;

export const LOOTBOX_PRE_MINT_AMOUNT = [6220, 12048, -1, -1, -1, - 1, -1, -1, -1, -1, -1, - 1, -1, -1, -1, -1, -1, - 1, -1, -1, - 1, -1]; //2 TYPES OF BOXES

export const NO_SUCH_LOOTBOX_OPTION = (NUM_LOOTBOX_OPTIONS + 10);
export const LOOTBOX_OPTION_AMOUNTS = [(1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1)];
// Note that these are token IDs, not option IDs, so they are one higher
export const LOOTBOX_OPTION_GUARANTEES = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

//RCHEST


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
  LOOTBOX_OPTION_A, 
  LOOTBOX_OPTION_B, 
  LOOTBOX_OPTION_C, 
  LOOTBOX_OPTION_D, 
  LOOTBOX_OPTION_S, 
  LOOTBOX_OPTION_SS,
  LOOTBOX_OPTION_TMP_D_D,
  LOOTBOX_OPTION_TMP_C_D,
  LOOTBOX_OPTION_TMP_C_C,
  LOOTBOX_OPTION_TMP_B_D,
  LOOTBOX_OPTION_TMP_B_C,
  LOOTBOX_OPTION_TMP_B_B,
  LOOTBOX_OPTION_TMP_A_C,
  LOOTBOX_OPTION_TMP_A_B,
  LOOTBOX_OPTION_TMP_A_A,
  LOOTBOX_OPTION_TMP_S_B,
  LOOTBOX_OPTION_TMP_S_A,
  LOOTBOX_OPTION_TMP_S_S,
  LOOTBOX_OPTION_TMP_SS_B,
  LOOTBOX_OPTION_TMP_SS_A,
  LOOTBOX_OPTION_TMP_SS_SS,
  LOOTBOX_PRE_MINT_AMOUNT,
  LOOTBOX_OPTIONS,
  NUM_LOOTBOX_OPTIONS,
  NO_SUCH_LOOTBOX_OPTION,
  LOOTBOX_OPTION_AMOUNTS,
  LOOTBOX_OPTION_GUARANTEES,  
};
