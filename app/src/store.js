import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reduxUnhandledAction from 'redux-unhandled-action';

import reducer from './reducers';

const callback = action => console.error(`${action} didn't lead to creation of a new state object`);
const plugins = [
  promise(),
  thunk,
  logger(),
  reduxUnhandledAction(callback),
];

const middleware = applyMiddleware(...plugins);

export default createStore(reducer, middleware);
