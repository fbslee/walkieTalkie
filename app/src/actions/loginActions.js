export function setProfile(profile) {
  return {
    type: 'SET_PROFILE',
    payload: profile,
  };
}

export function setToken(token) {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
}

export function setLock(lock) {
  return {
    type: 'SET_LOCK',
    payload: lock,
  };
}
