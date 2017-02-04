import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Auth0Lock from 'auth0-lock';
import AuthService from '../utils/AuthService';

import Chat from './chatComponents/Chat';
import ChatBody from './chats/ChatBody';
import ViewNavBar from './topBar/ViewNavbar';
import keys from '../../../keys';

import './App.css';

import { chatExit } from '../actions/chatActions';

//====================================
 import Chat from './chatComponents/Chat';
//===================================

import './App.css';

@connect(store => ({

}))
class App extends Component {
  componentWillMount() {
    this.lock = new AuthService(keys.keys.AUTH0_CLIENT_ID, keys.keys.AUTH0_DOMAIN);
  }

  Logged() {
      const getProfile = this.lock.getProfile()
      // this.handleUserAuthLogin({...getProfile})
      console.log(getProfile)
  }

  handleChatExit() {
    if (this.props.roomId) {
      axios.post('/exitChat', { id: this.props.userId })
    .then(() => {
      this.props.dispatch(chatExit());
    })
    .catch((err) => {
      console.log(err);
    });
    }
  }

  render() {
    console.log(this.lock.loggedIn())
    //return <ChatBody /> 
    //const token = this.lock.loggedIn()
    if(this.lock.loggedIn()) {
      return <ChatBody /> 
    } else {
      <ChatBody onload={this.lock.login()}/>
    }
  }
}

export default App;
