import React, { PropTypes, Component } from 'react';
import { Router } from 'react-router';
import axios from 'axios'
import {connect} from 'react-redux'
import Auth0Lock from 'auth0-lock';
import AuthService from '../utils/AuthService'

import ChatBody from './chats/ChatBody';
import LoginSignupView from './login/LoginSignupView';
import ViewNavBar from './topBar/ViewNavbar';
import Login2 from './login2/Login';
import keys from '../../../keys'
import {mountApp, userLogin, userLogout} from '../actions/loginActions'
import { chatExit } from '../actions/chatActions';

@connect(store => ({
  userId: store.login.userId,
  name: store.login.name,
  logged_in: store.login.logged_in,
  mounted: store.login.mounted,
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

    const loginProps = {
      userSignupLogin: ::this.handleUserSignupLogin,
    };

<<<<<<< HEAD
    const Login = () =>{
      if(this.props.logged_in){
        return(
          <ChatBody />
        )
      } else {
        return(
          <ChatBody onload={lock.login()}/>
        )
      }
    }
    const Chat = <ChatBody />;
=======
    const login = <LoginSignupView {...loginProps} />;
    const chatBody = <ChatBody />;
>>>>>>> [feat] redux implementation

    if (this.props.mounted) {
      return (
        <div>
          <ViewNavBar {...navBarProps} />
<<<<<<< HEAD
          {Login()}
=======
          {(this.props.logged_in) ? chatBody : login}
>>>>>>> [feat] redux implementation
        </div>
      );
    }
    return null;
  }
}

export default App;
