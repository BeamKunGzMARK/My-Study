import web3 from "./web3";

const address = "0x7bb1ce446769248f69E306560C174F27E9ddE20A";
const abi = [
        {
                type: "function",
                stateMutability: "view",
                payable: false,
                outputs: [{ type: "address", name: "" }],
                name: "manager",
                inputs: [],
                constant: true,
        },
        {
                type: "function",
                stateMutability: "nonpayable",
                payable: false,
                outputs: [],
                name: "pickWinner",
                inputs: [],
                constant: false,
        },
        {
                type: "function",
                stateMutability: "view",
                payable: false,
                outputs: [{ type: "address[]", name: "" }],
                name: "getPlayers",
                inputs: [],
                constant: true,
        },
        {
                type: "function",
                stateMutability: "view",
                payable: false,
                outputs: [{ type: "address", name: "" }],
                name: "getWinner",
                inputs: [],
                constant: true,
        },
        {
                type: "function",
                stateMutability: "view",
                payable: false,
                outputs: [{ type: "uint256", name: "" }],
                name: "valueWinner",
                inputs: [],
                constant: true,
        },
        {
                type: "function",
                stateMutability: "view",
                payable: false,
                outputs: [{ type: "address", name: "" }],
                name: "winner",
                inputs: [],
                constant: true,
        },
        {
                type: "function",
                stateMutability: "payable",
                payable: true,
                outputs: [],
                name: "enter",
                inputs: [],
                constant: false,
        },
        {
                type: "function",
                stateMutability: "view",
                payable: false,
                outputs: [{ type: "address", name: "" }],
                name: "players",
                inputs: [{ type: "uint256", name: "" }],
                constant: true,
        },
];

export default new web3.eth.Contract(abi, address);
