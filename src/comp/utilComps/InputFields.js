import React, { Component } from 'react'

export default class InputFields extends Component {
  constructor(props) {
    super(props)
    this.state={}

    props.fields.forEach(f => {
        console.log(f)
        this.state[f.name] = ''
    })

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const { name, value } = e.target
    console.log(e.target.value, name)
    console.log(this.props.fields)
    this.setState({[name]: value})

    console.log(this.state)
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.validator(this.state)) {
      console.log(this.state);
    }
  }

  render() {
    return(
      <form className="InputsFields" onSubmit={this.onSubmit}>
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
