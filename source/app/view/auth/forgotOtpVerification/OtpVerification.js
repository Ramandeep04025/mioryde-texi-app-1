import { View, Text, Image, ScrollView } from 'react-native'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { colors } from '../../../../assets/styles/Colors'
import { styles } from './styles'
import { Loader } from '../../../../helpers/loader'
import { HeaderComponet } from '../../../components/header/Header'
import { Button } from '@rneui/themed'
import OTPTextInput from 'react-native-otp-textinput'

const OptVerificationScreen = (props) => {
    const {
        values,
        isError,
        handleChange,
        handleResendOtp,
        loader,
        handleSubmit
    } = props;


    return (
        <>
            <HeaderComponet
                leftIcon={"back"}
                center={"headerlabel"}
                headerLabel={"Forgot password"}
            />
            <ScrollView
                style={styles.ScrollView}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.screenLabelContainer}>
                    <View style={styles.lockmain}>
                        <Image
                            style={globalStyles.image}
                            source={Images.lock}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={styles.mainLabel}>Enter OTP</Text>
                    <Text style={styles.text2}>OTP sent to +91 9877797466 <Text style={styles.text3}>/ Change </Text></Text>
                </View>
                <View style={[styles.body]}>
                    <OTPTextInput
                        inputCount={4}
                        name="otp"
                        tintColor={colors.primary}
                        offTintColor={colors.grey}
                        textInputStyle={styles.otpTextInput}
                        containerStyle={styles.otpContainer}
                        handleTextChange={(value) => handleChange("otp", value)}
                    />
                    {/* {errors?.otp?.message ? (
                        <View style={styles.errorView}>
                            <Text style={styles.error}>{errors?.otp?.message}</Text>
                        </View>
                    ) : null} */}
                    <View style={styles.dontHaveAccount}>
                        <Text style={styles.resend} onPress={() => handleResendOtp()}> Resend OTP</Text>
                    </View>
                </View>
                <View style={styles.bottomButton}>
                    <Button
                        title='Verify'
                        onPress={() => handleSubmit()}
                    />
                </View>
            </ScrollView>
            {
                loader ?
                    <Loader loader={loader} />
                    : null
            }
        </>
    )
};

export default OptVerificationScreen