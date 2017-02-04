'https://randomuser.me/api/?inc=name,location,picture&results=200'

import io from 'socket.io-client';

class Bot {
  constructor(info, socket, letter) {
    this.given_name = info.name.first;
    this.family_name = info.name.last;
    this.picture = info.picture.medium;
    this.user_id = this._genRandInt(10000000000000000,99999999999999999);
    this.socket = io.connect('http://localhost:3000', 
        {resource: letter + '/socket.io', 
        'force new connection': true });
  }

  _genRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

export default Bot;