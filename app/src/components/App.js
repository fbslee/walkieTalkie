import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Auth0Lock from 'auth0-lock';
import AuthService from '../utils/AuthService';

import Chat from './chatComponents/Chat';
import ChatBody from './chats/ChatBody';
//import ViewNavBar from './topBar/ViewNavbar';
import keys from '../../../keys';
import {tester} from '../actions/appActions';

import './App.css';

@connect(store => ({
  mounted: store.app.mounted,
}))
class App extends Component {
  componentWillMount() {
    if(!this.myLock) {
      this.lock = new AuthService(keys.keys.AUTH0_CLIENT_ID, keys.keys.AUTH0_DOMAIN);
    } 
  }

  componentDidMount() {
    if(this.myLock.loggedIn()) {
      this.props.dispatch(tester())
    }
  }

  render() {

      if(this.lock.loggedIn()) {
        //this.lock.logout();
        return <ChatBody /> 
      } else {
        return (<ChatBody onload={this.lock.login()} lock={this.lock}/>);
      } 
  }
}

export default App;
