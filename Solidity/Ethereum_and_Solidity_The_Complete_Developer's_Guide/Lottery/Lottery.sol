pragma solidity ^0.4.17;

/**
 * @title Main
 *
 */
 
contract LotteryStudy {
    address public manager;
    address[] public joining;
    address public Winner;
    
    constructor(address _manager) public {
        manager = _manager;
    }

    function Lottery() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        joining.push(msg.sender);
    }
    

    function random() private view returns (uint){
        return uint(keccak256(abi.encodePacked(block.difficulty, now, joining)));
    }
    
    function PickWinner() public Owner{
        uint index = random() % joining.length;
        Winner = joining[index];
        joining[index].transfer(this.balance);
        joining = new address[](0);
       
    }
    
    
    function getJoining() public view returns (address[]){
        return joining;
    }
    
    function ValueofLottery() public view returns (uint){
        return (this.balance / 10 ** 16);
    }
    
    modifier Owner(){
        require(msg.sender == manager);
        _;
    }
    
}
