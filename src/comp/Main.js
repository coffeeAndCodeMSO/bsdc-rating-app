import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import Signup from './Signup.js'
import Login from './Login.js'

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </div>
)

export default Main;
