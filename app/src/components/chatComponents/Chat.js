import React, { Component } from 'react';
import { Segment, Input, Divider } from 'semantic-ui-react';

import ChatMenu from './ChatMenu';
import ChatTop from './ChatTop';

import '../App.css';

class Chat extends Component {

  render() {

    return (
      <div className="safe-zone">
        <ChatMenu />

        <Segment color="red" padded>
          <ChatTop />
          <Divider hidden fitted />
          <Input
            action={{ color: 'teal', labelPosition: 'right', icon: 'send', content: 'Send' }} 
            fluid placeholder="Search..." 
          />
        </Segment>
      </div>

    );
  }
}

export default Chat;
