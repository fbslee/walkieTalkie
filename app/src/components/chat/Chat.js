import React from 'react';

import Chatroom from './chatroom/Chatroom'
import ChatSelection from './ChatSelection'

const Chat = ({roomChange, userId, roomId, name, searchResults, selectRoom, chat_view}) => {
  let chatroomProps = {
    roomChange, userId, roomId, name, searchResults
  }

  let Chatroom = <Chatroom {...chatroomProps} />
  let ChatSelection = <ChatSelection selectRoom="selectRoom" />

  return (
    
    <div>
      chat_view ? {Chatroom} : {ChatSelection}
    </div>
  );
};

export default Chat