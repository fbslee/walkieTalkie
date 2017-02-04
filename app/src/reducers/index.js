import { combineReducers } from 'redux';

import login from './loginReducer';
import chat from './chatReducer';
import nav from './navReducer';
import app from './appReducer';
import interest from './interestReducer';

export default combineReducers({
  login,
  chat,
  nav,
  app,
  interest
});
