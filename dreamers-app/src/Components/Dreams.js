import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardActions, CardTitle, CardText, FlatButton, FloatingActionButton} from 'material-ui';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Dreams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dreams: []
    }
  }


  componentDidMount() {
    axios.get('http://localhost:5000/api/journals/5a374f1b369fb113123cdc4d')
         .then((res) => {
           console.log('res', res)
           console.log('state dreams', this.state.dreams)
           this.setState({
             dreams: res.data
           })
         })
  }

  render() {
    return (
      <div>
        {this.state.dreams.map((dream) => {
          return <Card>
          <CardTitle title={dream.entryTitle} subtitle={dream.dreamDate}/>
            <CardText>
            {dream.description}
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
