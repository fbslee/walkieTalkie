import React, { Component } from 'react';
import { Menu, Comment } from 'semantic-ui-react';

class ChatMenu extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="safe-zone" size="large" pointing secondary>
        <Menu.Item
          name="Random Room"
          active={activeItem === 'home'}
          color={'red'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Nearest Users"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Similar Users"
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
        <Comment>
          <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Comment>
      </Menu>
    );
  }
}

export default ChatMenu;