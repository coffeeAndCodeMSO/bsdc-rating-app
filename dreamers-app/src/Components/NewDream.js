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
      colors:''
    }
  };
  onChange = () => {
    this.setState({
      entryTitle: document.getElementById("title").value,
      description: document.getElementById("description").value,
      dreamDate: document.getElementById("date").value
    })
  }

  onColor = (tag) => {
    var self = this;
    switch(tag){
      case "Lucid":
        //set colors for Lucid tag
        self.props.changeColors({
          color1: '#029C62', //greenish
          color2: '#2C029C'//purplish
        });
        break;
      case "Nightmare":
        self.props.changeColors({
          color1: '#9C022E', //dark red
          color2: '#000000' //black
        });
        break;
      case "Epic":
        self.props.changeColors({
          color1: '#21254D',//darkish blue
          color2: '#92D7D1'//aqua
        });
        break;
      case "Recurring":
        self.props.changeColors({
          color1: '#271063',//purplish
          color2: '#A8E5F3' //bluish
        });
        break;
      case "Adult":
        self.props.changeColors({
          color1: '#372C3E',//darkslategray
          color2: '#ADACAD' //purplish
        });
        break;
    }
  }

  onSubmit= () => {
    axios.post('http://localhost:5000/api/journals/userToken',{
                entryTitle: this.state.entryTitle,
                description: this.state.description,
                dreamDate: this.state.dreamDate,
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
        <TextField
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
         onClick={() => this.onColor("Lucid")}
       /><Checkbox
         label="Nightmare"
         style={styles.checkbox}
         onClick={() => this.onColor("Nightmare")}
       /><Checkbox
         label="Epic"
         style={styles.checkbox}
         onClick={() => this.onColor("Epic")}
       /><Checkbox
         label="Recurring"
         style={styles.checkbox}
         onClick={() => this.onColor("Recurring")}
       /><Checkbox
         label="Adult"
         style={styles.checkbox}
         onClick={() => this.onColor("Adult")}
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
