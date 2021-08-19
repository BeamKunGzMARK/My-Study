import React from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends React.Component {
        state = {
                manager: "",
                players: [],
                balance: "",
                value: "",
                message: "",
                Winnerprize: "",
        };

        async componentDidMount() {
                const manager = await lottery.methods.manager().call();
                const players = await lottery.methods.getPlayers().call();
                const balanceget = await web3.eth.getBalance(
                        lottery.options.address
                );

                const balancegetting = web3.utils.fromWei(balanceget, "ether");
                const balanceupper = balancegetting / 0.1;
                console.log(balanceupper);
                const balance = (
                        balancegetting -
                        balanceupper * 0.00133865
                ).toFixed(5);

                this.setState({ manager, players, balance });
        }

        onSubmit = async (event) => {
                event.preventDefault();

                const accounts = await web3.eth.getAccounts();

                document.getElementById("Help").innerHTML =
                        "Waiting on transaction success...";

                this.setState({
                        value: "0.1",
                });

                let trans;

                await lottery.methods
                        .enter()
                        .send({
                                from: accounts[0],
                                value: web3.utils.toWei(
                                        this.state.value,
                                        "ether"
                                ),
                        })
                        .on("receipt", function (receipt) {
                                trans = receipt.transactionHash;
                        });

                document.getElementById(
                        "Help"
                ).innerHTML = `<br><br><span>You have been entered !</span><br><br>
                                <span>Transaction id : ${trans}</span>`;
        };

        onClick = async () => {
                const accounts = await web3.eth.getAccounts();

                document.getElementById("Help").innerHTML =
                        "Waiting on transaction success...";

                await lottery.methods.pickWinner().send({
                        from: accounts[0],
                });

                const getWinner = await lottery.methods.getWinner().call();
                const prize = this.state.balance;

                document.getElementById(
                        "Help"
                ).innerHTML = `<br><br><span>A winner has been picked !</span><br><br><span>The Winner is : ${getWinner}</span><br><br>
                                <span>Prize : ${prize} KUB !</span>`;
        };

        render() {
                return (
                        <div class="supercenter">
                                <h2>
                                        Lottery Contract |{" "}
                                        <span style={{ color: "#03CC62" }}>
                                                Bitkub
                                        </span>{" "}
                                        Chain
                                </h2>
                                <p>
                                        This contract is managed by{" "}
                                        <span style={{ color: "#FAC898" }}>
                                                {this.state.manager}
                                        </span>
                                        .<br></br>
                                        There are currently{" "}
                                        <span style={{ color: "#C1E1C1" }}>
                                                {this.state.players.length}
                                        </span>{" "}
                                        people entered,
                                        <br></br>
                                        Prize to win{" "}
                                        <span style={{ color: "#7398C4" }}>
                                                {this.state.balance}{" "}
                                        </span>
                                        KUB !<br></br>
                                        <span>
                                                This Contract is{" "}
                                                <span
                                                        style={{
                                                                color: "#FF6961",
                                                        }}
                                                >
                                                        0x7bb1ce446769248f69E306560C174F27E9ddE20A
                                                </span>
                                        </span>
                                </p>
                                <form
                                        onSubmit={this.onSubmit}
                                        class="margintopunder"
                                >
                                        <h4>Want to try your luck?</h4>
                                        <div>
                                                <label
                                                        style={{
                                                                display: "inline-flex",
                                                        }}
                                                >
                                                        Amount of KUB to enter
                                                </label>
                                                <input
                                                        value={this.state.value}
                                                        onChange={(event) =>
                                                                this.setState({
                                                                        value: event
                                                                                .target
                                                                                .value,
                                                                })
                                                        }
                                                        style={{
                                                                display: "inline-flex",
                                                        }}
                                                        class="margininput"
                                                />

                                                <button
                                                        class="btn btn-success"
                                                        style={{
                                                                display: "inline-flex",
                                                        }}
                                                >
                                                        Enter
                                                </button>
                                        </div>
                                </form>
                                <h4>Pick the Winner !!</h4>
                                <button
                                        onClick={this.onClick}
                                        class="btn btn-danger margininput margintoper"
                                >
                                        Pick a winner !
                                </button>
                                <div class="margintoper fonter" id="Help"></div>
                        </div>
                );
        }
}
export default App;
