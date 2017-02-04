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
    case 'SELECT_INTEREST': {
        const addedInterest = this.defaultProps.selectedInterests
        addedInterest.concat(interest)
      return { ...state,
        selectedInterests: addedInterest
      };
    }
  }
  return state;
}
