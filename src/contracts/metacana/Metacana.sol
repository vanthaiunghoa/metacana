// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

import "./core/DeflationaryERC20.sol";
import "./Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/SocialProofable.sol";
import "./interfaces/IPancakeFactory.sol"
import "./interfaces/IPancakePair.sol"

// interface IUniswapV2Pair {
//     function sync() external;
// }

// interface IUniswapV2Factory {
//     function createPair(address tokenA, address tokenB)
//         external
//         returns (address pair);
// }

/**                                 
 *            ╭╯╭╯  ╭╯╭╯  ╭╯╭╯      
 *        ╱▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔╲▔▔▔╲   
 *       ╱      ╭╮   ╭╮      ╲╮╮ ╲  
 *       ▏     ▂▂▂▂▂▂▂▂▂     ▕╮╮ ▕  
 *       ▏     ╲▂▂▂▂▂▂▂╱     ▕╮╮ ▕  
 *       ╲▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╲▂▂╱  
 *               METACANA              
 *
 *
 * @title MetacanaToken
 * @dev Contract for $METACANA.
 *      Based of the work by Hien Nguyen $TEND
 *
 * @author develop.iglobal@gmail.com ($TEND)
 * @author @Onchained ($METACANA)
 */
contract MetacanaToken is DeflationaryERC20, Pausable, SocialProofable {
    using SafeMath for uint256;

    //===============================================//
    //          Contract Variables                   //
    //===============================================//

    // SOCIAL PROOF //
    string public constant override getTwitter = "Metacananomics101";
    string public constant override getTelegram = "MetacanaGram";
    string public constant override getWebsite = "metacananomics.io";
    string public constant override getGithub = "metacananomics";
    uint256 public twitterProof;
    bytes public githubProof;

    // CRUNCH //
    uint256 public lastCrunchTime;
    uint256 public totalCrunched;

    // crunchRate is defined as a percentage (e.g. 1 = 1%, 5 = 5%, 27 = 27%)
    uint256 public crunchRate;

    /**
     * rewardForMetacana is defined as a percentage (e.g. 1 = 1%, 5 = 5%, 27 = 27%)
     * this is however a percentage of the crunchRate.
     */ 
    uint256 public rewardForMetacana;

    /**
     * Metacana Tuesday means the reward is multiplied by a factor defined here.
     * This percentage is defined as a multiplier with 1 decimal.
     * (e.g. 15 = 1.5x, 10 = 1x, 2 = 2x)
     * This is a multiplier applied to the rewardForMetacana percentage
     * (e.g. if rewardForTaquery = 2%, and multiplier is 20 (2x), then the reward is 4%)
     */
    uint256 public metacanaTuesdayRewardMultiplier;

    struct MetacanaStats {
        uint256 timesCrunched;
        uint256 metacanasCrunched;
    }

    mapping(address => MetacanaStats) public metacanasCrunchStats;
    address[] public metacanas;

    // UNISWAP //
    IERC20 public WBNB;
    IPancakeFactory public pancakeFactory;
    address public pancakeswapPool;

    //===============================================//
    //                 Constructor                   //
    // Ethereum: 0xdac17f958d2ee523a2206206994597c13d831ec7
    // Binance SC: 0x55d398326f99059fF775485246999027B3197955 (BSC_USD)
    // BSC Testnet: 0xBA6670261a05b8504E8Ab9c45D97A8eD42573822
    // path: 0xae13d989dac2f0debff460ac112a837c89baa7cd,0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684
    //  https://web3-tools.netlify.app/ apply --> convert address to checksumaddres
    // address constant internal _wbnb = address(0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c);
    // address constant internal _busd = address(0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56);
    //===============================================//
    constructor(uint256 initialSupply, uint8 decimals_, address _pancakeswapFactoryAddress, address _wbnbToken)
        public
        Pausable()
        DeflationaryERC20("Metacanas", "CANA", decimals_, initialSupply)
    {        
        // Initialize PancakeswapFactory
        pancakeFactory = IPancakeFactory(_pancakeswapFactoryAddress);
        WBNB = IERC20(_wbnbToken);

        // Crunch variables
        crunchRate = 4; // Initial crunch rate set at 4%
        rewardForMetacana = 1; // Initial reward percentage set at 1% (1% of 4%)
        metacanaTuesdayRewardMultiplier = 20; // Initial metacanaTuesday multiplier set at 2x

    }

    //===============================================//
    //                   Events                      //
    //===============================================//
    event PoolCrunched(
        address metacana,
        uint256 crunchedAmount,
        uint256 newTotalSupply,
        uint256 newPancakeswapPool,
        uint256 metacanaReward,
        uint256 timesCrunched,
        uint256 totalMetacanasCrunched
    );

    //===============================================//
    //                   Methods                     //
    //===============================================//

    // UNISWAP POOL //
    function setPancakeswapPool() external onlyOwner {
        require(pancakeswapPool == address(0), "MetacanaToken: pool already created");
        pancakeswapPool = pancakeFactory.createPair(address(WBNB), address(this));
    }

    // TOKEN TRANSFER HOOK //
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);
        require(
            !paused || msg.sender == pauser,
            "MetacanaToken: Cannot transfer tokens while game is paused and sender is not the Pauser."
        );
    }

    // PAUSABLE OVERRIDE //
    function unpause() external onlyPauser {
        super._unpause();

        // Start crunching
        lastCrunchTime = now;
    }

    // CRUNCH VARIABLES SETTERS //
    function setCrunchRate(uint256 _crunchRate) external onlyOwner {
        require(
            _crunchRate > 0 && _crunchRate <= 10,
            "MetacanaToken: crunchRate must be at least 1 and at most 10"
        );
        crunchRate = _crunchRate;
    }

    function setRewardForMetacana(uint256 _rewardForMetacana) external onlyOwner {
        require(
            _rewardForMetacana > 0 && _rewardForMetacana <= 10,
            "MetacanaToken: rewardForMetacana must be at least 1 and at most 10"
        );
        rewardForMetacana = _rewardForMetacana;
    }

    function setMetacanaTuesdayRewardMultiplier(uint256 _metacanaTuesdayRewardMultiplier) external onlyOwner {
        require(
            _metacanaTuesdayRewardMultiplier > 9 && _metacanaTuesdayRewardMultiplier <= 30,
            "MetacanaToken: metacanaTuesdayRewardMultiplier must be at least 10 and at most 30"
        );
        metacanaTuesdayRewardMultiplier = _metacanaTuesdayRewardMultiplier;
    }

    // INFORMATION OF TAQUEROS FOR UI //
    function getInfoFor(address addr)
        public
        view
        returns (
            uint256 balance,
            uint256 poolBalance,
            uint256 totalSupply,
            uint256 totalMetacanasCrunched,
            uint256 crunchableMetacanas,
            uint256 lastCrunchAt,
            uint256 timesCrunched,
            uint256 metacanasCrunched,
            bool metacanaTuesday,
            uint256 metacanasCrunchRate,
            uint256 metacanaRewardRate,
            uint256 metacanaTuesdayMultiplier
        )
    {
        MetacanaStats memory metacanaStats = metacanasCrunchStats[addr];

        return (
            balanceOf(addr),
            balanceOf(pancakeswapPool),
            _totalSupply,
            totalCrunched,
            getCrunchAmount(),
            lastCrunchTime,
            metacanaStats.timesCrunched,
            metacanaStats.metacanasCrunched,
            isMetacanaTuesday(),
            crunchRate,
            rewardForMetacana,
            metacanaTuesdayRewardMultiplier
        );
    }

    // CRUNCH DAT POOL! //
    function crunchPool() external whenNotPaused {
        uint256 toRemoveFromPancakeswap = getCrunchAmount();
        require(
            toRemoveFromPancakeswap >= 1 * 1e18,
            "crunchPool: min crunch amount not reached."
        );

        // Reset last crunch time
        lastCrunchTime = now;

        uint256 toPayMetacana = toRemoveFromPancakeswap
            .mul(rewardForMetacana)
            .mul(rewardMultiplier())
            .div(1000);

        uint256 toBurnPermanently = toRemoveFromPancakeswap.sub(toPayMetacana);

        //=== DEFLATE SUPPLY
        // Remove tokens from Pancakeswap Pool.
        _balances[pancakeswapPool] = _balances[pancakeswapPool].sub(toRemoveFromPancakeswap);
        // Payout reward to metacana.
        _balances[msg.sender] = _balances[msg.sender].add(toPayMetacana);
        // "Burn" remaining tokens.
        _totalSupply = _totalSupply.sub(toBurnPermanently);
        //=== END DEFLATE

        totalCrunched = totalCrunched.add(toBurnPermanently); // Track all metacanas crunched

        //=== UPDATE TAQUERO STATS
        // Retrieve Metacana Stats
        MetacanaStats storage metacanaStats = metacanasCrunchStats[msg.sender];
        // If this is a new metacana, add to the list
        if (metacanaStats.timesCrunched == 0) {
            metacanas.push(msg.sender);
        }
        // Update the stats
        metacanaStats.timesCrunched = metacanaStats.timesCrunched.add(1);
        metacanaStats.metacanasCrunched = metacanaStats.metacanasCrunched.add(toPayMetacana);
        // Save stats in the map
        metacanasCrunchStats[msg.sender] = metacanaStats;
        //=== END UPDATE STATS

        IPancakePair(pancakeswapPool).sync();

        emit PoolCrunched(
            msg.sender,
            toRemoveFromPancakeswap,
            _totalSupply,
            balanceOf(pancakeswapPool),
            toPayMetacana,
            metacanaStats.timesCrunched,
            metacanaStats.metacanasCrunched
        );
    }

    // Calculates the Amount of tokens available for Crunching given the delta in time since
    // last Crunch.
    function getCrunchAmount() public view returns (uint256) {
        if (paused) return 0;

        uint256 timeBetweenLastCrunch = now - lastCrunchTime;
        uint256 tokensInPancakeswapPool = balanceOf(pancakeswapPool);
        uint256 dayInSeconds = 1 days;
        uint256 crunchAmount = (tokensInPancakeswapPool.mul(crunchRate).mul(timeBetweenLastCrunch))
                .div(dayInSeconds)
                .div(100);

        return crunchAmount;
    }

    // Determines the Reward Multiplier
    function rewardMultiplier() public view returns (uint256) {
        // This returns a multiplier with 1 decimal. so 10 means 1.0x
        if (isMetacanaTuesday()) {
            return metacanaTuesdayRewardMultiplier;
        } else {
            return 10;
        }
    }

    // Is it Tuesday Today?
    // Thank you @nanexcool
    // https://twitter.com/nanexcool/status/1259623747339849729
    function isMetacanaTuesday() public view returns (bool) {
        uint256 day = (now / 1 days + 3) % 7;
        return day == 1;
    }

    // Metacana Stats getter for Leaderboard
    function countMetacanas() public view returns (uint256) {
        return metacanas.length;
    }

    function getMetacanas() public view returns(address[] memory) {
        return metacanas;
    }

    function getMetacanaStats(address _address) public view returns (uint256 timesCrunched, uint256 metacanasCrunched) {
        return (metacanasCrunchStats[_address].timesCrunched, metacanasCrunchStats[_address].metacanasCrunched);
    }

    //===============================================//
    //                Social Proof                   //
    //===============================================//
    function setTwitterProof(uint256 _twitterProof) external onlyOwner {
        twitterProof = _twitterProof;
    }

    function getTwitterProof() external override view returns(uint256) {
        return twitterProof;
    }

    function setGithubProof(bytes calldata _githubProof) external onlyOwner {
        githubProof = _githubProof;
    }

    function getGithubProof() external override view returns(bytes memory) {
        return githubProof;
    }
}
