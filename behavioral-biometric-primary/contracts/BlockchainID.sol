// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract BlockchainID {
    struct User {
        address userAddress;
        string publicData;
        bytes32 privateDataHash;
        uint256 createdAt;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed user, string publicData, uint256 timestamp);

    function createBlockchainID(string memory _publicData, string memory _privateData) public {
        require(users[msg.sender].userAddress == address(0), "User already registered");

        bytes32 privateHash = keccak256(abi.encodePacked(_privateData));

        users[msg.sender] = User({
            userAddress: msg.sender,
            publicData: _publicData,
            privateDataHash: privateHash,
            createdAt: block.timestamp
        });

        emit UserRegistered(msg.sender, _publicData, block.timestamp);
    }

    function getUserData(address _user) public view returns (string memory, uint256) {
        require(users[_user].userAddress != address(0), "User not found");
        return (users[_user].publicData, users[_user].createdAt);
    }
}