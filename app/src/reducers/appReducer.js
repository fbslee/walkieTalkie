const defaultProps = {
 mounted: false,
}

export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'APP_MOUNTED': {
      return {...state, 
        mounted: true
      }
    }
  }
  return state;
}