import React, { createContext } from 'react';
import ApplicationContext from "./app-context";
import Details from "./details";

const state = {
  network: {isConnected: false},
  accounts: {defaultAccount: "0x0000000001111111111122222222229999999999"},
  transactions: [
    {txHash: "0x1", id: new Date().getTime() * Math.random()},
    {txHash: "0x2", id: new Date().getTime() * Math.random()},
    {txHash: "0x3", id: new Date().getTime() * Math.random()},
    {txHash: "0x4", id: new Date().getTime() * Math.random()},
  ]
}


class Application extends React.Component {
  constructor() {
    super();
    this.state = state;
  }

  render() {
    return (
      <React.Fragment>
        <ApplicationContext.Provider value={this.state}>
          <Details label="You Address is: "/>
        </ApplicationContext.Provider>

        <button onClick={() => {
          this.setState(prevState => {
            prevState.transactions.push({
              txHash: `0x${prevState.transactions.length + 1}`,
              id: new Date().getTime() * Math.random()
            });
            return prevState;
          })
        }}> Add Last TX
        </button>
        <button onClick={() => {
          this.setState(prevState => {
            prevState.transactions.pop();
            return prevState;
          })
        }}> Remove Last TX
        </button>
        <button onClick={() => {
          this.setState(prevState => {
            prevState.transactions.unshift({
              txHash: `0x${prevState.transactions.length + 1}`,
              id: new Date().getTime() * Math.random()
            });
            return prevState;
          })
        }}> Add First TX
        </button>

        <button onClick={() => {
          this.setState(prevState => {
            prevState.transactions.shift();
            return prevState;
          })
        }}> Remove First TX
        </button>
      </React.Fragment>
    )
  }
}


export default Application;
