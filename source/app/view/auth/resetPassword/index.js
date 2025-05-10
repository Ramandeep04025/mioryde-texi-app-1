import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import ResetPasswordScreen from './resetPasswordScreen'
import Validation from '../../../../helpers/Validation'
import AuthController from '../../../apis/controllers/authController'
import { Toaster } from '../../../../helpers/toaster'
import { useIsFocused } from '@react-navigation/native'
import ContentController from '../../../apis/controllers/content/contentController'

const ResetPassword = (props) => {
    const data = props && props.route && props.route.params ? props.route.params : null;

    let defaultValues = {
        password: null,
        confirmPassword: null
    };


    let defaultErrors = {
        password: {
            rules: ['required', 'password'],
            isValid: true,
            message: '',
        },
        confirmPassword: {
            rules: ['required', 'password'],
            isValid: true,
            message: '',
        },
    };

    const isFocused = useIsFocused();
    const [values, setValues] = useState(defaultValues);
    const [isError, setError] = useState(defaultErrors);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntry1, setSecureTextEntry1] = useState(true);
    const [loader, setLoader] = useState(false);
    const [banner, setBanner] = useState({})


    useEffect(() => {
        if (isFocused) {
            getBannerData()
        }
    }, [isFocused]);

    const getBannerData = async () => {
        setLoader(true)
        let response = await ContentController.resetPassword()
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


    const handleResetPassword = async () => {
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            if (values.password !== values.confirmPassword) {
                let err = {
                    ...isError.confirmPassword,
                    isValid: false,
                    message: 'New Password and Confirm Password should be same',
                };
                setError({ ...isError, confirmPassword: err });
            } else {
                setLoader(true)
                let tempValues = {
                    ...values,
                    token: data && data.token ? data.token : null,
                }
                let response = await AuthController.resetPassword(tempValues);
                if (response && response.status) {
                    new Toaster().success(response.message);
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'login' }],
                    });
                    setLoader(false)
                } else {
                    setLoader(false)
                }
            }
        } else {
            setError({ ...isValid.errors });
        }
    };


    return (
        <>
            <ResetPasswordScreen
                navigation={props.navigation}
                values={values}
                isError={isError}
                secureTextEntry={secureTextEntry}
                setSecureTextEntry={setSecureTextEntry}
                secureTextEntry1={secureTextEntry1}
                setSecureTextEntry1={setSecureTextEntry1}
                loader={loader}
                handleResetPassword={handleResetPassword}
                handleChange={handleChange}
                banner={banner}
            />
        </>
    )
}

export default ResetPassword