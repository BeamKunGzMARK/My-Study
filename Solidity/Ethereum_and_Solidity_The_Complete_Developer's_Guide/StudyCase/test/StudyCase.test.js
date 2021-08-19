const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../Compile");

let accounts;
let StudyCase;

beforeEach(async () => {
        accounts = await web3.eth.getAccounts();

        StudyCase = await new web3.eth.Contract(JSON.parse(interface))
                .deploy({
                        data: bytecode,
                        arguments: ["Hi there!"],
                })
                .send({ from: accounts[0], gas: "1000000" });
});

describe("StudyCase", () => {
        it("Deploy Contract", () => {
                assert.ok(StudyCase.options.address);
        });

        it("Default Message", async () => {
                const message = await StudyCase.methods.message().call();
                assert.equal(message, "Hi there!");
        });

        it("Change Message", async () => {
                await StudyCase.methods
                        .SendMessage("Bye")
                        .send({ from: accounts[0] });
                const message = await StudyCase.methods.message().call();
                assert.equal(message, "Bye");
        });
});
