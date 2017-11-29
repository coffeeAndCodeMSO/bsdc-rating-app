import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
