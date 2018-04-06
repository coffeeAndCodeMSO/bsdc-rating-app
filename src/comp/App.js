import React, { Component} from 'react'
import Counter from './Counter.js'
import style from '../css/App.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={style.body}>
          Hello to the World!
        </h1>
      </div>
    )
  }
}
