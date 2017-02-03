
export function togModal(bool) {
  return {
    type: 'TOGGLE_MODAL',
    payload: bool,
  };
}

export function togMapModal(bool) {
  return {
    type: 'TOGGLE_MAP_MODAL',
    payload: bool,
  };
}
