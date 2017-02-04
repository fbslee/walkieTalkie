import React, { Component } from 'react';

import Chat from './chatComponents/Chat';

class LoginBackground extends Component {
  render() {
    return (
      <div>
        <img src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Walkie-Talkie-icon.png" />
        <Chat />
      </div>
    );
  }
}

export default LoginBackground;
