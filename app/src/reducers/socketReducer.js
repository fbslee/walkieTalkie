const defaultProps = {
  messages: [],
  currentRoom: [],
  socketId: '',
};
export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'REQUEST_INFO_IO': {
      return { ...state,
        socketId: action.payload,
      };
    }
    case 'INIT_CHAT_IO': {
      const temp = state.currentRoom.slice();
      return { ...state,
        currentRoom: temp.push(action.payload),
      };
    }
    case 'UPDATE_ROOM_IO': {
      return { ...state,
        currentRoom: action.payload,
      };
    }
    default:
      return state;
  }
}
