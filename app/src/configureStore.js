import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reduxUnhandledAction from 'redux-unhandled-action';

import DevTools from './containers/DevTools';

import reducer from './reducers';

const callback = action => console.error(`${action} didn't lead to creation of a new state object`);

const plugins = [
  promise(),
  thunk,
  logger(),
  reduxUnhandledAction(callback),
];

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(...plugins),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

  return store;
}
