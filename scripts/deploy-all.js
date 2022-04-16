const deployContracts = require('./deploy-contract.js')
const deployMint = require('./deploy-mint.js')
const pinata = require('./pinata.js')



const deployAll = async () => {
    console.log(`1 - Deploying contract`)
    try {
        const contract = await deployContracts.deploy()
        if (contract) {
            console.log(`----- Found contract at: ${contract} `)
            console.log(`2 - Deploying metadata`)
            try {
                const metaHash = await pinata.pinMetadata()
                if (metaHash.IpfsHash) {
                    console.log(`----- Uploaded metadata at: ${metaHash.IpfsHash} `)
                    console.log(`3 - Minting NFT`)
                    deployMint.mint(contract, `https://gateway.pinata.cloud/ipfs/${metaHash.IpfsHash}`)
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }



}


deployAll()