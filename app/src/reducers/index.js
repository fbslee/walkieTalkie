import { combineReducers } from 'redux';

import login from './loginReducer';
import chat from './chatReducer';
import nav from './navReducer';

export default combineReducers({
  login,
  chat,
  nav,

});
