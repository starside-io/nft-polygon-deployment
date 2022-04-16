const { expect } = require("chai");
describe("NFT Mint", function () {
  it("Deploy the NFT contract, mint a token, and ensure that we have the right metadata associated with the tokenId", async function () {
    const NFT = await ethers.getContractFactory("PhotoNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmVH5T7MFVU52hTfQdWvu73iFPEF3jizuGfyVLccTmBCX2";
    await nft.deployed();
    await nft.mint("0x44f2b515211953d5f07038be619D58a91accB8E7", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});