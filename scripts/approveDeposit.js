const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/tomandjerry.sol/tomandjerry.json");
require("dotenv").config();


async function main() {
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const wallet = new ethers.Wallet(privateKey, provider);
  const signer = wallet.connect(provider);

  const tomanadjerry_NFT = await ethers.getContractFactory("tomandjerry", signer);
  const nft = tomanadjerry_NFT.attach("0xD6d51c3Ad6f0379b01f58aFC486cAE57e533711D");
  const fxRootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
  const fxRoot = new ethers.Contract(fxRootAddress, FXRootContractAbi, signer);

  const tokenidentifiers = [0, 1, 2, 3, 4];
  const approveTx = await nft.setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Set Approved!.");

  for (const tokenId of tokenidentifiers) {
    const depositTx = await fxRoot.deposit(nft.address, wallet.address, tokenId, "0x6566");
    await depositTx.wait();
  }

  console.log("My tomandjerry NFTs have been transferred");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
