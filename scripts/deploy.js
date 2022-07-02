
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Chiky = await hre.ethers.getContractFactory("CHIKY");
  const chiky = await Chiky.deploy();

  await chiky.deployed();

  console.log("Chiky deployed to:", chiky.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
