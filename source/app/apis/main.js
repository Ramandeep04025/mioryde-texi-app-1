import axios from "axios";
import Constant from "./constant";
import { store } from "../../redux/store";
import AuthController from "./controllers/authController";
// import AuthController from "./controllers/authController"; 

let cancelTokenSource = null;
export const mainWrapper = {
    get,
    post,
    put,
    _delete,
    getAxios,
    upload,
};

async function upload(url, params, callback) {
    handleLogs(url, params);
    try {
        initToken();
        let axiosConfig = {};
        if (callback) {
            axiosConfig = {
                onUploadProgress: (progressEvent) => {
                    let progress = Math.round(
                        (progressEvent.loaded / progressEvent.total) * 100
                    );
                    callback(progress);
                },
            };
        }
        let response = await axios.post(url, params, axiosConfig);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}


async function get(url, params = null) {
    handleLogs(url, params);
    try {
        initToken();
        let response = await axios.get(url, {
            params: params,
        });
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function post(url, params) {
    handleLogs(url, params);
    try {
        initToken();
        let response = await axios.post(url, params);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function put(url, params) {
    handleLogs(url, params);
    try {
        initToken();
        let response = await axios.put(url, params);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function _delete(url, params) {
    handleLogs(url, params);
    try {
        initToken();
        let response = await axios.delete(url, {
            data: params,
        });
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

async function getAxios(url, params = null) {
    handleLogs(url, params);

    if (cancelTokenSource) {
        cancelTokenSource.cancel();
    }

    cancelTokenSource = axios.CancelToken.source();
    try {
        let response = await axios.get(url, {
            cancelToken: cancelTokenSource.token,
            params: params,
        });

        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
}

function initToken() {
    let user = store.getState().UserReducer.user;
    let token =
        user && user.access && user.access.token
            ? `Bearer ` + user.access.token
            : null;
    // let token = `Bearer ` + 'LFboxWjqqcvfPg97BUGGtM56pfUcF7FkM8iWLEigduqPV3H2Rg0xfTvvulLAROlR';

    if (Constant.debug) {
        console.log("Token:", token);
    }

    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    }
}

function handleResponse(response) {
    if (Constant.debug) {
        console.log("Response:", response);
    }

    if (
        response &&
        response.status === 200 &&
        response.data &&
        response.data.status
    ) {
        return response.data;
    } else {
        return handleError({ response: response });
    }
}

async function handleError(error) {
    if (Constant.debug) {
        console.log("Error:", error);
    }
    if (error.response && error.response.status === 403) {
        await AuthController.logoutUser();
    }

    if (error.response && error.response.data) return error.response.data;
    else return { status: false };
}

function handleLogs(url, params) {
    if (Constant.debug) {
        console.log("-----------------------------------------------");
        console.log("URL: ", url);
        console.log("Request: ", params);
    }
}
