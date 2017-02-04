export function selectInterest(interest) {
  return {
    type: 'SELECT_INTEREST',
    payload: interest,
  };
}