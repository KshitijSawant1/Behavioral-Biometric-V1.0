const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.KS_NETWORK);
  const balance = await provider.getBalance("YOUR_WALLET_ADDRESS");
  console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
}

main();
