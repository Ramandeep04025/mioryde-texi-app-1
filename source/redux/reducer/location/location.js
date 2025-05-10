import { SET_LOCATION } from "../../constant/ReduxConstant";

const initialState = {
  location: {
    lat: '',
    lng: '',
  },
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.payload,
      });
    default:
      return state;
  }
};

export default LocationReducer;
