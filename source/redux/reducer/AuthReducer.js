// auth.js

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../constant/ReduxConstant";

  
  const initialState = {
    isAuthenticated: true,
    user: null,
    error: null,
  };
  
  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case LOGOUT:
        return initialState;
      default:
        return state;
    }
  };
  
  export default AuthReducer;