const defaultProps = {
  roomname: '',
};

export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'EXAMPLE_REDUCER': {
      return { ...state,
        roomname: '',
      };
    }

    // default: {
    //   console.log('Reducer does not exist!');
    // }
  }
  return state;
}
