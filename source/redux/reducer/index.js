import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./user";
import LogOutLoaderReducer from "./logoutLoader";
import LocationReducer from './location/location';

const appReducer = combineReducers({
  AuthReducer,
  UserReducer,
  LogOutLoaderReducer,
  LocationReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;