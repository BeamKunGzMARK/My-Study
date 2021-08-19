const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./Compile");

const provider = new HDWalletProvider(
        "key",
        "https://rinkeby.infura.io/v3/18d395e989814bc193da268379d99ef8"
);

const web3 = new Web3(provider);

const deploy = async () => {
        const accounts = await web3.eth.getAccounts();

        console.log("Attemping to deploy from Account", accounts[0]);

        const result = await new web3.eth.Contract(JSON.parse(interface))
                .deploy({
                        data: bytecode,
                })
                .send({ gas: "1000000", from: accounts[0] });

        console.log("Contract deploy to", result.options.address);
};

deploy();
