import { useState, useEffect } from "react";
import Validation from "../../../../helpers/Validation";
// import AuthController from "../../../apis/controllers/authController";
// import { store } from "../../../../redux/store";
import VerifyOtpScreen from "./VerifyOtpScreen";
// import { Toaster } from "../../../../helpers/toaster";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import VerifiyModal from "../../../components/VerifyModal";
// import ContentController from "../../../apis/controllers/content/contentController";



const VerifyOtp = (props) => {
    const navigation = useNavigation()
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
    const [showVerifiedPopUp, setShowVerifiedPopUp] = useState(false);
    const [banner, setBanner] = useState({})

    useEffect(() => {
        if (isFocused) {
            // getBannerData()
        }
    }, [isFocused]);


    const getBannerData = async () => {
        // setLoader(true)
        // let response = await ContentController.otpVerify()
        // if (response && response.status) {
        //     setLoader(false);
        //     setBanner(response.content)
        // }
        // else {
        //     setLoader(false)
        //     setBanner({})
        // }
        setLoader(false)
    };

    const handleChange = (field, value) => {
        let validation = new Validation(errors);
        let node = validation.validateField(field, value);
        setError({ ...errors, [field]: node });
        setValues({ ...values, [field]: value });
    };

    const handleVerifyOtp = async () => {
        setShowVerifiedPopUp(true)
        // let validation = new Validation(errors);
        // let isValid = validation.isFormValid(values);
        // if (isValid && !isValid.haveError) {
        //     setLoader(true)
        //     let tempValues = {
        //         ...values,
        //         token: data && data.response && data.response.token ? data.response.token : null
        //     }
        // let response = await AuthController.postVerifyOtp(tempValues)
        // if (response && response.status) {
        //     new Toaster().success(response.message);
        //     setLoader(false),
        //         // props.navigation.navigate('reset_Password', { token: tempValues.token })
        //         props.navigation.reset({
        //             index: 1,
        //             routes: [{ name: 'login' }, { name: 'reset_Password', params: { token: tempValues.token } }],
        //         });
        // }
        // else {
        //     setLoader(false);
        // }
        // } else {
        //     setError({ ...isValid.errors });
        // }
        // setLoader(false);
    };


    const handleResendOtp = async () => {
        let token = data && data.response && data.response.token ? data.response.token : null
        setLoader(true)
        // let response = await AuthController.postResendOtp(token)
        // if (response && response.status) {
        //     new Toaster().success(response.message);
        //     setLoader(false)
        // }
        // else {
        //     setLoader(false);

        // }
    };


    return (
        <>
            <VerifyOtpScreen
                navigation={props.navigation}
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleVerifyOtp={handleVerifyOtp}
                handleResendOtp={handleResendOtp}
                loader={loader}
            />
            {showVerifiedPopUp &&
                <VerifiyModal
                    message={"Success!"}
                    discriptionn={"Your password has been successfully changed"}
                    show={showVerifiedPopUp}
                    onConfirm={() => navigation.navigate("forgot_Password")}
                />
            }
        </>
    )
}

export default VerifyOtp