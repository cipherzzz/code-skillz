// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Telephone {

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {

    // modified from the original ethernaut problem to make more sense
    require(tx.origin == owner, 'only the owner should be able to call this function');
    owner = _owner;
  }
}