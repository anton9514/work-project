import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> ЛОЛ КЕК </h2>
        </div>
        <Form />
        <h4>
      </h4>
      </div>
    );
  }
}

export default App;
