import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import ChatBody from './chats/ChatBody'
import LoginSignupView from './login/LoginSignupView'
import ViewNavBar from './topBar/ViewNavbar'

import {mountApp, userLogin, userLogout} from '../actions/loginActions'

@connect(store => {
  return {
    userId: store.login.userId,
    name: store.login.name,
    logged_in: store.login.logged_in,
    mounted: store.login.mounted
  }
})
class App extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   userId : null,
    //   name : null,

    //   login_signup_view : true,
    //   chat_view : false,
    //   mounted : false,

    //   roomId : null,
    //   roomSearch : null
    // }

    //this.componentWillMount = this.componentWillMount.bind(this);
    this.handleUserSignupLogin = this.handleUserSignupLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    // this.handleChatSelection = this.handleChatSelection.bind(this);
    // this.handleChatExit = this.handleChatExit.bind(this);
    // this.handleRoomChange = this.handleRoomChange.bind(this);
  }

//===========================================================
//              Top Bar Methods
//===========================================================
 handleUserLogout(){
   axios.post('/logout', {id :this.props.userId})
   .then(res => {
     this.props.dispatch(userLogout())
    //  this.setState({
    //    userId : null,
    //    name : null,
    //    login_signup_view : true,

    //    roomId : null,
    //    chat_view : false,
    //  })
   })
   .catch(err => {
     console.log(err);
   })
 }

//   handleChatExit(){
//    var self = this;
//    if (this.state.roomId) {
//     axios.post('/exitChat', {id : this.state.userId})
//     .then(res => {
//       self.setState({
//         chat_view : false,
//         roomId : null
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
//    }
//  }

//===========================================================
//              Login Methods
//===========================================================
 handleUserSignupLogin(res) {
   this.props.dispatch(userLogin(res))
 }

//===========================================================
//              Chatroom Methods
//===========================================================
//  handleRoomChange(newRoom) {
//    this.setState({
//      roomId : newRoom,
//    })
//  }

//===========================================================
//              ChatSelection Methods
//===========================================================
//  handleChatSelection(inputRoomId, searchOptions, result){
//    this.setState({
//      roomId : inputRoomId,
//      roomSearch : {'option' : searchOptions, 'res' : result},
//      chat_view : true
//    })
//  }

//===========================================================
//              Lifecycle Methods
//===========================================================
  //Gets called on page refresh
  componentWillMount(){
   axios.get('/checkSession').then(res => {
     
     if (res.data.id) {
       console.log('AXIOS: GOT SESSION ID!')
      this.props.dispatch(userLogin(res))
      // if (res.data.roomId) {

      //   console.log('AXIOS: ...AND A ROOMID!')
        
      //   // this.setState({
      //   //   mounted : true,
      //   //   userId : res.data.id,
      //   //   name : res.data.firstname,
      //   //   login_signup_view : false,

      //   //   roomId : res.data.roomId,
      //   //   chat_view : true

      //   // })
      // } else { 
      //   // console.log('AXIOS: BUT NO ROOMID D: !')
      //   // this.setState({
      //   //   mounted : true,
      //   //   userId : res.data.id,
      //   //   name : res.data.firstname,
      //   //   login_signup_view : false
      //   // })
      // }
     } else {
       console.log('AXIOS: NO ID D: !')
       this.props.dispatch(mountApp())
     }
   }).catch(err => {
     console.log(err)
   })
  }

//===========================================================
//              Render
//===========================================================
  render() {
    let navBarProps =  {
      logout : this.handleUserLogout,
      //home : this.handleChatExit,
      userId : this.props.userId
    }

    // let chatProps = {
    //   roomChange : this.handleRoomChange,
    //   userId : this.state.userId,
    //   roomId : this.state.roomId, 
    //   name : this.state.name,
    //   searchResults : this.state.roomSearch,
    //   selectRoom : this.handleChatSelection,
    //   chat_view :  this.state.chat_view
    // }

    let NavBar = <ViewNavBar {...navBarProps}/>
    let Login = <LoginSignupView userSignupLogin = {this.handleUserSignupLogin} />
    let Chat = <ChatBody />
    
    if (this.props.mounted) {
      console.log('RENDERING: MOUNTED!')
      return (
        <div>
          {NavBar}
          {(this.props.logged_in) ? Chat : Login}
        </div>
      )
    } else {
      console.log('RENDERING: NULL')
      return null;
    }
  }
}

export default App
