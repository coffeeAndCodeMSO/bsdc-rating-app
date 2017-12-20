import React, { Component } from 'react';
import '../css/App.css'
import {Checkbox, DatePicker, TextField, RaisedButton} from 'material-ui';
import axios from 'axios';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 5,
  },
};
export default class NewDream extends Component {

  constructor(props) {
    super(props)
    this.state = {
      entryTitle: "",
      description: "",
      dreamDate: ""
    }
  };

  clickHandler = () => {
    // first thing I did -> console.log("click");
    // then I gave the inputs some ids so I could grab them off the page
    // then -> console.log(document.getElementById("title").value);
    // then here ->  https://www.npmjs.com/package/axios
    // to get this ->
    // the route to add by user is missing, but that's ok ->
    // axios.post('http://localhost:5000/api/journals', {
    //   entryTitle: document.getElementById("title").value,
    //   description: document.getElementById("body").value
    // })
    // .then(function (response) {
    //   console.log(response);
    //   document.getElementById("title").value = '';
    //   document.getElementById("body").value = '';
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // got a cors error, so I added this to the backend server ->
    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });
    //  as well as bluebird to get rid of that promise error.
  }
  onChange = () => {
    this.setState({
      entryTitle: document.getElementById("title").value,
      description: document.getElementById("description").value,
      dreamDate: document.getElementById("date").value
    })
  }
  onSubmit= () => {
    axios.post('http://localhost:5000/api/journals/5a374f1b369fb113123cdc4d',{
                entryTitle: this.state.entryTitle,
                description: this.state.description,
                dreamDate: this.state.dreamDate
              })
         .then((response) => {console.log(response)})
  }
  render (){
    return (
      <form action="/Dreams" onSubmit={this.onSubmit}>
      <div className='newDream'>
        <DatePicker mode="portrait" hintText="Date" id= "date" onChange = {this.onChange}/>
        <TextField
          id="title"
          hintText="Dream Title"
          floatingLabelText="Give your dream a title"
          onChange ={this.onChange}
        /><br />
        <TextField
          id="description"
          hintText="Dream Description"
          floatingLabelText="Give your dream a description"
          onChange ={this.onChange}
          multiLine={true}
          rows={2}
          fullWidth={true}
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
         <RaisedButton type="submit" label="Save"/>
       </div>
      </div>
    </form>
    );
  }
}
