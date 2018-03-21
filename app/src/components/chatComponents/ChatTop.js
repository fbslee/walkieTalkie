import React, { Component } from 'react';
import { Grid, Segment, Comment } from 'semantic-ui-react';

import ChatMsg from './ChatMsg';
import Roomate from './Roomate';
import '../App.css';

class ChatTop extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Roomate />
          <Roomate />
          <Roomate />
          <Roomate />
          <Roomate />
          <Roomate />
          <Roomate />
        </Grid.Row>
        <Grid.Row stretched columns={1}>
          <Grid.Column stretched>
            <Segment padded className="chat-message-area">
              <Comment.Group>
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
                <ChatMsg />
              </Comment.Group>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ChatTop;