const defaultProps = {
  userId: null,
  name: null
}

export default function reducer(state = defaultProps, action) {
  switch (action.type) {

    case 'SET_USER': {
      return {...state, userID: action.payload}
    }
  }

  return state
}