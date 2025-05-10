import { useState, useEffect } from "react";
import Validation from "../../../../helpers/Validation";
import AuthController from "../../../apis/controllers/authController";
import { store } from "../../../../redux/store";
import ForgotVerifyOtpScreen from "./forgotVerifyOtpScreen";
import { Toaster } from "../../../../helpers/toaster";
import { useIsFocused } from "@react-navigation/native";
import ContentController from "../../../apis/controllers/content/contentController";



const ForgotVerifyOtp = (props) => {
    const data = props && props.route && props.route.params ? props.route.params : null;


    let defaultValues = {
        otp: '',
    };


    let defaultErrors = {
        otp: {
            rules: ['required'],
            isValid: true,
            message: '',
        }
    };

    const isFocused = useIsFocused();
    const [values, setValues] = useState(defaultValues);
    const [errors, setError] = useState(defaultErrors);
    const [loader, setLoader] = useState(false);
    const [banner, setBanner] = useState({})

    useEffect(() => {
        if (isFocused) {
            getBannerData()
        }
    }, [isFocused]);


    const getBannerData = async () => {
        setLoader(true)
        let response = await ContentController.otpVerify()
        if (response && response.status) {
            setLoader(false);
            setBanner(response.content)
        }
        else {
            setLoader(false)
            setBanner({})
        }
        setLoader(false)
    };




    const handleChange = (field, value) => {
        let validation = new Validation(errors);
        let node = validation.validateField(field, value);
        setError({ ...errors, [field]: node });
        setValues({ ...values, [field]: value });
    };



    const handleForgotVerifyOtp = async () => {
        let validation = new Validation(errors);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            setLoader(true)
            let tempValues = {
                ...values,
                token: data && data.response && data.response.token ? data.response.token : null
            }
            let response = await AuthController.postForgotVerifyOtp(tempValues)
            if (response && response.status) {
                new Toaster().success(response.message);
                setLoader(false),
                    // props.navigation.navigate('reset_Password', { token: tempValues.token })
                    props.navigation.reset({
                        index: 1,
                        routes: [{ name: 'login' }, { name: 'reset_Password', params: { token: tempValues.token } }],
                    });
            }
            else {
                setLoader(false);
            }
        } else {
            setError({ ...isValid.errors });
        }
        setLoader(false);
    };


    const handleResendOtp = async () => {
        let token = data && data.response && data.response.token ? data.response.token : null
        setLoader(true)
        let response = await AuthController.postResendOtp(token)
        if (response && response.status) {
            new Toaster().success(response.message);
            setLoader(false)
        }
        else {
            setLoader(false);

        }
    };


    return (
        <ForgotVerifyOtpScreen
            navigation={props.navigation}
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleForgotVerifyOtp={handleForgotVerifyOtp}
            handleResendOtp={handleResendOtp}
            loader={loader}
            banner={banner}
        />
    )
}

export default ForgotVerifyOtp