import React, { Component } from 'react';

import logo from '../CTPHUB.png';
import '../App.js';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CTP_Hub is under development . . .
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
