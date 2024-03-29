// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


/**
 * @title TokenVesting
 * @dev A token holder contract that can release its token balance gradually like a
 * typical vesting scheme, with a cliff and vesting period. Optionally revocable by the
 * owner.
 */
contract TokenVesting is Ownable {
  using SafeMath for uint256;
  using SafeERC20 for ERC20;

  event Released(uint256 amount);
  event Revoked();

  // beneficiary of tokens after they are released
  address public beneficiary;

  uint256 public cliff;
  uint256 public start;
  uint256 public lockDurationAfterTge;
  uint256 public unlockTokenPercentAfterTge;
  uint256 public monthlyUnlockTokenPercentAfterCliff;
  uint256 public duration;

  bool public revocable;

  mapping (address => uint256) public released;
  mapping (address => bool) public revoked;

  /**
   * @dev Creates a vesting contract that vests its balance of any ERC20 token to the
   * _beneficiary, gradually in a linear fashion until _start + _duration. By then all
   * of the balance will have vested.
   * @param _beneficiary address of the beneficiary to whom vested tokens are transferred
   * @param _start the time (as Unix time) at which point vesting starts
   * @param _lockDurationAfterTge duration in seconds of the _lock in which tokens will be locked after TGE
   * @param _unlockTokenPercentAfterTge percent of the token in which tokens will be unlocked after _lockDurationAfterTge
   * @param _cliff duration in seconds of the cliff in which tokens will begin to vest (after _lockDurationAfterTge)   
   * @param _monthlyUnlockTokenPercentAfterCliff monthly unlock percent after cliff
   * @param _duration duration in seconds of the period in which the tokens will vest (after start+_lockDurationAfterTge + cliff)
   * @param _revocable whether the vesting is revocable or not
   */
  constructor(address _beneficiary, uint256 _start, uint256 _lockDurationAfterTge, uint256 _unlockTokenPercentAfterTge, uint256 _cliff, uint256 _monthlyUnlockTokenPercentAfterCliff, uint256 _duration, bool _revocable)  {
    require(_beneficiary != address(0));
    require(_lockDurationAfterTge <= _cliff);
    require(_cliff <= _duration);

    beneficiary = _beneficiary;
    revocable = _revocable;
    duration = _duration;
    unlockTokenPercentAfterTge = _unlockTokenPercentAfterTge;
    lockDurationAfterTge = _start.add(_lockDurationAfterTge);
    monthlyUnlockTokenPercentAfterCliff = _monthlyUnlockTokenPercentAfterCliff;
    cliff = lockDurationAfterTge.add(_cliff);    
    start = _start;
  }

  /**
   * @notice Transfers vested tokens to beneficiary.
   * @param token ERC20 token which is being vested
   */
  function release(ERC20 token) public {
    uint256 unreleased = releasableAmount(token);

    require(unreleased > 0);

    released[address(token)] = released[address(token)].add(unreleased);

    token.safeTransfer(beneficiary, unreleased);

    emit Released(unreleased);
  }

  /**
   * @notice Allows the owner to revoke the vesting. Tokens already vested
   * remain in the contract, the rest are returned to the owner.
   * @param token ERC20 token which is being vested
   */
  function revoke(ERC20 token) public onlyOwner {
    require(revocable);
    require(!revoked[address(token)]);

    uint256 balance = token.balanceOf(address(this));

    uint256 unreleased = releasableAmount(token);
    uint256 refund = balance.sub(unreleased);

    revoked[address(token)] = true;

    token.safeTransfer(owner(), refund);

    emit Revoked();
  }

  /**
   * @dev Calculates the amount that has already vested but hasn't been released yet.
   * @param token ERC20 token which is being vested
   */
  function releasableAmount(ERC20 token) public view returns (uint256) {
    return vestedAmount(token).sub(released[address(token)]);
  }

  /**
   * @dev Calculates the amount that has already vested.
   * @param token ERC20 token which is being vested
   */
  function vestedAmount(ERC20 token) public view returns (uint256) {
    uint256 currentBalance = token.balanceOf(address(this));
    uint256 totalBalance = currentBalance.add(released[address(token)]);
    if (block.timestamp < lockDurationAfterTge) {
      return totalBalance.mul(unlockTokenPercentAfterTge);
    } else if (block.timestamp < cliff) {
      return 0;
    } else if (block.timestamp >= start.add(duration) || revoked[address(token)]) {
      return totalBalance;
    } else {
      return totalBalance.mul(block.timestamp.sub(cliff)).div(duration);
    }
  }
}
