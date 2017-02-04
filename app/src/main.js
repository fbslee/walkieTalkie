
import 'semantic-ui-css/semantic.css';
import './stylesheet.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

const app = document.getElementById('App');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, app);

// import configureStore from './configureStore';
// import DevTools from './containers/DevTools';
// const store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <div>
//       <App />
//       <DevTools />
//     </div>
//   </Provider>, app)

