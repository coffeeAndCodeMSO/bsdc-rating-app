{/*

import React, { Component } from 'react';
import './css/App.css';
import LoginScreen from './Components/LoginScreen';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen parentContext={this} changeColors={this.props.changeColors}/>);
    this.setState({
                  loginPage:loginPage
                    })
                  }
  render() {
    return (
      <div className="Home">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default Home;
