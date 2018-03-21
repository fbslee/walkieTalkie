const defaultProps = {
  given_name: null,
  family_name: null,
  user_id: null,
  picture: null,
  lock: null,
};

export default function reducer(state = defaultProps, action) {
  switch (action.type) {

    case 'SET_PROFILE': {
      return { ...state,
        given_name: action.payload.given_name,
        family_name: action.payload.family_name,
        user_id: action.payload.identities[0].user_id,
        picture: action.payload.picture,
      };
    }
    case 'SET_TOKEN': {
      return { ...state,
        token: action.payload,
      };
    }
    case 'SET_LOCK': {
      return { ...state,
        lock: action.payload,
      };
    }
    default:
      return state;
  }
}
