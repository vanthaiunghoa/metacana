pragma solidity ^0.7.4;
import "@openzeppelin/contracts/math/SafeMath.sol";

library Percent {
  using SafeMath for uint256;
  /**
   * @dev Add percent to numerator variable with precision
   */
	function perc
	(
    uint256 initialValue,
    uint256 percent
  ) 
    internal 
    pure 
    returns(uint256 result) 
  { 
    return initialValue.div(100).mul(percent);
  }
}
