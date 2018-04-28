import React, { Component } from 'react'
import InputFields from './utilComps/InputFields'

const fields = [
  {
    name: 'username',
  },
  {
    name: 'password'
  }
]

const validator = (stateObj) => {
  return true;
}

const Login = () => (
  <div className="Login">
    <InputFields fields={fields} validator={validator} />
  </div>
)

export default Login
