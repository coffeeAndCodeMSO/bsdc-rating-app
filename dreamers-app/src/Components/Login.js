import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UploadScreen from './UploadScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  
  handleClick(event){
    var apiBaseUrl ="http://localhost:5000/api";
    var self = this;
    var payload={
      "email":this.state.username,
      "password": this.state.password
    }

    grad.generateColors();

    axios.post(apiBaseUrl+'login',payload)
      .then(function(response){
        console.log(response);
        if(response.data.code === 200){
          console.log("Login successfull");
          var uploadScreen=[];
          uploadScreen.push(<UploadScreen HomeContext={self.props.HomeContext}/>)
          self.props.HomeContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
        else if(response.data.code === 204){
          console.log("Username password do not match");
          alert("username password do not match")
        }else{
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error){
        console.log(error);
      });
  }
  render(){
    return(
      <div>
          <div key='HomeLogin'>
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange = {(event,newValue) =>
            this.setState({username:newValue})}
            />
          <br/>
          <TextField
            type="Password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event,newValue) =>
            this.setState({passowrd:newValue})}
            />
          <br/>
          <RaisedButton
            label="Login"
            onClick={(event) => this.handleClick(event)}
            />
        </div>
      </div>
    );
  }
}
export default Login;
