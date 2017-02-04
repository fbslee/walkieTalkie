import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' 

import App from './components/App'
import store from './store'
import {browserHistory} from 'react-router'

import Semantic from 'semantic-ui-css/semantic.css';
import './stylesheet.css';

const app = document.getElementById('App')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, app)

