import React, { Component } from 'react';
import logo from './hackiea.png';
import './App.css';
import Randomizer from './Randomizer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Want a random programming buzzword?
          </p>
          <Randomizer/>
         </header>
      </div>
    );
  }
}

export default App;
