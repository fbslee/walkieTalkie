const defaultProps = {
  mounted: false,
};

export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'APP_MOUNTED': {
      return { ...state,
        mounted: true,
      };
    }
    case 'APP_DISMOUNT': {
      return { ...state,
        mounted: false,
      };
    }
    default: {
      break;
    }
  }
  return state;
}
