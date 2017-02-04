import { ROOM_DATA } from './storage';

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
      if (this.rooms.key.length < 10 && this.rooms.key.length > 0){
        assignedRoom = key;
        this.rooms.key.push(userInfo);
      }
    });

    if (assignedRoom === '') {
      return this.joinNewRoom(userInfo);
    }
    return assignedRoom;
  }

  joinNewRoom(info) {
    const room = ROOM_DATA[this.genRandInt(1, 99)];
    this.rooms.room = [info];
    return room;
  }

}

export default SocketStore;