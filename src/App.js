import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        
        <Counter></Counter>
  
      </div>
    );
  }
}

export default App;
