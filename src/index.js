import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import App from './comp/App/index'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
