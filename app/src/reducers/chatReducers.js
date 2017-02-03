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
  }

  return state
}