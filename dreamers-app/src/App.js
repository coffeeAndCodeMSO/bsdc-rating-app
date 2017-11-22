import React, { Component } from 'react';

import cloud from './images/cloud.png';
import './App.css';
import Test from './Components/Test.js';
import Quote from './Components/Quote.js';
import LoginSignup from './Components/LoginSignup.js';
import {BrowserRouter} from "react-router-dom";
import Container from './Components/ReusableComponents/Container.js';
import Settings from './Components/Settings.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cloud} className="App-cloud" alt="cloud" />
          <h1 className="App-title">Welcome to Dream App</h1>
        </header>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
