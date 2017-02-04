export function toggleInterest(interest) {
  return {
    type: 'TOGGLE_INTEREST',
    payload: interest,
  };
}