const defaultProps = {
  show: false,
  showMap: false,
};

export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL': {
      return { ...state,
        show: !action.payload,
      };
    }
    case 'TOGGLE_MAP_MODAL': {
      return { ...state,
        show: !action.payload,
      };
    }
  }

  return state;
}
