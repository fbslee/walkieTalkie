import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reduxUnhandledAction from 'redux-unhandled-action';
import createSocketIoMiddleware from 'redux-socket.io';

import reducer from './reducers';

import io from 'socket.io-client';
const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const callback = action => console.error(`${action} didn't lead to creation of a new state object`);
const plugins = [
  promise(),
  thunk,
  logger(),
  reduxUnhandledAction(callback),
  socketIoMiddleware,
];

const middleware = applyMiddleware(...plugins);
const store = createStore(reducer, middleware);

export default store;
