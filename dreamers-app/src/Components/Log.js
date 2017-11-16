import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

const logStyle = {
  height: '20rem',
  margin: '0 auto',
  width: '80%',
  paddingRight: '0.5rem'
}

const formInstance = (
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
        Submit & Save
    </Button>
  </Form>
);

export default class Log extends Component {
  render (){
    return (formInstance)
  }
}
