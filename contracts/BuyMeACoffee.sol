// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract BuyMeACoffee {

    event NewMemo(
        address indexed from,
        uint timestamp,
        string name,
        string message
    );

    struct Memo{
        address from;
        uint timestamp;
        string name;
        string message;
    }

    address payable owner;

    Memo[] memos;

    constructor(){
        owner = payable(msg.sender);
    }

    function getMemo() public view returns (Memo[] memory) {
        return memos;
    }

    function buyCoffee(string memory _name, string memory _message) public payable{
        require(msg.value > 0, "Can't buy for free!");

        memos.push(Memo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        ));

        emit NewMemo(msg.sender, block.timestamp, _name, _message);
    }

    function withdrawTips() public {
        require(owner.send(address(this).balance));
    }
}