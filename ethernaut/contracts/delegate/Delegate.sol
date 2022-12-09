// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Delegate {

  //address public other;
  address public beetle;

  constructor() {
    beetle = msg.sender;
  }

  function pwn() public {
    console.log("pwn");
    beetle = msg.sender;
  }
}