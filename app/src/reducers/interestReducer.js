const defaultProps = {
    allInterests:[
        'Soccer', 'Basketball', 'Football', 'Baseball', 'Hockey', 
          'Beer', 'Wine', 'Tequila', 'Vodka', 'Whiskey', 'Shopping', 'Shoes', 'Style',
          'Country', 'Hiphop', 'RnB', 'Jazz', 'EDM', 'Classical', 'Rock', 
          'Java', 'C', 'Node', 'Ruby', 'Javascript', 'Photography'
        ],
    selectedInterests: []
};

export default function reducer(state = defaultProps, action) {
  switch (action.type) {
    case 'TOGGLE_INTEREST': {
        const interests = this.defaultProps.selectedInterests
        if(interests.indexOf(action.payload) === -1){
            interests.concat(action.payload)
        } else {
            interests.splice(interests.indexOf(action.payload), 1)
        }
      return { ...state,
        selectedInterests: removedInterest
      };
    }
  }
  return state;
}
