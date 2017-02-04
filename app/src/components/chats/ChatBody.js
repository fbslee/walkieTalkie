import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chatroom from './chatroom/Chatroom';
import ChatSelection from './chatSelection/ChatSelection';

@connect(store => ({
  
}))
class ChatBody extends Component {
  componentDidMount() {

  }

  handleRoomChange(newRoom) {
    
  }

  handleChatExit() {
  
  }

  handleChatSelection(inputRoomId, searchOptions, result) {
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

