import React, { Component } from 'react';
import { Menu, Comment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setRoom } from '../../actions/chatActions';
import { dismount } from '../../actions/appActions';

@connect(store => ({
  lock: store.login.lock,
  roomname: store.chat.roomname,
  picture: store.login.picture,
  auth_info: store.login,
}))
class ChatMenu extends Component {

  componentDidlMount() {
    this.props.dispatch({ type: 'server/connected', data: this.props.auth_info });
  }

  handleMenuClick(e, color) {
    e.preventDefault();
    this.props.dispatch(setRoom(color));
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.lock.logout();
    this.props.dispatch(dismount());
  }

  render() {
    const room = this.props.roomname;
    return (
      <Menu className="safe-zone navigation-menu" size="large" pointing secondary>
        <Menu.Item
          name="Random Room"
          active={room === 'red'}
          color={(room === 'red') ? 'red' : 'black'}
          onClick={e => this.handleMenuClick(e, 'red')}
        />
        <Menu.Item
          name="Nearest Users"
          active={room === 'blue'}
          color={(room === 'blue') ? 'blue' : 'black'}
          onClick={e => this.handleMenuClick(e, 'blue')}
        />
        <Menu.Item
          name="Similar Users"
          active={room === 'teal'}
          color={(room === 'teal') ? 'teal' : 'black'}
          onClick={e => this.handleMenuClick(e, 'teal')}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button basic color="black" onClick={e => this.handleLogout(e)}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
        <Comment>
          <Comment.Avatar src={this.props.picture} />
        </Comment>
      </Menu>
    );
  }
}

export default ChatMenu;
