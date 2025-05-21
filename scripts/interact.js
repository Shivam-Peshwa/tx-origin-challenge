require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const callerAddress = "0x5283bcBc0F54f06b5439a8f3E52DdC6edd513b60";

  const Caller = await hre.ethers.getContractAt("Caller", callerAddress);
  const tx = await Caller.callAttempt();
  await tx.wait();

  console.log("callAttempt() transaction complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});