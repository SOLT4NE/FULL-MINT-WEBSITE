
 pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';


contract RoboPunksNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string public baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public maxPerWalletMints;

    constructor() public ERC721("RoboPunks", "RP") {
        mintPrice = 200000000000000000; // 0.02 ether
        totalSupply = 0;
        maxSupply = 1469;
        maxPerWallet = 2;
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) public onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string memory baseTokenUri_) public onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    

    function mint(address _to, uint256 _tokenId) public payable {
        require(msg.value > 0, "msg.value should be greater than zero");
        require(isPublicMintEnabled, "minting not enabled");
        require(msg.value == mintPrice, "wrong mint value");
        require(totalSupply + 1 <= maxSupply, "sold out");
        require(maxPerWalletMints[_to] + 1 <= maxPerWallet, "exceed max wallet");

        _mint(_to, _tokenId);
        maxPerWalletMints[_to]++;
        totalSupply++;
    }
      
}
