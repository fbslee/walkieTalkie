const defaultProps = {
  messages: [],
  currentRoom: [],
  socketId: '',
};
export default function reducer(state = defaultProps, action) {
  switch (action.type) {

    case 'MESSAGE_IO': {
      const temp = state.messages.slice();
      return { ...state,
        messages: temp.push(action.payload),
      };
    }
    case 'UPDATE_ROOM_IO': {
      return { ...state,
        currentRoom: action.payload,
      };
    }
    case 'REQUEST_INFO_IO': {
      return { ...state,
        socketId: action.payload,
      };
    }
    default:
      return state;
  }
}
