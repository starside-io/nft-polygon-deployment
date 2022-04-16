const hre = require("hardhat");
const utils = require('./../utils/utils')
async function deploy() {
    if (await utils.hasDeployedContract()) {
        const wtf = await utils.getDeployedContract()
        return wtf
    } else {
        const NFT = await hre.ethers.getContractFactory("PhotoNFT");
        const nft = await NFT.deploy();
        await nft.deployed();
        if (nft && nft.address) {
            utils.setDeployedContract(nft.address)
            console.log("Photo NFT deployed to:", nft.address);
            return nft.address
        } else {
            console.log("error")
        }
    }
}

module.exports = { deploy }

// deploy().then(() => process.exit(0)).catch(error => {
//     console.error(error);
//     process.exit(1);
// });