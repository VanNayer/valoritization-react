import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger';

import App from './src/components/App.jsx'
import valoritizationApp from './src/reducers/index.jsx'
import {addTask} from './src/actions/actions.jsx'

let store = createStore(
  valoritizationApp, //
  {}, // load matrix from server answer.
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware() // middleware that logs actions
))

retrieved_tasks.forEach((task) => {
  store.dispatch(addTask(task.id, task.title, task.value, task.cost, task.description, task.completed))
})

require('./src/stylesheets/main.scss');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
