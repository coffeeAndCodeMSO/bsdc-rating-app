import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardActions, CardTitle, CardText, FlatButton, FloatingActionButton} from 'material-ui';
import { Link } from 'react-router-dom'

export default class Dreams extends React.Component {

  render() {
    return (
      <div>
      <Card>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
        <CardText >
        Dream
        </CardText>
        <CardActions>
          <FlatButton label="button" />
        </CardActions>
      </Card>
      <Link to="/NewDream">
      <FloatingActionButton className="fab">
        <ContentAdd />
      </FloatingActionButton>
    </Link>
    </div>
    );
  }
}
