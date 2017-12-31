import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardActions, CardTitle, CardText, FlatButton, FloatingActionButton} from 'material-ui';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Auth from '../modules/Auth';

const DreamsStyle = () => (
  <Dreams
    style= {{
      color: 'transparent',
      backgroundColor:'transparent',
    }}
  />
);

export default class Dreams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      journals: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/journals/userToken', {
      headers:{
        authorization: `bearer ${Auth.getToken()}`
      }
    })
    .then((res) => {
      this.setState({
        journals: res.data
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.journals.map((journal) => {
          return <Card>
          <CardTitle title={journal.entryTitle} subtitle={journal.dreamDate}/>
            <CardText>
            {journal.description}
            </CardText>
          </Card>
        }

        )}
        <Link to="/NewDream">
          <FloatingActionButton className="fab">
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    );
  }
}
