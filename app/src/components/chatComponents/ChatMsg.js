import React from 'react';
import { Comment } from 'semantic-ui-react';

const ChatMsg = () => {
  return (
    <Comment>
      <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Bob Joel</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default ChatMsg;