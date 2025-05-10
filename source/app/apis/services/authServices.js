import Constant from "../constant";
import { mainWrapper } from "../main";

const AuthServices = {
    postLoginDetail,
    postForgotPassword,
    postResetPassword,
    postForgotVerifyOtp,
    userSignUp,
    postResendOtp,
    dealerSignUp,
    postLogOut,
    changePassword,
    deleteAccountSeller,
    googleLogin
};


function postLoginDetail(params) {
    return mainWrapper.post(Constant.host + "auth/login", params);
};


function userSignUp(params) {
    return mainWrapper.post(Constant.host + "auth/signup-customer", params);
};


function dealerSignUp(params) {
    return mainWrapper.post(Constant.host + "auth/signup-dealer", params);
};


function postForgotPassword(params) {
    return mainWrapper.post(Constant.host + "auth/forgot-password", params);
};


function postResetPassword(params, token) {
    return mainWrapper.post(Constant.host + `auth/recover-password/${token}`, params);
};


function postForgotVerifyOtp(params, token) {
    return mainWrapper.post(Constant.host + `auth/forgot-verify-otp/${token}`, params);
};


function postResendOtp(token) {
    return mainWrapper.post(Constant.host + `auth/forgot-resend-otp/${token}`);
};

function postLogOut() {
    return mainWrapper.post(Constant.host + `auth/logout`);
}

function changePassword(params) {
    return mainWrapper.put(Constant.host + `change-password`, params);
}

function deleteAccountSeller() {
    return mainWrapper._delete(Constant.host + `delete-account`);
}


function googleLogin(params) {
    return mainWrapper.post(Constant.host + `google-login`, params);
}





export default AuthServices;
