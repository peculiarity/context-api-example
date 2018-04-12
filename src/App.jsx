import React, { Component } from 'react';

const {Provider, Consumer} = React.createContext("Hello World from BEYOND!");

const App = () => (
  <Provider value="Hello Georgi">
    <Consumer>
      {
        value => <h1> {value} </h1>
      }
    </Consumer>
  </Provider>
)


export default App;
