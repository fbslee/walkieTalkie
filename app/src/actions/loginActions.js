
export function setName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name
  }
}

export function setUserId(id) {
  return {
    type: 'SET_USER_ID',
    payload: id
  }
}

export function userLogin(data) {
  return {
    type: 'USER_LOGIN_SUCCESS',
    payload: data
  }
}

export function userLogout() {
  return {
    type: 'USER_LOGOUT_SUCCESS',
    payload: false
  }
}

export function mountApp() {
  return {
    type: 'APP_MOUNTED',
    payload: true
  }
}


