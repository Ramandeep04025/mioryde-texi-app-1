import { LOGOUT_LOADER } from "../constant/ReduxConstant";

const initialState = {
    logoutLoader: {
        loader: false
    },
};

const LogOutLoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_LOADER:
            return Object.assign({}, state, {
                logoutLoader: action.payload,
            });
        default:
            return state;
    }
}

export default LogOutLoaderReducer;