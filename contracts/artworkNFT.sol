// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract artworkNFT is ERC721URIStorage, Ownable {

constructor () ERC721 ("ArtworkNFT","ANFT") {}
    function mintt(address _to, uint256 _tokenId, string calldata _uri) external onlyOwner
    {
        _mint (_to,_tokenId) ;
        _setTokenURI (_tokenId, _uri);
    }
    function promptDescription()public pure returns(string memory description)
        {

           return( "ben 10 in marval | blockchain is solution of all problem | nft leading world technology | tech lover in galaxy | world god");
        }
}