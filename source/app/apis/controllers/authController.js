import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthServices from "../services/authServices";
import { setLocation, setUserData } from "../../../redux/action/user";
import { store } from "../../../redux/store";
import { Toaster } from "../../../helpers/toaster";
import { navigate } from "../../../../App";
import { setLogoutLoader } from "../../../redux/action/logout";
import { signOut } from "../../view/auth/socialLogins/google";
import { setIsDealerMemberShipActive } from "../../../redux/action/dealer/userListFilters";

const login = async (data) => {
    let post = {
        email: data.email,
        password: data.password,
        device_id: "123456",
        device_type: "android",
        device_name: "Carzino",
        fcm_token: "Carzino"
    };
    let response = await AuthServices.postLoginDetail(post);
    if (response && response.status) {
        setUpLogin(response.user);
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const googleLogin = async (data) => {
    let post = {
        id: data && data.id ? data.id : null,
        given_name: data && data.givenName ? data.givenName : null,
        family_name: data && data.familyName ? data.familyName : null,
        email: data && data.email ? data.email : null,
        picture: data && data.photo ? data.photo : null,
        device_id: "123456",
        device_type: "android",
        device_name: "Carzino",
        fcm_token: "Carzino"
    };
    let response = await AuthServices.googleLogin(post);
    if (response && response.status) {
        setUpLogin(response.user);
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const setUpLogin = async (user) => {
    // await AsyncStorage.setItem('SET_USER_DATA', JSON.stringify(user));
    await store.dispatch(setUserData(user));
    return user;
};

// const getLoginUser = async () => {
//     let user = await AsyncStorage.getItem('SET_USER_DATA');
//     if (user) {
//         user = user ? JSON.parse(user) : {};
//         store.dispatch(setUserData(user));
//         return user && user !== null && user.id ? user : null;
//     } else {
//         return null;
//     }
// };

const setlogoutLoader = async (data) => {
    await store.dispatch(setLogoutLoader(data))
    return data;
};


const forgotPassword = async (data) => {
    let post = {
        email: data.email,
    };
    let response = await AuthServices.postForgotPassword(post);
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const resetPassword = async (data) => {
    let post = {
        new_password: data && data.password ? data.password : null,
        confirm_password: data && data.confirmPassword ? data.confirmPassword : null,
    };
    token = data && data.token ? data.token : null
    let response = await AuthServices.postResetPassword(post, token);
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const postResendOtp = async (token) => {
    token = token ? token : null
    let response = await AuthServices.postResendOtp(token);
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const forgotVerifyOtp = async (data, token) => {
    let post = {
        otp: data.otp
    };
    let response = await AuthServices.postResetPassword(post, token);
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const changePassword = async (data) => {
    let post = {
        old_password: data && data.oldPassword ? data.oldPassword : null,
        new_password: data && data.newPassword ? data.newPassword : null,
    };

    let response = await AuthServices.changePassword(post);
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const userSignUp = async (data) => {
    const post = {
        name: data && data.name ? data.name : '',
        email: data && data.email ? data.email : '',
        phonenumber: data && data.number ? data.number : '',
        password: data && data.password ? data.password : '',
        zipcode: data && data.address && data.address.zip ? data.address.zip : '',
        address_1: data && data.address && data.address.address ? data.address.address : '',
        device_id: "",
        device_type: "",
        device_name: "",
        fcm_token: ""
    }
    let response = await AuthServices.userSignUp(post);
    if (response && response.status) {
        return response
    }
    else {
        new Toaster().error(response.message);
        return null
    }
};


const dealerSignUp = async (data) => {
    const post = {
        first_name: data.firstName,
        last_name: data.lastName ? data.lastName : null,
        dealership_name: data.dealership,
        email: data.email,
        address: data && data.location && data.location.address ? data.location.address : '',
        city_id: data && data.location && data.location.city_id ? data.location.city_id : '',
        state_id: data && data.location && data.location.state_id ? data.location.state_id : '',
        zip: data && data.location && data.location.zip ? data.location.zip : '',
        location: data && data.location && data.location.location ? data.location.location : '',
        longitude: data && data.location && data.location.longitude ? data.location.longitude : '',
        latitude: data && data.location && data.location.latitude ? data.location.latitude : '',
        phonenumber: data.phoneNumber,
        website_url: "https://development.carzino.com",
        xml_url: data.xml_url,
        crm_use: data.crm_name,
        crm_site: data.crm_site,
        crm_email: data.crm_email,
        alert_email: data.alert_email,
        message: data.message,
        device_id: "",
        device_type: "",
        device_name: "",
        fcm_token: ""
    }
    let response = await AuthServices.dealerSignUp(post);
    if (response && response.status) {
        return response
    }
    else {
        new Toaster().error(response.message);
        return null
    }
};


const postForgotVerifyOtp = async (data) => {
    const post = {
        otp: data && data.otp ? data.otp : null
    }
    token = data && data.token ? data.token : null
    let response = await AuthServices.postForgotVerifyOtp(post, token);
    if (response && response.status) {
        return response
    }
    else {
        new Toaster().error(response.message);
        return null
    }
};

const logoutUser = async () => {
    let response = await AuthServices.postLogOut();
    if (response && response.status) {
        new Toaster().success('Logout Successfully');
        await store.dispatch(setUserData({}));
        await AsyncStorage.removeItem('SET_USER_DATA');
        await store.dispatch(setLocation({}));
        await AsyncStorage.removeItem('SET_LOCATION');
        await store.dispatch(setIsDealerMemberShipActive(null));
        await signOut();
        navigate('AppStack', null, 1);
        return response;
    } else {
        return null;
    }
};

const deleteAccountSeller = async () => {
    let response = await AuthServices.deleteAccountSeller();
    if (response && response.status) {
        return response
    } else {
        new Toaster().error(response.message);
        return null
    }
};


const AuthController = {
    login,
    googleLogin,
    setUpLogin,
    // getLoginUser,
    forgotPassword,
    resetPassword,
    forgotVerifyOtp,
    userSignUp,
    dealerSignUp,
    postForgotVerifyOtp,
    postResendOtp,
    logoutUser,
    changePassword,
    setlogoutLoader,
    deleteAccountSeller
};

export default AuthController;
