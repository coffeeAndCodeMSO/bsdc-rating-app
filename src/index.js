import React from 'react'
import { render }from 'react-dom'
import App from './comp/App'
import counter from '../reducers'

const store = createStore(counter)

render(<App />, document.getElementById('root'))
