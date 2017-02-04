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
import LoginBackground from './loginBackground'
import {saveProfile, saveToken} from '../actions/loginActions'

import './App.css';

@connect(store => ({
  mounted: store.app.mounted,
}))
class App extends Component {
  componentWillMount() {
    if(!this.lock) {
      this.lock = new AuthService(keys.keys.AUTH0_CLIENT_ID, keys.keys.AUTH0_DOMAIN);
    } 
  }

  componentDidMount() {
    if(this.lock.loggedIn()) {
      this.props.dispatch(tester())
      this.props.dispatch(saveProfile(this.lock.getProfile()))
      this.props.dispatch(saveToken(this.lock.getToken()))
    }
  }

  render() {
      if(this.lock.loggedIn()) {
        //this.lock.logout();
        return <ChatBody lock={this.lock}/> 
      } else {
        return (<LoginBackground onload={this.lock.login()} lock={this.lock}/>);
      } 
  }
}

export default App;
