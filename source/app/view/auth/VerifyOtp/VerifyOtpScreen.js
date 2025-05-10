import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { colors } from '../../../../assets/styles/Colors'
import OTPTextInput from 'react-native-otp-textinput'
import { styles } from './style'
import { Loader } from '../../../../helpers/loader'
import { dpHeight } from '../../../../assets/styles/Sizes'
import { Button } from '@rneui/themed'


const VerifyOtpScreen = (props) => {
    const {
        values,
        errors,
        handleChange,
        loader,
        handleResendOtp,
        handleVerifyOtp
    } = props;


    return (
        <>
            <KeyboardAvoidingView
                style={{ flexGrow: 1, marginTop: dpHeight(5) }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled={true}
            >
                <ScrollView
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.text1}>Verify</Text>
                    <Text style={styles.text2}>OTP sent to +91 9877797466 <Text style={styles.text3}>/ Change </Text></Text>
                    <View style={styles.bottomBody}>
                        <OTPTextInput
                            inputCount={4}
                            name="otp"
                            tintColor={colors.primary}
                            offTintColor={colors.grey}
                            textInputStyle={styles.otpTextInput}
                            containerStyle={styles.otpContainer}
                            handleTextChange={(value) => handleChange("otp", value)}
                        />
                        {errors?.otp?.message ? (
                            <View style={styles.errorView}>
                                <Text style={styles.error}>{errors?.otp?.message}</Text>
                            </View>
                        ) : null}
                        <View style={styles.dontHaveAccount}>
                            <Text style={styles.resend} onPress={() => handleResendOtp()}> Resend OTP</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomButton}>
                    <Button
                        title='Proceed'
                        onPress={() => handleVerifyOtp()}
                    />
                    <View style={styles.bottomtextMain}>
                        <Text style={styles.bottomtext}>By continuing, you agree to our <Text style={styles.terms}>Terms of Service</Text> and <Text style={styles.terms}>Privacy Policy</Text>.</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {loader ? <Loader loader={loader} /> : null}
        </>
    )
};

export default VerifyOtpScreen