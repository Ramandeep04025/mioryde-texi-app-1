import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import ForgotPasswordScreen from './forgotPasswordScreen'
import Validation from '../../../../helpers/Validation';
import AuthController from '../../../apis/controllers/authController';
import { Toaster } from '../../../../helpers/toaster';
import ContentController from '../../../apis/controllers/content/contentController';
import { useIsFocused } from '@react-navigation/native';

const ForgotPassword = (props) => {

    let defaultValues = {
        email: null,
    };


    let defaultErrors = {
        email: {
            rules: ['required', 'email'],
            isValid: true,
            message: '',
        },
    };

    const isFocused = useIsFocused();
    const [values, setValues] = useState(defaultValues);
    const [isError, setError] = useState(defaultErrors);
    const [loader, setLoader] = useState(false);
    const [banner, setBanner] = useState({})

    useEffect(() => {
        if (isFocused) {
            getBannerData()
        }
    }, [isFocused]);

    const getBannerData = async () => {
        setLoader(true)
        let response = await ContentController.forgotPassword()
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
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };


    const handleForgot = async () => {
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            setLoader(true)
            let response = await AuthController.forgotPassword(values);
            if (response && response.status) {
                setValues(defaultValues)
                new Toaster().success(response.message);
                setLoader(false),
                    // props.navigation.reset({
                    //     index: 0,
                    //     routes: [{ name: 'ForgotVerifyOtp', params: { response: response } }],
                    // });
                    props.navigation.navigate('ForgotVerifyOtp', { response: response })
            }
        } else {
            setError({ ...isValid.errors });
            setLoader(false)
        }
        setLoader(false);
    };


    return (
        <ForgotPasswordScreen
            navigation={props.navigation}
            values={values}
            isError={isError}
            handleChange={handleChange}
            handleForgot={handleForgot}
            loader={loader}
            banner={banner}
        />
    )
}

export default ForgotPassword