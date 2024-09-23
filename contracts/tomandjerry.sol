// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract tomandjerry is ERC721A{
    address public owner;
    uint256 public max = 5;
    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmdtiVEFR2QQWqn5EBD1jnW1mEPBYnzLLmhiGFSW8dk4rU";
    string public prompt = "tom and jerry fighting";

    constructor() ERC721A("tomandjerry", "TJ") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= max ,"max NFT limit for this contract : 5");
        _mint(msg.sender, quantity);
    }

    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
