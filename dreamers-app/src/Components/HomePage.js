import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
   this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container">
         {Auth.isUserAuthenticated() ? (
           <CardText style={{ fontSize: '16px', color: 'black' }}>Welcome! You are logged in.</CardText>
         ) : (
           <CardText style={{ fontSize: '16px', color: 'black' }}>“Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.” </CardText>
         )}
     </Card>
    )
  }
};

export default HomePage;
