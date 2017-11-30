import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Components/LoginScreen';
import Header from './Components/ReusableComponents/Header';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }

  setPageTitle = () => {this.props.setTitle("MEH")};
  componentWillMount(){
    () => this.props.setValue();
    var loginPage =[];
    loginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }

  shouldComponentUpdate() {
    this.setPageTitle();
  }

  render() {
    return (
      <div className="Main">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default Main;
