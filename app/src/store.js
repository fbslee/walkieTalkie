import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

let plugins = [
  promise(),
  thunk,
  logger()
]

const middleware = applyMiddleware(...plugins)

export default createStore(reducer, middleware)
