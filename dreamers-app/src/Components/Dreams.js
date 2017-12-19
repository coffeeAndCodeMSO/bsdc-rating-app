import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardActions, CardTitle, CardText, FlatButton, FloatingActionButton} from 'material-ui';


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
