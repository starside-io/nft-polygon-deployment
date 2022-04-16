pragma solidity ^0.8.0;
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PhotoNFT is ERC721URIStorage, Ownable {
    //imported from OpenZeppelin
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIds;

    // mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721("PhotoNFT", "PNFT") {}

    function burnToken(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
    }

    //mints a token by taking the metadata passed into the uri,
    //and associated that metadata with the recipients address.
    //next we assign the uri metadata to the tokenId.
    function mint(address recipient, string memory uri)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, uri);
        return newItemId;
    }
}
