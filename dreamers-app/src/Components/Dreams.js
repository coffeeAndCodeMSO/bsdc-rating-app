import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './Log.css'

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
