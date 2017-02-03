import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chatroom from './chatroom/Chatroom';
import ChatSelection from './ChatSelection';

import { chatExit, changeRoom, chatSelection } from '../../actions/chatActions';

@connect(store => ({
  roomId: store.chat.roomId,
  chat_view: store.chat.chat_view,
  roomSearch: store.chat.roomSearch,
  searchResults: store.chat.roomSearch,
  logged_in: store.login.logged_in,
}))
class ChatBody extends Component {

  vhandleRoomChange(newRoom) {
    this.props.dispatch(changeRoom(newRoom));
  }

  handleChatSelection(inputRoomId, searchOptions, result) {
    this.props.dispatch(ChatSelection(inputRoomId, searchOptions, result));
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

