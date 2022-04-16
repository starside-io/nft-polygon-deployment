//0x5a8e95a706cf33807faabfa0b84fe8c48d648376
const utils = require('./../utils/utils')
const hre = require("hardhat");

async function burn(nft) {
    const NFT = await hre.ethers.getContractFactory("PhotoNFT");

    //The IPFS Address of your image that you uploaded to Pinata
    // const URI = "ipfs://QmVH5T7MFVU52hTfQdWvu73iFPEF3jizuGfyVLccTmBCX2"

    //Your Wallet Address that contains Matic whose private key you put into .gitignore
    // const WALLET_ADDRESS = "0x44f2b515211953d5f07038be619D58a91accB8E7"

    //The AllCodeNFT contract address that you deployed above
    // const CONTRACT_ADDRESS = "0xD931d7bAA004A1DA25bc6E877E6f669cB8559219"

    if (await utils.hasDeployedContract()) {
        const contractAdd = await utils.getDeployedContract()
        const contractInstance = NFT.attach(contractAdd);
        await contractInstance.burnToken((nft));
        console.log("NFT burnt");
        return true
    }

}
burn("1")
// module.exports = { mint }