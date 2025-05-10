import { useState, useEffect } from "react";
import Validation from "../../../../helpers/Validation";
import AuthController from "../../../apis/controllers/authController";
import { store } from "../../../../redux/store";
import EmailVerificationScreen from "./emailVerificationScreen";
import { Toaster } from "../../../../helpers/toaster";


const EmailVerification = (props) => {

    let defaultValues = {
        email: null,
    }
    let defaultErrors = {
        email: {
            rules: ['required', 'email'],
            isValid: true,
            message: '',
        }
    }
    const [values, setValues] = useState(defaultValues);
    const [isError, setError] = useState(defaultErrors);
    const [loader, setLoader] = useState(false)


    const handleChange = (field, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };


    const handleEmailVerification = async () => {
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            setLoader(true)
            const response = await AuthController.emailVerification(values)
            if (response && response.status) {
                new Toaster().success(response.message);
                setLoader(false)
                //     props.navigation.reset({
                //         index: 0,
                //         routes: [{ name: 'AppStack' }],
                //     });
                //     setLoader(false)
            }
            else {
                setLoader(false)
            }
        } else {
            setError({ ...isValid.errors });
            setLoader(false)
        }
        setLoader(false);
    };



    return (
        <EmailVerificationScreen
            navigation={props.navigation}
            values={values}
            isError={isError}
            handleChange={handleChange}
            handleEmailVerification={handleEmailVerification}
            loader={loader}
        />
    )
}

export default EmailVerification