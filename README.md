# Transferring ERC721A AI generated Tom&Jerry Fighting NFTS to Polygon(POL)

This project demonstrates the use of Ai generated images in the 'generated_images' folder , uploading the folder to pinata cloud (IPFS). Minting these assets on sepolia testnet, approving the same on sepolia and depositing the assets on sepolia to amoy testnet using fxportal bridge.

- Base URL - "https://gateway.pinata.cloud/ipfs/QmdtiVEFR2QQWqn5EBD1jnW1mEPBYnzLLmhiGFSW8dk4rU"
- PROMPT Used - 'tom and jerry fighting'
### Steps for Bridging

1. Run npm i to install project dependencies
2. Put your private key in the .env file 
3. Run npx hardhat run scripts/deploy.js --network sepolia to deploy ERC721A contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network sepolia to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network sepolia to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network amoy to see the new polygon balance

## Authors

Ajay SS
 [0j0y1512@gmail.com]
