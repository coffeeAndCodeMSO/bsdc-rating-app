import React, { Component } from 'react';
import './css/App.css';
import Dreams from './Components/Dreams.js';
import Settings from './Components/Settings.js'
import NewDream from './Components/NewDream.js';
import Home from './Home.js'
import { Gradient } from './webgl/gradient';

import {BrowserRouter, Route} from "react-router-dom";
import Header from './Components/ReusableComponents/Header';

var grad;

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: "",
      colors: {
        color1: '',
        color2: ''
      }
    }
  }

  changeColors = (colors) => {
    grad.generateColors(colors);
  }

  componentDidMount(){
    grad = new Gradient();
    grad.animate();
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })
  setTitle = (title) => this.setState({title: title })
  update = (title) => this.setState({
    open: !this.state.open,
    title: title
  });

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
                render={() => (<Home changeColors={this.changeColors} />)}
                setTitle={this.setTitle.bind(this)}
              />
              <Route path="/Login" render={() => (<Home changeColors={this.changeColors} />)} setTitle={this.setTitle}/>
              <Route path="/Dreams" component={Dreams} setTitle={this.setTitle}/>
              <Route path="/NewDream" component={NewDream} setTitle={this.setTitle}/>
              <Route path="/Settings" component={Settings} setTitle={this.setTitle}/>
          </div>
      </BrowserRouter>
    )
  }
}


// <Route exact path='/' render={(props) => (
//   <PageContent {...props} pass_to_page_content='hi' />
// )}/>
