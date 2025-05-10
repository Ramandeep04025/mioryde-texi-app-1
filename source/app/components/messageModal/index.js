import React, { useState } from 'react'
import MessageModalComp from './messageModal'
import Validation from '../../../helpers/Validation';
import { Toaster } from '../../../helpers/toaster';
import MessageController from '../../apis/controllers/messageController';

const MessageModal = (props) => {
    const {
        show,
        close,
        data,
        sellerMessage
    } = props;


    let defaultValues = {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        message: sellerMessage ? sellerMessage : null,
        vehicleInfo: null,
    };


    let defaultErrors = {
        firstName: {
            rules: ['required', 'alphabetic'],
            isValid: true,
            message: '',
        },
        lastName: {
            rules: ['required', 'alphabetic'],
            isValid: true,
            message: '',
        },
        email: {
            rules: ['required', 'email'],
            isValid: true,
            message: '',
        },
        phoneNumber: {
            rules: ['numeric','min:10'],
            isValid: true,
            message: '',
        },
        message: {
            rules: ['required'],
            isValid: true,
            message: '',
        },
        vehicleInfo: {
            rules: [''],
            isValid: true,
            message: '',
        },
    };

    const [height, setHeight] = useState(null);
    const [checked, setChecked] = useState(false);
    const [ischecked, setIsChecked] = useState(false);
    const [showVehicleInfo, setShowVehicleInfo] = useState(false)
    const [values, setValues] = useState(defaultValues);
    const [isError, setError] = useState(defaultErrors);
    const [loader, setLoader] = useState(false);


    const handleChange = (field, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };


    const handleSubmit = async () => {
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            if (checked) {
                setIsChecked(false)
                let tempValues = {
                    ...values,
                    carId: data.id,
                }
                setLoader(true);
                const response = await MessageController.addRequest(tempValues)
                if (response && response.status) {
                    setLoader(false);
                    close();
                    new Toaster().success(response.message);
                }
            }
            else {
                setLoader(false);
                setIsChecked(true)
            }
        } else {
            setLoader(false);
            setIsChecked(true)
            setError({ ...isValid.errors });
        }
        setLoader(false);
    };

    return (
        <MessageModalComp
            show={show}
            close={close}
            height={height}
            setHeight={setHeight}
            checked={checked}
            setChecked={setChecked}
            showVehicleInfo={showVehicleInfo}
            setShowVehicleInfo={setShowVehicleInfo}
            values={values}
            isError={isError}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            data={data}
            loader={loader}
            ischecked={ischecked}
            setIsChecked={setIsChecked}
        />
    )
};

export default MessageModal