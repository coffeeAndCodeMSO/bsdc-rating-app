import React, { Component } from 'react';
import './App.css';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  toggleDrawer = () => this.setState({ open: !this.state.open })
  render() {
    return (
      <div>
        <AppBar
          title="Dreamers"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
          style={{backgroundColor: '#3b0066',}}
        />
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
        >
        <Avatar
          size={100}
        />
          <MenuItem
            primaryText="Login/SignUp"
            containerElement={<Link to="/Login" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="Dreams"
            containerElement={<Link to="/Dreams" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="Log"
            containerElement={<Link to="/Log" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="Settings"
            containerElement={<Link to="/Settings" />}
            onTouchTap={() => {
              this.toggleDrawer()
            }}
          />
        </Drawer>
        <div style={{ textAlign: 'center' }}>
          {this.props.children}
        </div>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
