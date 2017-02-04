import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chatroom from './chatroom/Chatroom';
import ChatSelection from './chatSelection/ChatSelection';

import { chatExit, changeRoom, chatSelection } from '../../actions/chatActions';

@connect(store => ({
  
}))
class ChatBody extends Component {
  componentDidMount() {
    
  }

  handleRoomChange(newRoom) {
    this.props.dispatch(changeRoom(newRoom));
  }

  handleChatExit() {
    this.props.dispatch(chatExit());
  }

  handleChatSelection(inputRoomId, searchOptions, result) {
    this.props.dispatch(chatSelection(inputRoomId, searchOptions, result));
  }

  render() {
    return (
      <div>
        {
          (this.props.chat_view)
          ? <Chatroom />
          : <ChatSelection selectRoom={::this.handleChatSelection} />
        }
      </div>
    );
  }
}

export default ChatBody;

