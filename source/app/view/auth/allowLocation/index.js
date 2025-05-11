import React, { useState } from 'react'
import Validation from '../../../../helpers/Validation'
import AllowLocationScreen from './allowLocation'
import VerifiyModal from '../../../components/VerifyModal';
import { useNavigation } from '@react-navigation/native';


const AllowLocation = (props) => {
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

    const [values, setValues] = useState(defaultValues);
    const [isError, setError] = useState(defaultErrors);
    const [loader, setLoader] = useState(false);
    const [showVerifiedPopUp, setShowVerifiedPopUp] = useState(false);
    const navigation = useNavigation()

    const handleChange = (field, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };


    const handleSubmit = async () => {
        // let validation = new Validation(isError);
        // let isValid = validation.isFormValid(values);
        // if (isValid && !isValid.haveError) {

        //     if (values.newPassword !== values.confirmPassword) {
        //         let err = {
        //             ...isError.confirmPassword,
        //             isValid: false,
        //             message: 'Confirm password should be same as new passwrod.',
        //         };
        //         setError({ ...isError, confirmPassword: err });
        //     } else {
        //         setLoader(true)
        //         let response = await AuthController.changePassword(values);
        //         if (response && response.status) {
        //             new Toaster().success(response.message);
        //             props.navigation.goBack()
        //             setLoader(false)
        //         } else {
        //             setLoader(false)
        //         }
        //     }
        // } else {
        //     setError({ ...isValid.errors });
        //     setLoader(false)
        // }
        // setLoader(false);
    };


    return (
        <>
            <AllowLocationScreen
                navigation={props.navigation}
                values={values}
                isError={isError}
                loader={loader}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </>
    )
}

export default AllowLocation