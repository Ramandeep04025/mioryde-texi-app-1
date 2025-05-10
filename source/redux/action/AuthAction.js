// actions.js

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../constant/ReduxConstant";

  
  export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });
  
  // export const login = (credentials) => {
  //   return (dispatch) => {
  //     dispatch(loginRequest());
  
  //     // Simulate an API call to authenticate the user
  //     setTimeout(() => {
  //       if (credentials.username === 'admin' && credentials.password === 'password') {
  //         const user = { username: credentials.username };
  //         dispatch(loginSuccess(user));
  //       } else {
  //         const error = 'Invalid username or password';
  //         dispatch(loginFailure(error));
  //       }
  //     }, 1000);
  //   };
  // };