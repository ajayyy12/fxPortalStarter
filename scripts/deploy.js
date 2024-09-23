const hre = require("hardhat");

async function main() {
  const tomandjerry_contract = await hre.ethers.deployContract("tomandjerry");
  console.log("My tomandjerry:", tomandjerry_contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
