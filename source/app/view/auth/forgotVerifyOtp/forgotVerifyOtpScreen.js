import { View, Text, Image, TouchableOpacity, ImageBackground, StatusBar, ScrollView, KeyboardAvoidingView, Animated, Easing } from 'react-native'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { colors } from '../../../../assets/styles/Colors'
import { useIsFocused } from '@react-navigation/native'
import Button from '../../../components/Button'
import OTPTextInput from 'react-native-otp-textinput'
import { styles } from './style'
import { Loader } from '../../../../helpers/loader'
import { useEffect } from 'react'
import { renderImage } from '../../../../helpers/renderImage'
import { dpHeight } from '../../../../assets/styles/Sizes'
import FastImage from 'react-native-fast-image'


const ForgotVerifyOtpScreen = (props) => {
    const Focused = useIsFocused();
    const animatedValue = new Animated.Value(0);
    const {
        values,
        errors,
        handleChange,
        loader,
        handleForgotVerifyOtp,
        handleResendOtp,
        navigation,
        banner
    } = props;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }, []);

    const imageStyle = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0],
                }),
            },
        ],
    };


    const textStyleAnimate = {
        opacity: animatedValue,
    };


    return (
        <>
            {
                Focused ?
                    <StatusBar
                        translucent
                        backgroundColor='transparent'
                        barStyle="dark-content"
                    />
                    :
                    null
            }
            <View style={styles.container}>
                <ImageBackground
                    source={Images.backgroundImage}
                    resizeMode="cover"
                    style={globalStyles.image}
                >
                    <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
                        <ScrollView
                            style={styles.ScrollView}
                            contentContainerStyle={styles.contentContainerStyle}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.mainTop}>
                                <View style={styles.imageMain}>
                                    <Image
                                        source={Images.redBackground}
                                        style={globalStyles.image}
                                        resizeMode='stretch'
                                    />
                                </View>
                                <View style={styles.subMain}>
                                    {/* <Animated.View style={[styles.topTextMain, textStyleAnimate]}> */}
                                    <View style={styles.topTextMain}>
                                        <Text style={styles.text1}>{banner && banner.title ? banner.title : null}</Text>
                                        <View style={styles.text2Main}>
                                            <Text style={styles.text2}>{banner && banner.discription ? banner.discription : null}</Text>
                                        </View>
                                    </View>
                                    {/* </Animated.View> */}
                                    <View style={styles.subImageMain}>
                                        {/* <Animated.View style={[imageStyle]}> */}
                                        <FastImage
                                            source={banner && banner.image ? renderImage(banner.image, "large") : Images.carsGroup}
                                            style={globalStyles.image}
                                            resizeMode='contain'
                                        />
                                        {/* </Animated.View> */}
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.mainBottom]}>
                                <OTPTextInput
                                    inputCount={6}
                                    name="otp"
                                    tintColor={colors.primary}
                                    offTintColor={colors.white}
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
                                    <Text style={styles.dontHaveText}>Didn't receive OTP?<Text style={styles.signup} onPress={() => handleResendOtp()}> Resend OTP</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' ,paddingHorizontal:dpHeight(3)}}>
                                    <View style={styles.loginButton}>
                                        <Button
                                            title='Back'
                                            buttonStyle={styles.btnStyle22}
                                            titleStyle={styles.titleStyle22}
                                            onPress={() => navigation.goBack()}
                                        />
                                    </View>
                                    <View style={styles.loginButton}>
                                        <Button
                                            title='Submit'
                                            buttonStyle={styles.btnStyle}
                                            // onPress={() => (store.dispatch(setUserData('user')), props.navigation.navigate('AppStack'))}
                                            onPress={() => handleForgotVerifyOtp()}
                                        />
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </ImageBackground>
                {
                    loader ?
                        <Loader loader={loader} />
                        : null
                }
            </View >
        </>
    )
};

export default ForgotVerifyOtpScreen