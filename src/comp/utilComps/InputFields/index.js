import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

/**
*@prop {func} validator @arg {InputFields.state} @returns {boolean}
* * * checks whether or not the field data is okay for submission
*
*@prop {Array<Object<String>>} fields -
* * * Defines what fields will be displayed and controlled
*/

export default class InputFields extends Component {
  constructor(props) {
    super(props)
    this.state={}

    props.fields.forEach(f => this.state[f.name] = '')

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.validator(this.state)) {
      // TODO: Hook up redux action to submit form data to the user api
    }
  }

  render() {
    return(
      <form className="InputFields" onSubmit={this.onSubmit}>
        {
          this.props.fields.map(f => (
            <input
              key={f.name}
              className={f.class || "InputFieldDefault"}
              type={f.type || "text"}
              name={f.name}
              value={this.state[f.name]}
              onChange={this.onChange}
            />
          ))
        }
      </form>
    )
  }
}

InputFields.propTypes = {
  validator: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
}
