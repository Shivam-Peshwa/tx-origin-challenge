require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const Caller = await hre.ethers.getContractFactory("Caller");
  const caller = await Caller.deploy();
  await caller.deployed();

  console.log("Caller deployed to:", caller.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
