import React, { createContext } from 'react';

const {Provider, Consumer} = createContext("Hello World from BEYOND!");
const {Provider: SecondProvider} = createContext("none");

const App = () => (
  <Provider value="Hello Georgi">
    <Provider value="Hello from the circles of hell!">
      <Consumer>
        {
          value => <h1> {value} </h1>
        }
      </Consumer>
    </Provider>
  </Provider>
)


export default App;
