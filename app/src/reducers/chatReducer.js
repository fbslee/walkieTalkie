const defaultProps = {
 roomId: null,
 chat_view: false,
 roomSearch: null
}

export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'CHANGE_ROOM': {
      return {...state, 
        roomId: action.payload
      }
    }
    case 'CHANGE_EXIT': {
      return {...state, 
        roomId: action.payload,
        chat_view: null
      }
    }
    case 'CHAT_SELECT': {
      return {...state, 
        roomId: action.payload.inputRoomId,
        roomSearch: {
          'option' : action.payload.searchOptions, 
          'res' : action.payload.result
        },
        chat_view: true
      }
    }
  }
  return state
}

 