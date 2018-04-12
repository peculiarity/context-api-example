import React from "react";
import ApplicationContext from "./app-context";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <ApplicationContext.Consumer>
        {
          state => (
            <React.Fragment>
              <h1>{this.props.label} {state.accounts.defaultAccount} </h1>
              <ul>
                {
                  state.transactions.map((tx) => {
                    return <li key={tx.id}> {tx.txHash}</li>
                  })
                }
              </ul>
            </React.Fragment>
          )
        }
      </ApplicationContext.Consumer>
    )
  }
}

export default Details;