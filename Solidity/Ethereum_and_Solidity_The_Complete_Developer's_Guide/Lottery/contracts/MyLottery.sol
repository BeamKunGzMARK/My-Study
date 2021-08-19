pragma solidity ^0.4.17;

contract LotteryStudy {
    address public manager = msg.sender;
    address[] public players;


    
    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
        uint index = random() % players.length;
        uint numbercount = (this.balance);
        players[index].transfer(numbercount);
        players = new address[](0);
        
    }
    
    function valueWinner() public view returns (uint){
        return (this.balance);
    }
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
}   