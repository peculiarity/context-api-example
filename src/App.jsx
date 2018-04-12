import React, { Component } from 'react';

const {Provider, Consumer} = React.createContext("Hello World from BEYOND!");


export default () => <Consumer>
  {
    value => <h1> {value} </h1>
  }
</Consumer>;
