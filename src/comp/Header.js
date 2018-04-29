import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  header : {
    position: 'absolute',
    top:'0px',
    right: '0px',
    left: '0px',
    width : '100%',
    backgroundColor: '#324a5f',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingLeft: '2rem'
  },
  headerText : {
    color: 'white'
  },
  linkWrapper : {
    marginTop: '0.25rem'
  },
  linkStyle : {
    textDecoration: `none`,
    color: `white`,
    backgroundColor: `#324a5f`,
    padding: `0.25rem`
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.header}>
        <h1 style={styles.headerText} >
          Happiness Meter
        </h1>
        <div style={styles.linkWrapper}>
          {this.props.links.map((link, i) =>
            <Link
              style = {styles.linkStyle}
              to={link.to}
              key={i}
            >
              {link.text}
            </Link>
          )}
        </div>
      </div>
    )
  }
}
