// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeting {
    string private greeting;

    // Constructor to initialize the greeting message
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // Function to set a new greeting message
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    // Function to get the current greeting message
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}


