const defaultProps = {
  userId: null,
  name: null,
  logged_in: false,
  mounted: false,
  userProfile: {},
}

export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'SET_USER_NAME': {
      return {...state, 
        name: action.payload
      }
    }
    case 'SET_USER_ID': {
      return {...state, 
        userID: action.payload
      }
    }
    case 'USER_LOGIN_SUCCESS': {
      return {...state,
        mounted: true, 
        userId: action.payload.id,
        name: action.payload.firstname,
        logged_in: true
      }
    }
    case 'USER_LOGOUT_SUCCESS': {
      return {...state, 
        userId: null,
        name: null,
        logged_in: false
      }
    }
    case 'APP_MOUNTED': {
      return {...state,
        mounted: action.payload  
      }
    }
    case 'AUTH0_LOGIN_SUCCESS': {
      return {...state,
        userProfile: action.payload,
        logged_in: true
      }
    }
  }

  return state
}