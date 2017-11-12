import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test.js';
import Quote from './Components/Quote.js';
import LoginSignup from './Components/LoginSignup.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dream App</h1>
          <Test />
          <Quote className = "App-quote"/>
          <LoginSignup className = "App-loginsignup" />
        </header>
      </div>
    );
  }
}

export default App;
