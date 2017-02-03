import {applyMiddleware, createStore} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

/*
THUNK: Actions can return a FUNCTION instead of an OBJECT
ACTIONS can emit another ACTION!
*/

let plugins = [
  promise(),
  thunk,
  logger()
]

const middleware = applyMiddleware(...plugins)

export default createStore(reducer, middleware)
