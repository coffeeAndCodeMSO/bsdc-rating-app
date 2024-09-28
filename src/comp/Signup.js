import React, { Component } from 'react'
import InputFields from './utilComps/InputFields'

const fields = [
  {
    name: 'username',
  },
  {
    name: 'email'
  },
  {
    name: 'password'
  },
  {
    name: 'passwordConf'
  }
]

const validator = (stateObj) => {
  return true;
}

const Signup = () => (
  <div className="Register">
    <InputFields fields={fields} validator={validator} formName="Sign Up" />
  </div>
)

export default Signup
