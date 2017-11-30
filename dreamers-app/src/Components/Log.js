import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './log.css'
const logStyle = {
  height: '20rem',
  margin: '0 auto',
  width: '80%',
  paddingRight: '0.5rem'
}


export default class Log extends Component {
  render (){
    return (
      <div>
         <Form inline>
        <FormGroup controlId="formInlineTitle">
          <ControlLabel>Title</ControlLabel>
            {' '}
          <FormControl type="text" placeholder=" " />
          </FormGroup>
            {' '}
        <FormGroup controlId="formInlineDream">
          <ControlLabel>Dream</ControlLabel>
            {' '}
          <FormControl style={logStyle} type="text" placeholder=" " />
        </FormGroup>
            {' '}
        <Button type="submit">
            Save
        </Button>
      </Form>
      <FloatingActionButton className="fab" >
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
  }
}
