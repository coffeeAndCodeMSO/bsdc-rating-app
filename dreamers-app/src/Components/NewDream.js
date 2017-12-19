import React, { Component } from 'react';
import '../css/App.css'
import {Checkbox, DatePicker, TextField} from 'material-ui';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 5,
  },
};
export default class NewDream extends Component {

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

  render (){
    return (
      <div className='newDream'>
        <DatePicker mode="portrait"/>
        <TextField
          id="title"
          hintText="Dream Title"
          floatingLabelText="Give your dream a title"
        /><br />
        <TextField
          id="body"
          hintText="Dream Description"
          floatingLabelText="Give your dream a description"
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
      </div>
    );
  }
}
