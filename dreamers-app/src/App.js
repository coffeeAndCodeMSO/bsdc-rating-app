import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import HomePage from './Components/HomePage.js';
import LoginPage from './containers/LoginPage.js';
import LogoutFunction from './containers/LogoutFunction.js';
import SignUpPage from './containers/SignUpPage.js';
import Dreams from './Components/Dreams.js';
import Settings from './Components/Settings.js'
import NewDream from './Components/NewDream.js';
import Home from './Home.js'
import Header from './Components/ReusableComponents/Header';

import { Gradient } from './webgl/gradient';
import Auth from './modules/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

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

  toggleDrawer = () => this.setState({ open: !this.state.open })
  setTitle = (title) => this.setState({title: title })
  update = (title) => this.setState({
    open: !this.state.open,
    title: title
  });

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  componentDidMount(){
    grad = new Gradient();
    grad.animate();
    this.toggleAuthenticateStatus()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            authenticated={this.state.authenticated}
            title={this.state.title}
            open={this.state.open}
            setValue={this.toggleDrawer}
            update={this.update}
          />
          <PropsRoute exact path="/" component={HomePage} render={() => (<Home changeColors={this.changeColors} />)} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} setTitle={this.setTitle.bind(this)}/>
          <LoggedOutRoute path="/login" component={LoginPage} render={() => (<Home changeColors={this.changeColors} />)} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <LoggedOutRoute path="/signup" component={SignUpPage}/>
          <Route path="/logout" component={LogoutFunction}/>
          <PrivateRoute path="/Dreams" component={Dreams} setTitle={this.setTitle}/>
          <PrivateRoute path="/NewDream" component={NewDream} setTitle={this.setTitle}/>
          <PrivateRoute path="/Settings" component={Settings} setTitle={this.setTitle}/>
        </div>
      </BrowserRouter>
    )
  }
}

/*          <div>
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
<Route path="/Settings" component={Settings} setTitle={this.setTitle}/> */
// <Route exact path='/' render={(props) => (
//   <PageContent {...props} pass_to_page_content='hi' />
// )}/>
