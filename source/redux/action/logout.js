import { LOGOUT_LOADER } from "../constant/ReduxConstant";

export const setLogoutLoader = param => {
    return {
        type: LOGOUT_LOADER,
        payload: param,
    };
};