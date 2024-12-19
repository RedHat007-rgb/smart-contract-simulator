// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleBank {
    // Mapping to store user balances
    mapping(address => uint256) private balances;

    // Event to log deposits
    event Deposit(address indexed user, uint256 amount);

    // Event to log withdrawals
    event Withdrawal(address indexed user, uint256 amount);

    // Function to deposit Ether into the contract
    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        balances[msg.sender] += msg.value;

        emit Deposit(msg.sender, msg.value);
    }

    // Function to check the balance of the sender
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    // Function to withdraw Ether from the contract
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient funds");
        payable(msg.sender).transfer(amount);
        balances[msg.sender] -= amount;

        emit Withdrawal(msg.sender, amount);
    }
}
