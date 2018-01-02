import React from 'react';
import { Paper } from 'material-ui';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
   this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Paper className="container"
        zDepth={1}
        style={{
          backgroundColor:'trasparent',
          padding:50,
        }}>
         {Auth.isUserAuthenticated() ? (
           <p style={{ fontSize: '16px', color: 'black' }}>Welcome! You are logged in.</p>
         ) : (
           <p style={{ fontSize: '16px', color: 'black' }}>“Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.” </p>
         )}
     </Paper>
    )
  }
};

export default HomePage;
