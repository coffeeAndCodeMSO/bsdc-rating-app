import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HappySwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        {this.props.value}
      </p>
    )
  }
}

HappySwitch.propTypes = {
  value: PropTypes.number.isRequired
}
