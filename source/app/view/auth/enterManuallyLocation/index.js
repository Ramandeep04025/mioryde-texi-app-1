import React, { useState } from 'react'
import Validation from '../../../../helpers/Validation'
import EnterManullyLocationScreen from './enterManually';
import VerifiyModal from '../../../components/VerifyModal';


const EnterManullyLocation = (props) => {
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
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const religionList = []

    const handleChange = (field, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };


    const handleSubmit = async () => {
        setShowVerifiedPopUp(true)
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
        //         let response = await AuthController.PersonalInfo(values);
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
            <EnterManullyLocationScreen
                navigation={props.navigation}
                values={values}
                isError={isError}
                loader={loader}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setSecureTextEntry={setSecureTextEntry}
                secureTextEntry={secureTextEntry}
                religionList={religionList}
            />
            {showVerifiedPopUp &&
                <VerifiyModal
                    show={showVerifiedPopUp}
                    isVictorySign={true}
                    message={"Hi Mavi"}
                    discriptionn={"Your account is ready to use. You will be redirected to the home page in a few seconds..."}
                    onConfirm={() => navigation.navigate("personal_info")}
                />
            }
        </>
    )
}

export default EnterManullyLocation