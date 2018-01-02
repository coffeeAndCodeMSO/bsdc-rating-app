import React, { Component } from 'react';
import '../css/App.css'
import {Checkbox, DatePicker, TextField, RaisedButton,TimePicker} from 'material-ui';
import axios from 'axios';
import Auth from '../modules/Auth';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 5,
    margin: 10
  }
};
export default class NewDream extends Component {

  constructor(props) {
    super(props)
    this.state = {
      entryTitle: "",
      description: "",
      dreamDate: "",
      dreamTime:""
    }
  };

  onChange = () => {
    this.setState({
      entryTitle: document.getElementById("title").value,
      description: document.getElementById("description").value,
      dreamDate: document.getElementById("date").value,
      dreamTime: document.getElementById("time").value
    })
  }
  onSubmit= () => {
    axios.post('http://localhost:5000/api/journals/userToken',{
                entryTitle: this.state.entryTitle,
                description: this.state.description,
                dreamDate: this.state.dreamDate,
                dreamTime: this.state.dreamTime
              }, {
                headers:{
                  authorization: `bearer ${Auth.getToken()}`
                }
              })
         .then((response) => {console.log(response)})
  }
  render (){
    return (
      <form action="/Dreams" onSubmit={this.onSubmit}>
      <div className='newDream'>
        <DatePicker
          mode="portrait"
          hintText="Date"
          id= "date"
          onChange = {this.onChange}
          style={{margin:10}}
          />
          <TimePicker
         format="ampm"
         hintText="What time is it?"
         id= "time"
         value={this.state.value12}
         onChange = {this.onChange}
         style={{margin:10}}
       /><TextField
          id="title"
          hintText="Dream Title"
          floatingLabelText="Give your dream a title"
          onChange ={this.onChange}
          style={{margin:10}}
        /><br />
      <TextField
          id="description"
          hintText="Dream Description"
          floatingLabelText="Give your dream a description"
          onChange ={this.onChange}
          multiLine={true}
          rows={2}
          fullWidth={true}
          style={{margin:10}}
        /><br />
      <div style={styles.block}>
       <Checkbox
         label="Lucid"
         style={styles.checkbox}
       /><Checkbox
         label="Nightmare"
         style={styles.checkbox}
       /><Checkbox
         label="Epic"
         style={styles.checkbox}
       /><Checkbox
         label="Recurring"
         style={styles.checkbox}
       /><Checkbox
         label="Adult"
         style={styles.checkbox}
       /></div>
     <div className="saveButton">
         <RaisedButton
           type="submit"
           label="Save"
           style={{margin:10}}
           />
       </div>
      </div>
    </form>
    );
  }
}
