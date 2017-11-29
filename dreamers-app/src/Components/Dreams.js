import React, { Component } from 'react';
import {Form, FormControl, FormGroup} from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './log.css'
const logStyle = {
  height: '20rem',
  margin: '0 auto',
  width: 'innerWidth',
  paddingRight: '0.5rem'
}
export default class Home extends Component {
  render (){
    return (
      <div>
      <FloatingActionButton className="fab">
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
  }
}
