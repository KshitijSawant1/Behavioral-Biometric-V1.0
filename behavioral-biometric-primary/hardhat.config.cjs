require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Change this if your RPC server port is different
      accounts: [
        "0x786b1dbe890a7180cf25ee1162e1cbc35d3c68f8c2c4fbbe93588cb6db086811",
        "0xd3dde359f5cc08202a6a2abeabf3a6ff36dc4cf6829f0d325fb514fc2ec176b7",
        "0xcd9466286bb79da4c7c7cd39e140a93ee5bd4c0b2d984a588c5ebf7be121cbe7",
        "0x509bc036d9ea94cab1bbf6da2b5d983b62bb1db53131f53255c89c4d0f9cfe0d",
        "0xb6141b18196c3392ea597b0e1a2f8f333bcaba4ef7767d8150a9c70267a4129b",
        "0x379624bd745de75b93ff82ccbffe5c7a5063d3cf01e7796f9d1ecd93401d1bd7",
        "0x189ddc05d627a939065e3f526a5e92c81f30efce39359f8110701a0a3eedb720",
        "0x1e9d3cb195e735b0e154a8cd0fb902e00485b7882d2932ec38bf3e5315840d2e",
        "0xb92e53eb671932491f0047bc9cffea551a88e5efb9f30b7c441ee3c72b2f308c",
        "0x8938bf42710ee6cb20881457b6c8b543b721037e3c575ac048d3e2bdbb573d95",
      ],
    },
  },
};
