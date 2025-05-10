import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'
import { Animated, Easing, Image, ImageBackground, Platform, ScrollView, StatusBar, Text, TouchableOpacity, KeyboardAvoidingView, View } from 'react-native'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { Images } from '../../../../assets/styles/Images'
import { Loader } from '../../../../helpers/loader'
import Button from '../../../components/Button'
import NewInput from '../../../components/newInput'
import { styles } from './style'
import { renderImage } from '../../../../helpers/renderImage'
import FastImage from 'react-native-fast-image'



const ResetPasswordScreen = (props) => {
    const Focused = useIsFocused();
    const animatedValue = new Animated.Value(0);
    const {
        values,
        isError,
        handleChange,
        handleResetPassword,
        secureTextEntry,
        setSecureTextEntry,
        secureTextEntry1,
        setSecureTextEntry1,
        loader,
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
                    <KeyboardAvoidingView
                        style={{ flexGrow: 1 }}
                        // keyboardVerticalOffset={8000}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        enabled={true}
                    >
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
                                            <Text style={styles.text2}>
                                                {banner && banner.discription ? banner.discription : null}
                                            </Text>
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
                                <View style={styles.bottomBody}>
                                    <View style={styles.inputsMain}>
                                        <View style={styles.input1}>
                                            <NewInput
                                                placeholder="Enter password"
                                                value={values && values.password}
                                                handleChange={(e) => handleChange("password", e)}
                                                error={isError && isError.password && isError.password.message ? isError.password.message : null}
                                                RightImage={true}
                                                RightImageSource={secureTextEntry ? Images.eye : Images.eyeOpen}
                                                handleRightImageClick={() => setSecureTextEntry(!secureTextEntry)}
                                                secureTextEntry={secureTextEntry}
                                            />
                                        </View>
                                        <View style={styles.input1}>
                                            <NewInput
                                                placeholder="Enter confirm password"
                                                value={values && values.confirmPassword}
                                                handleChange={(e) => handleChange("confirmPassword", e)}
                                                error={isError && isError.confirmPassword && isError.confirmPassword.message ? isError.confirmPassword.message : null}
                                                RightImage={true}
                                                RightImageSource={secureTextEntry1 ? Images.eye : Images.eyeOpen}
                                                handleRightImageClick={() => setSecureTextEntry1(!secureTextEntry1)}
                                                secureTextEntry={secureTextEntry1}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                                                onPress={() => handleResetPassword()}
                                            />
                                        </View>
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
export default ResetPasswordScreen