import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  handleClick(event,role){
    var apiBaseUrl = "http://localhost:3000/api/";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  render() {
    return (
      <div>
          <div>
            <TextField
              hintText="Enter your UserName"
              floatingLabelText="UserName"
              underlineStyle={{borderColor:"#ff0000"}}
              onChange = {(event,newValue) => this.setState({first_name:newValue})}
              />
            <br/>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             underlineStyle={{borderColor:"#ff0000"}}
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             underlineStyle={{borderColor:"#ff0000"}}
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             underlineStyle={{borderColor:"#ff0000"}}
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "Password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             underlineStyle={{borderColor:"#ff0000"}}
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
             <TextField
               type = "Password"
               hintText="ReEnter your Password"
               floatingLabelText="ReEnter your Password"
               underlineStyle={{borderColor:"#ff0000"}}
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
           <RaisedButton
             label="Submit"
             onClick={(event) => this.handleClick(event)}
             />
          </div>
      </div>
    );
  }
}
export default Register;
