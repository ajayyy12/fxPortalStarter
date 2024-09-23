const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/tomandjerry.sol/tomandjerry.json");

const tokenAddress = "0x7Bc1110BE19692705197dE44119109BBB461493F";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xC63Ef7276606B11cCCae9b7149f3D35b17389d78"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("My tomandjerry balance : " + await token.balanceOf(walletAddress) + " NFT tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
