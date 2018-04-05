import React from 'react'
import Counter from './Counter.js'
import style from '../css/App.scss'
import { createStore } from 'redux'
import counter from '../reducers'

const store = createStore(counter)

const App = () =>
  <div>
    <h1 style={style.body}>
      Hello to the World!
    </h1>
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
  </div>

store.subscribe(App)

export default App
