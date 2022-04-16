# nft-polygon-deployment

This project show cases more exmples on how to deploy burnable nfts on the polygon test and live network.

It is based on the way the following projects works.

https://github.com/starside-io/nft-eth-deployment

Refer to `nft-eth-deployment` for more info on the documentation.

This project does not require Alchemy

---

# Installation 

```
yarn
```

Add a `.env` file with your pinata account and your metamask account info

```
PRIVATE_KEY="WALLET_PRIVATE_KEY"
PUBLIC_KEY="WALLET_PUBLIC_KEY"
PINATA_ID="PINATA_ID"
PINATA_KEY="PINATA_KEY"

```

# Usage

Deploy to the test network

```bash
yarn deploy-test
```

Deploy to the live network

```bash 
yarn deploy-live
```


# Development

Refer to `test/sample-test.js` for examples on how to use various functions.

---

Some hardhat commands.

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Author 

**Author:** Burlet Mederic

**Discord:** 『　　』#6014

**Twitter:** https://twitter.com/crimson_med

