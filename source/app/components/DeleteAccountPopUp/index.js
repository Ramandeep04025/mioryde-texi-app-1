import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Modal from "react-native-modal";
import OTPTextInput from 'react-native-otp-textinput';
import { colors } from '../../../assets/styles/Colors';
import AuthController from '../../apis/controllers/authController';
import Button from '../Button';
import { styles } from './style';


const DeleteAccountModal = (props) => {
    const [sendOtp, setSendOtp] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleOtp = async () => {
        setLoader(true);
        let response = await AuthController.deleteAccountSeller();
        if (response && response.status) {
            setSendOtp(true)
        } else {
            setLoader(false);
            setSendOtp(false);
        }
        setLoader(false)
    };


    return (
        <Modal
            isVisible={props.show}
            style={styles.modal}
            backdropColor={colors.black}
            backdropOpacity={0.8}
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
            statusBarTranslucent={false}
            onBackdropPress={() => { setSendOtp(false), props.close() }}
        >
            <View style={styles.maincontainer}>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        Delete Account
                    </Text>
                </View>
                {!sendOtp ? <Text style={styles.name}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Text> :
                    <Text style={styles.name}>
                        Please enter the otp
                    </Text>}
                {sendOtp ? <View style={styles.inputsMain}>
                    <OTPTextInput
                        inputCount={6}
                        name="otp"
                        tintColor={colors.primary}
                        offTintColor={colors.white}
                        textInputStyle={styles.otpTextInput}
                        containerStyle={styles.otpContainer}
                    // handleTextChange={(value) => handleChange("otp", value)}
                    />
                    {/* {errors?.otp?.message ? (
                        <View style={styles.errorView}>
                            <Text style={styles.error}>{errors?.otp?.message}</Text>
                        </View>
                    ) : null} */}
                </View> : null}
                <View style={styles.viewBtn}>
                    {!loader ? <Button
                        title={!sendOtp ? 'Send OTP' : 'Submit'}
                        buttonStyle={styles.btnStyle}
                        onPress={() => handleOtp()}
                    /> :
                        <ActivityIndicator
                            color={colors.primary}
                            size={'small'}
                            style={{ alignSelf: 'center' }}
                        />}
                </View>
            </View>
        </Modal>
    )
};

export default DeleteAccountModal