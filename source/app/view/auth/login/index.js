import { useEffect, useState } from "react";
import Validation from "../../../../helpers/Validation";
import LoginScreen from "./loginScreen"
import { Toaster } from "../../../../helpers/toaster";
import { connect } from "react-redux";
// import CardController from "../../../apis/controllers/cardController";
// import ContentController from "../../../apis/controllers/content/contentController";
// import AuthController from "../../../apis/controllers/authController";
import { useIsFocused } from "@react-navigation/native";
import { Text } from "react-native";


const Login = (props) => {
    let defaultValues = {
        email: null,
        password: null
    };

    let defaultErrors = {
        email: {
            rules: ['required', 'email'],
            isValid: true,
            message: '',
        },
        password: {
            rules: ['required'],
            isValid: true,
            message: '',
        },
    };


    const isFocused = useIsFocused()
    const [values, setValues] = useState(defaultValues);
    const [isError, setError] = useState(defaultErrors);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [loader, setLoader] = useState(false);
    const [banner, setBanner] = useState({})
    const [eye, setEye] = useState(true);

    useEffect(() => {
        // if (isFocused) {
        //     setValues(defaultValues);
        //     setError(defaultErrors);
        //     getData()
        // }
    }, [isFocused]);

    const getData = async () => {
        // setLoader(true)
        // let response = await ContentController.login()
        // if (response && response.status) {
        //     setLoader(false);
        //     setBanner(response.content)
        // }
        // else {
        //     setLoader(false)
        //     setBanner({})
        // }
        // setLoader(false)
    };


    const handleChange = (field, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };


    const handleLogin = async () => {
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            setLoader(true)
            let response = await AuthController.login(values);
            // if (response && response.status) {
            //     setLoader(false)
            //     if (response.user && response.user.verified_on) {
            //         new Toaster().success(response.message);
            //         props.navigation.reset({
            //             index: 0,
            //             routes: [{ name: 'AppStack' }],
            //         });
            //     } else {
            //         new Toaster().success('Please check your inbox and verify your email');
            //     }
            // }
            // else {
            //     setLoader(false);
            // }
        } else {
            setError({ ...isValid.errors });
        }
    };

    return (
        <LoginScreen
            navigation={props.navigation}
            values={values}
            isError={isError}
            handleChange={handleChange}
            secureTextEntry={secureTextEntry}
            setSecureTextEntry={setSecureTextEntry}
            handleLogin={handleLogin}
            loader={loader}
            banner={banner}
            eye={eye}
            setEye={setEye}
        />
    )
}

const mapStateToProps = state => ({
    user: state.UserReducer.user,
});
export default connect(mapStateToProps)(Login)