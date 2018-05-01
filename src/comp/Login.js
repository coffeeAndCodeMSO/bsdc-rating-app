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
    <div className="FunContent">
      <p>Fun Content here</p>
    </div>
    <InputFields fields={fields} validator={validator} formName={"Login"}/>
  </div>
)

export default Login
