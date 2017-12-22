import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';
import Register from './Register';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      username:'',
      passowrd:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Sign-Up',
      isLogin:true
    }
  }

  componentWillMount(){
    const loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} onColorChange={()=>this.props.onColorChange}/>);
    const loginmessage = "Not signed up yet, Signup Now";
    this.setState({
        loginscreen:loginscreen,
        loginmessage:loginmessage
    })
  }
  
  handleClick(event){
      var loginmessage;
      if(this.state.isLogin){
        var loginscreen=[];
        loginscreen.push(<Register parentContext={this} onColorChange={()=>this.props.onColorChange}/>);
        loginmessage = "Already registered.Go to Login";
        this.setState({
                       loginscreen:loginscreen,
                       loginmessage:loginmessage,
                       buttonLabel:"Login",
                       isLogin:false
                     })
      }
      else{
        /* In the console this will error out as "'loginscreen' is already defined  no-redeclare",
        however it is needed to use the login buttons correctly.
        */
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} onColorChange={this.onColorChange.bind(this)}/>);
        loginmessage = "Not Registered yet.Go to registration";
        this.setState({
                       loginscreen:loginscreen,
                       loginmessage:loginmessage,
                       buttonLabel:"Register",
                       isLogin:true
                     })
      }
    }
  render(){
    return(
      <div className='loginscreen'>
        {this.state.loginscreen}
      <div>
      {this.state.loginmessage}
        <div key='button'>
          <RaisedButton
            label={this.state.buttonLabel}
            onClick={(event) => this.handleClick(event)}/>
        </div>
    </div>
  </div>
  );
 }
}

export default LoginScreen;
