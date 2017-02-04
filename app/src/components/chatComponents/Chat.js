import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react'

class Chat extends Component {
  render() {
    return (
      <div>
    <Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We are fetching that content for you.
    </Message.Content>
  </Message>
  </div>
    );
  }
}

export default Chat;
