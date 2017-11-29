import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const textFieldStyle = () => (
  <div>
    <TextField
      hintText = "Dream Title"
    /><br />
  <br />
    <TextField
      hintText = "Type your dream here"
      multiLine = {true}
      rows = {2}
      rowsMax = {4}
    /><br />
  </div>
)

export default class Log extends Component {
  render (){
    return (
      <div>
        <TextField
          hintText = "Dream Title"
        /><br />
      <br />
        <TextField
          hintText = "Type your dream here"
          multiLine = {true}
          rows = {2}
          rowsMax = {4}
        /><br />
      </div>
    )
  }
}
