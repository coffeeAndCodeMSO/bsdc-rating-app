import React, { Component } from 'react';
import './css/App.css';
import Dreams from './Components/Dreams.js';
import Settings from './Components/Settings.js'
import Log from './Components/Log.js';
import Home from './Home.js'

import {BrowserRouter, Route} from "react-router-dom";
import Header from './Components/ReusableComponents/Header';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: ""
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })
  setTitle = (title) => this.setState({title: title })
  update = (title) => this.setState({
    open: !this.state.open,
    title: title
  })

  render() {
    return (
      <BrowserRouter>
          <div>
              <Header title={this.state.title}
                      open={this.state.open}
                      setValue={this.toggleDrawer}
                      update={this.update}
              />
              <Route
                path="/"
                exact
                component={Home}
                setTitle={this.setTitle.bind(this)}
              />
              <Route path="/Login" component={Home} setTitle={this.setTitle}/>
              <Route path="/Dreams" component={Dreams} setTitle={this.setTitle}/>
              <Route path="/Log" component={Log} setTitle={this.setTitle}/>
              <Route path="/Settings" component={Settings} setTitle={this.setTitle}/>
          </div>
      </BrowserRouter>
    )
  }
}
