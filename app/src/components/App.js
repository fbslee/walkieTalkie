import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthService from '../utils/AuthService';
import keys from '../../../keys';

import LoginBackground from './loginBackground';
import Chat from './chatComponents/Chat';

import { setProfile, setToken } from '../actions/loginActions';
import { mount } from '../actions/appActions';

import './App.css';

@connect(store => ({
  mounted: store.app.mounted,
}))
class App extends Component {

  componentWillMount() {
    if (!this.lock) {
      this.lock = new AuthService(keys.keys.AUTH0_CLIENT_ID, keys.keys.AUTH0_DOMAIN);
    }
  }

  componentDidMount() {
    if (this.lock.loggedIn()) {
      this.props.dispatch(mount());
      this.props.dispatch(setProfile(this.lock.getProfile()));
      this.props.dispatch(setToken(this.lock.getToken()));
    }
  }

  render() {
    if (this.lock.loggedIn()) {
      return <Chat />;
    }
    return (<LoginBackground onload={this.lock.login()} lock={this.lock} />);
  }
}

export default App;
