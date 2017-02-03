import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import axios from 'axios'
import {connect} from 'react-redux'

import ChatBody from './chats/ChatBody'
import LoginSignupView from './login/LoginSignupView'
import ViewNavBar from './topBar/ViewNavbar'
import Login2 from './login2/Login'

import {mountApp, userLogin, userLogout} from '../actions/loginActions'

@connect(store => ({
  userId: store.login.userId,
  name: store.login.name,
  logged_in: store.login.logged_in,
  mounted: store.login.mounted,
}))
class App extends React.Component {

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

//===========================================================
//              Render
//===========================================================
  render() {
    const navBarProps = {
      userId: this.props.userId,
    };

    const loginProps = {
      userSignupLogin: ::this.handleUserSignupLogin,
    };

    const Login = <LoginSignupView {...loginProps} />;
    const Chat = <ChatBody />;

    if (this.props.mounted) {
      return (
        <div>
          <ViewNavBar {...navBarProps} />
          {(this.props.logged_in) ? Chat : Login}
        </div>
      );
    }
    return null;
  }
}

export default App;
