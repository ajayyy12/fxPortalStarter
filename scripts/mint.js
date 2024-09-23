const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0xD6d51c3Ad6f0379b01f58aFC486cAE57e533711D";

  const tomandjerry = await ethers.getContractFactory("tomandjerry", signer);
  const tomandjerry_contract = await tomandjerry.attach(contractAddress);

  await tomandjerry_contract.mint(5);

  console.log("Minted my NFTs");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
