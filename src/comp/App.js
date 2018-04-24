import React, { Component} from 'react'
import Counter from './Counter.js'
import Header from './Header.js'
import Main from './Main.js'

const styles = {
  wrapper : {
    display :'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'blue',
    fontFamily: 'Gugi'
  },
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links : [
        {
          to: `signup`,
          text: `Signup`
        },
        {
          to: `login`,
          text: `Login`
        },
        {
          to: `/`,
          text: `Home`
        }
      ]
    }
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <Header links={this.state.links} />
        <Main />
      </div>
    )
  }
}
