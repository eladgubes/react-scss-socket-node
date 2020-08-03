import authService from '../../service/authService'
import userService from '../../service/userService'


export function login(user) {
  return dispatch => {
    userService.login(user)
      .then(authUser => {
        dispatch({ type: 'LOG_IN', authUser });
      })
  }
}

export function logOut() {
  return dispatch => {
    userService.logout()
      .then(user => {
        dispatch({ type: 'LOG_OUT', user });
      })
  }
}

export function signUp(userDetails) {
  return dispatch => {
    userService.signup(userDetails)
      .then(user => {
        dispatch({ type: 'SIGN_UP', user });
      })
  }
}








