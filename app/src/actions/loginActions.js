export function saveProfile(profile) {
  return {
    type: 'SAVE_PROFILE',
    payload: profile,
  };
}

export function saveToken(token){
    return{
        type: 'SAVE_TOKEN',
        payload: token
    }
}