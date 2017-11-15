import React, { Component } from 'react';
import {BrowserRouter, Route, Link, browserHistory, indexRoute} from "react-router-dom";
import {Button, ButtonGroup} from 'react-bootstrap';
import Home from '../Home.js';
import Settings from '../Settings.js'
import Analyze from '../Analyze.js';
import Log from '../Log.js';
import Login from '../Login.js'

export default class Container extends React.Component {
  render(){
    return(
      <div>
         <nav className = "navbar bavbar-fixed-top">
           <div className = "nav navbar-nav">
            <ButtonGroup>
            <Button><Link to = "/">Home</Link></Button>
            <Button><Link to = "/SettingsPage">Setting</Link></Button>
            <Button><Link to = "/AnalyticsPage">Analyze</Link></Button>
            <Button><Link to = "/LogPage">Log</Link></Button>
            <Button><Link to = "/MainPage">Login</Link></Button>
            </ButtonGroup>
          </div>
        </nav>
        <div className = "content">
          <Route path = "/" exact component = {Home}/>
          <Route path = "/SettingsPage" component = {Settings}/>
          <Route path = "/AnalyticsPage" component = {Analyze}/>
          <Route path = "/LogPage" component = {Log}/>
          <Route path = "/MainPage" component = {Login}/>
        </div>
      </div>
    )
  }
}
