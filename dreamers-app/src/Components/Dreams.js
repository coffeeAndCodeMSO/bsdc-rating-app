import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


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
      <FloatingActionButton className="fab">
        <ContentAdd />
      </FloatingActionButton>
    </div>
    );
  }
}
