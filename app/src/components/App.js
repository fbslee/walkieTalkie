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
import {mountApp, userLogin, userLogout, authLogin} from '../actions/loginActions'
import { chatExit } from '../actions/chatActions';

import './App.css';

import { chatExit } from '../actions/chatActions';

@connect(store => ({

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

  handleUserAuthLogin(res) {
    this.props.dispatch(authLogin(res));
  }

  Logged() {
      const getProfile = this.lock.getProfile()
      // this.handleUserAuthLogin({...getProfile})
      console.log(getProfile)
  }



  render() {
    const token = this.lock.loggedIn()
    
    // const notLogged = () => {
    //   this.lock.login()
    // }
    // ( this.lock.loggedIn() )
    // ? <ChatBody onload={Logged()}/> 
    // : <ChatBody onload={notLogged()}/>


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

     if (this.props.mounted) {
      return (
        <div>
          <ViewNavBar {...navBarProps} />
          {Login}
        </div>
      );
    }
    return null;

  }
}

export default App;
