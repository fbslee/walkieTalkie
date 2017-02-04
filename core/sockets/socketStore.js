const ROOM_DATA = require('./storage');
const chalk = require('chalk');

class SocketStore {
  constructor() {
    this.rooms = {};
  }

  genRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  findRoom(userInfo) {
    let assignedRoom = '';
    const roomNames = Object.keys(this.rooms);
    roomNames.forEach((key) => {
      if (this.rooms[key].length < 10 && this.rooms[key].length > 0) {
        assignedRoom = key;
        this.rooms[key].push(userInfo);
        
        let a = this.rooms[key].slice().unshift(key);
        console.log(chalk.red(this.rooms[key]));
      }
    });

    if (assignedRoom === '') {
      return this.joinNewRoom(userInfo);
    }
    return this.rooms[assignedRoom];
  }

  joinNewRoom(info) {
    let roomUniqueName = ROOM_DATA[this.genRandInt(1, 99)];
    this.rooms[roomUniqueName] = [info];
    var a = this.rooms[roomUniqueName].slice().unshift(roomUniqueName);
    return a;
  }

}

module.exports = SocketStore;