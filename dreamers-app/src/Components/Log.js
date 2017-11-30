import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import './log.css'

const LogStyle = () => (
    <div>
        <TextField
          hintText="dream Title"
          floatingLabelText="dream title"
        /><br />
        <TextField
          hintText="dream description"
          floatingLabelText="dream description"
          multiLine={true}
          rows={2}
          fullWidth={true}
        /><br />
    </div>
);

export default class Log extends Component {
  render (){
    return (
      <div>
        <TextField
          hintText="Dream Title"
          floatingLabelText="Give your dream a title"
        /><br />
        <TextField
          hintText="Dream Description"
          floatingLabelText="Give your dream a description"
          multiLine={true}
          rows={2}
          fullWidth={true}
        /><br />
        <FloatingActionButton className="fab" >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
