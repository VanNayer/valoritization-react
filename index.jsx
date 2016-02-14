import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import valoritizationApp from './src/reducers/index.jsx'
import App from './src/components/App.jsx'

let store = createStore(valoritizationApp)
require('./src/stylesheets/main.scss');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
