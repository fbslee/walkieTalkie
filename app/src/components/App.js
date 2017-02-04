import React, { PropTypes, Component } from 'react';
import { Router } from 'react-router';
import axios from 'axios'
import {connect} from 'react-redux'

import ChatBody from './chats/ChatBody';
import LoginSignupView from './login/LoginSignupView';
import ViewNavBar from './topBar/ViewNavbar';
import Login2 from './login2/Login';
import Auth0Lock from 'auth0-lock';
import AuthService from '../utils/AuthService'
import keys from '../../../keys'
import {mountApp, userLogin, userLogout, authLogin} from '../actions/loginActions'

@connect(store => ({
  userId: store.login.userId,
  name: store.login.name,
  logged_in: store.login.logged_in,
  mounted: store.login.mounted,
  userProfile: store.userProfile
}))

class App extends Component {

  // componentWillMount() {
  //   axios.get('/checkSession').then((res) => {
  //     if (res.data.id) {
  //       console.log('AXIOS: WE HAVE AN ID D: !');
  //       axios.post('/exitChat', { id: this.props.userId }).then((response) => {
  //         console.log(response);
  //       });
  //       axios.post('/logout', { id: this.props.userId }).then((response) => {
  //         console.log(response);
  //       });
  //       console.log('AXIOS: GOT SESSION ID!');
  //     // this.props.dispatch(userLogin(res))
  //     } else {
  //       console.log('AXIOS: NO ID D: !');
  //       this.props.dispatch(mountApp());
  //     }
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  componentWillMount(){
    this.lock = new AuthService(keys.keys.AUTH0_CLIENT_ID, keys.keys.AUTH0_DOMAIN)
  }
  handleUserSignupLogin(res) {
    this.props.dispatch(userLogin(res));
  }

  handleUserAuthLogin(res) {
    this.props.dispatch(authLogin(res));
  }

  render() {
    const token = this.lock.loggedIn()
    const navBarProps = {
      userId: this.props.userId,
    };

    const Logged = () => {
      const getProfile = this.lock.getProfile()
      // this.handleUserAuthLogin({...getProfile})
      console.log(getProfile)
    }
    const notLogged = () => {
      this.lock.login()
    }

    const loginProps = {
      userSignupLogin: ::this.handleUserSignupLogin,
    };

    const Login = () =>{
      if(token){
        return(
          <ChatBody onload={Logged()}/>
        )
      } else {
        return(
          <ChatBody onload={notLogged()}/>
        )
      }
    }
    const Chat = <ChatBody />;

    if (this.props.mounted) {
      return (
        <div>
          <ViewNavBar {...navBarProps} />
          {Login()}
        </div>
      );
    }
    return <ChatBody onload={notLogged()}/>;
  }
}

export default App;
