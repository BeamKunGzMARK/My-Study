pragma solidity ^0.4.26;

/**
 * @title Main
 *
 */
 
contract StudyCase {
    string public message;
    address public owner = msg.sender;
    
    constructor(string _textmessage) public {
        message = _textmessage;
        
    }
    
    function SendMessage(string newMessage) public {
        message = newMessage;
    }
    
    
}
