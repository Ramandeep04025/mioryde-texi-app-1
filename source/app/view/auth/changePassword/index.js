import { useIsFocused } from '@react-navigation/native'
import React, { useState } from 'react'
import Validation from '../../../../helpers/Validation'
import { Toaster } from '../../../../helpers/toaster'
import AuthController from '../../../apis/controllers/authController'
import ChangePasswordScreen from './changePasswordScreen'
import { HeaderComponet } from '../../../components/header/Header'
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

const ChangePassword = (props) => {
    // const data = props && props.route && props.route.params ? props.route.params : null;

    let defaultValues = {
        oldPassword: null,
        newPassword: null,
        confirmPassword: null
    };


    let defaultErrors = {
        oldPassword: {
            rules: ['required', 'password'],
            isValid: true,
            message: '',
        },
        newPassword: {
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

    const isFocused = useIsFocused()
    const [values, setValues] = useState(defaultValues);
    const [isError, setError] = useState(defaultErrors);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntry1, setSecureTextEntry1] = useState(true);
    const [secureTextEntry2, setSecureTextEntry2] = useState(true);
    const [loader, setLoader] = useState(false);
    const [banner, setBanner] = useState({})

    // useEffect(() => {
    //     if (isFocused) {
    //         // getBannerData()
    //     }
    // }, [isFocused]);

    // const getBannerData = async () => {
    //     setLoader(true)
    //     let response = await ContentController.changePassword()
    //     if (response && response.status) {
    //         setLoader(false);
    //         setBanner(response.content)
    //     }
    //     else {
    //         setLoader(false)
    //         setBanner({})
    //     }
    //     setLoader(false)
    // };


    const handleChange = (field, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };


    const handleChangePassword = async () => {
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {

            if (values.newPassword !== values.confirmPassword) {
                let err = {
                    ...isError.confirmPassword,
                    isValid: false,
                    message: 'Confirm password should be same as new passwrod.',
                };
                setError({ ...isError, confirmPassword: err });
            } else {
                setLoader(true)
                let response = await AuthController.changePassword(values);
                if (response && response.status) {
                    new Toaster().success(response.message);
                    props.navigation.goBack()
                    setLoader(false)
                } else {
                    setLoader(false)
                }
            }
        } else {
            setError({ ...isValid.errors });
            setLoader(false)
        }
        setLoader(false);
    };

    const drawerProgress = useDrawerProgress();

    const viewStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            drawerProgress.value,
            [0, 0.36],
            [1, 0.9]
        )

        const borderRadius = interpolate(
            drawerProgress.value,
            [0, 0.1],
            [0, 3]
        )

        return {
            transform: [{ scale }],
            borderRadius,
        }
    });


    return (
        <Animated.View style={[{ flex: 1, overflow: 'hidden' }, viewStyle]}>
            <HeaderComponet
                leftIcon={'menu'}
                profile={true}
                navigation={props.navigation}
            />
            <ChangePasswordScreen
                navigation={props.navigation}
                values={values}
                isError={isError}
                secureTextEntry={secureTextEntry}
                setSecureTextEntry={setSecureTextEntry}
                secureTextEntry1={secureTextEntry1}
                secureTextEntry2={secureTextEntry2}
                setSecureTextEntry1={setSecureTextEntry1}
                setSecureTextEntry2={setSecureTextEntry2}
                loader={loader}
                handleChangePassword={handleChangePassword}
                handleChange={handleChange}
            // banner={banner}
            />
        </Animated.View>
    )
}

export default ChangePassword