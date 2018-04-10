import React, { Component} from 'react'
import Counter from './Counter.js'
import Header from './Header.js'
import Main from './Main.js'
import style from '../css/App.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.body}>
        <Header />
        <Main />
      </div>
    )
  }
}
