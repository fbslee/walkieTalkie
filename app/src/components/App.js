import React, { PropTypes, Component } from 'react';
import { Router } from 'react-router';
import axios from 'axios'
import {connect} from 'react-redux'
import Auth0Lock from 'auth0-lock';
import AuthService from '../utils/AuthService'

import ChatBody from './chats/ChatBody';
import ViewNavBar from './topBar/ViewNavbar';
import keys from '../../../keys'

import {mountApp, userLogin, userLogout, authLogin} from '../actions/loginActions'

import { chatExit } from '../actions/chatActions';

//====================================
 import Chat from './chatComponents/Chat';
//===================================

import './App.css';

@connect(store => ({
  userId: store.login.userId,
  name: store.login.name,
  logged_in: store.login.logged_in,
  mounted: store.login.mounted,
  userProfile: store.userProfile,
  chat_view: store.chat.chat_view,
}))
class App extends Component {
  componentWillMount() {
    axios.get('/checkSession').then((res) => {
      if (res.data.id) {
        console.log('AXIOS: WE HAVE AN ID D: !');
        axios.post('/exitChat', { id: this.props.userId }).then((response) => {
          console.log(response);
        });
        axios.post('/logout', { id: this.props.userId }).then((response) => {
          console.log(response);
        });
        console.log('AXIOS: GOT SESSION ID!');
      // this.props.dispatch(userLogin(res))
      } else {
        console.log('AXIOS: NO ID D: !');
        this.props.dispatch(mountApp());
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  handleUserSignupLogin(res) {
    this.props.dispatch(userLogin(res));
  }

  handleUserAuthLogin(res) {
    this.props.dispatch(authLogin(res));
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
    const lock = new AuthService(keys.keys.AUTH0_CLIENT_ID, keys.keys.AUTH0_DOMAIN)

    const navBarProps = {
      userId: this.props.userId,
      chatExit: ::this.handleChatExit,
    };

    const Logged = () => {
      console.log('logged in')
    }
    const notLogged = () => {
      console.log('not logged in')
      lock.login()
      const getProfile = lock.getProfile()
      this.handleUserAuthLogin({...getProfile})
      console.log('user profile', getProfile)
    }

    const loginProps = {
      userSignupLogin: ::this.handleUserSignupLogin,
    };

    // const Login = () =>{
    //   if(this.props.logged_in){
    //     return(
    //       <ChatBody onload={Logged()}/>
    //     )
    //   } else {
    //     return(
    //       <ChatBody onload={notLogged()}/>
    //     )
    //   }
    // }

    //const Chat = <ChatBody />;

     if (this.props.mounted) {
      return (
        <div>
          <Chat />
   
        </div>
      );
    }
    return null;
  }
}

export default App;
