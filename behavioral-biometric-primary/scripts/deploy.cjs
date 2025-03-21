const hre = require("hardhat");

async function main() {
  const BlockchainID = await hre.ethers.getContractFactory("BlockchainID");
  console.log("Deploying contract...");

  const contract = await BlockchainID.deploy();
  await contract.waitForDeployment(); 

  const contractAddress = await contract.getAddress();
  console.log(`✅ Contract deployed at address: ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
