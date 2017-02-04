export function mount() {
  return {
    type: 'APP_MOUNTED',
    payload: true,
  };
}

export function dismount() {
  return {
    type: 'APP_DISMOUNT',
    payload: false,
  };
}
