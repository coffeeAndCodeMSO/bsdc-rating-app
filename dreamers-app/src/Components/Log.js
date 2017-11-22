import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

const logControlStyle = {
  height: '20rem',
  margin: '0 auto',
  width: '80%',
  paddingRight: '0.5rem'
}

export default class Log extends Component {
  render (){
    return (
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
          <FormControl style={logControlStyle} type="text" placeholder=" " />
        </FormGroup>
            {' '}
        <Button type="submit">
            Submit & Save
        </Button>
      </Form>
    )
  }
}
