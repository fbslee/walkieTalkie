const defaultProps = {
  userId: null,
  name: null,
  logged_in: false,
  mounted: false,
}

export default function reducer(state = defaultProps, action) {
  switch (action.type) {

    case 'SET_USER_NAME': {
      return {...state, 
        name: action.payload
      }
      break
    }
    case 'SET_USER_ID': {
      return {...state, 
        userID: action.payload
      }
      break
    }
    case 'USER_LOGIN_SUCCESS': {
      return {...state, 
        userId: action.payload.userId,
        name: action.payload.name,
        logged_in: action.payload.logged_in
      }
      break
    }
    case 'APP_MOUNTED': {
      return {...props,
        mounted: action.payload  
      }
    }
  }

  return state
}