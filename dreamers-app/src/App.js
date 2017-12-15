import React, { Component } from 'react';
// import routes from './routes.js';

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import HomePage from './Components/HomePage.js';
import LoginPage from './containers/LoginPage.js';
import LogoutFunction from './containers/LogoutFunction.js';
import SignUpPage from './containers/SignUpPage.js';
import DashboardPage from './containers/DashBoardPage.js';
import Auth from './modules/Auth';
import Dreams from './Components/Dreams.js';
import Settings from './Components/Settings.js'
import NewDream from './Components/NewDream.js';
import Header from './Components/ReusableComponents/Header';

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

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: "",
      isUserAuthenticated: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })
  setTitle = (title) => this.setState({title: title })
  update = (title) => this.setState({
    open: !this.state.open,
    title: title
  })

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.authenticated ? (
            <div className="top-bar-right">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/logout">Log out</Link>
            </div>
          ) : (
            <div className="top-bar-right">
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          )}
          <Header title={this.state.title}
                  open={this.state.open}
                  setValue={this.toggleDrawer}
                  update={this.update}
          />
          <Route
            path="/"
            exact
            component={HomePage}
            setTitle={this.setTitle.bind(this)}
          />

          <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <PrivateRoute path="/dashboard" component={DashboardPage}/>
          <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <LoggedOutRoute path="/signup" component={SignUpPage}/>
          <Route path="/logout" component={LogoutFunction}/>
          <Route path="/Dreams" component={Dreams} setTitle={this.setTitle}/>
          <Route path="/NewDream" component={NewDream} setTitle={this.setTitle}/>
          <Route path="/Settings" component={Settings} setTitle={this.setTitle}/>
          </div>
      </BrowserRouter>
    )
  }
}
