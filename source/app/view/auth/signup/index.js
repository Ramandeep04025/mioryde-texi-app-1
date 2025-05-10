import { useState, useEffect } from "react"
import Validation from "../../../../helpers/Validation"
// import AuthController from "../../../apis/controllers/authController"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { Toaster } from "../../../../helpers/toaster"
// import ContentController from "../../../apis/controllers/content/contentController"
import SignupScreen from "./Screen"


const Signup = (props) => {

    const defaultValues = {
        number: null,
    };


    const defaultErrors = {
        number: {
            rules: ['required', 'numeric', 'min:10'],
            isValid: true,
            message: ''
        },
    };


    const isFocused = useIsFocused();
    const [values, setValues] = useState(defaultValues);
    const [isError, setErrors] = useState(defaultErrors);
    const [loader, setLoader] = useState(false)
    const [banner, setBanner] = useState({})


    useEffect(() => {
        if (isFocused) {
            // getData()
        }
    }, [isFocused]);

    const getData = async () => {
        // setLoader(true)
        // let response = await ContentController.userTypeSelection()
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

    const handleChange = (fieldName, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(fieldName, value);
        setValues({ ...values, [fieldName]: value });
        setErrors({ ...isError, [fieldName]: node });
    };


    const onSubmit = async () => {
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            setLoader(true)
            // let response = await AuthController.userSignUp(values)
            // if (response && response.status) {
            //     new Toaster().success(response.message);
            //     setLoader(false),
            //         props.navigation.navigate('login')
            // }
            // else {
            //     setLoader(false)
            // }
        }
        else {
            setErrors({ ...isValid.errors })
        }
        setLoader(false)
    };

    return (
        <SignupScreen
            navigation={props.navigation}
            values={values}
            errors={isError}
            handleChange={handleChange}
            onSubmit={onSubmit}
            loader={loader}
        />
    )
}

export default Signup