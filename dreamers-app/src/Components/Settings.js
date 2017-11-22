import React, { Component } from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch'
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false,
      privacySwitch: false,
      logReminder: false,
      logOut: false
    };
  }

  //when off make public, when on make private
  togglePrivacy = () => {
    this.setState(prevState => {
      if(this.state.privacySwitch) {
        alert("public")
        //make private
      } else {
        alert("private")
        //make public
      }
      return {
        switched: !prevState.privacySwitch
      };
    });
  };

  toggleLogReminder = () => {
    this.setState(prevState => {
      if(this.state.logReminder) {
        alert("Entry Reminder On")
        //entry reminder on
      } else {
        alert("Entry Reminder Off")
        //entry reminder off
      }
      return {
        switched: !prevState.logReminder
      };
    });
  };

  toggleLogOut = () => {
    this.setState(prevState => {
      if(this.state.logOut) {
        alert("Logging Out")
        //about to log out
      } else {
        alert("Stay Logged In")
        //stay logged in
      }
      return {
        switched: !prevState.logOut
      };
    });
  };

  render (){
    return (
      <div>
        <ul className = "settings-page">
        <li className ="settings-page-item"><label>Public</label>
        <Switch onClick = {this.togglePrivacy} on ={this.state.privacySwitch}/>
        <label>Private</label></li>

        <li className ="settings-page-item"><label>Log Reminder On</label>
        <Switch onClick = {this.toggleLogReminder} on ={this.state.logReminder}/>
        <label>Log Reminder Off</label></li>

        <li className ="settings-page-item"></li><label>Stay Logged In</label>
        <Switch onClick = {this.toggleLogOut} on ={this.state.logOut}/>
        <label>Log Out</label>
        </ul>
      </div>
    );
  }
}
