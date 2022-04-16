const hre = require("hardhat");
require('dotenv').config();

async function mint(contract, metadata) {
    const NFT = await hre.ethers.getContractFactory("PhotoNFT");

    //The IPFS Address of your image that you uploaded to Pinata
    // const URI = "ipfs://QmVH5T7MFVU52hTfQdWvu73iFPEF3jizuGfyVLccTmBCX2"

    //Your Wallet Address that contains Matic whose private key you put into .gitignore
    // const WALLET_ADDRESS = "0x44f2b515211953d5f07038be619D58a91accB8E7"

    //The AllCodeNFT contract address that you deployed above
    // const CONTRACT_ADDRESS = "0xD931d7bAA004A1DA25bc6E877E6f669cB8559219"
    const contractInstance = NFT.attach(contract);
    await contractInstance.mint(process.env.PUBLIC_KEY, metadata);
    console.log("NFT minted");
    return true
}

module.exports = { mint }