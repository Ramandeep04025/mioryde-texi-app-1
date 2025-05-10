import { View, Text, Image, TouchableOpacity, ImageBackground, StatusBar, ScrollView, KeyboardAvoidingView, Animated, Easing } from 'react-native'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { colors } from '../../../../assets/styles/Colors'
import { useIsFocused } from '@react-navigation/native'
import { IconsName, IconsType } from '../../../../assets/styles/Icon'
import { Dimension } from '../../../../assets/styles/Dimension'
import Button from '../../../components/Button'
import { useState, useEffect } from 'react'
import NewInput from '../../../components/newInput'
import { Loader } from '../../../../helpers/loader'
import { styles } from './styles'


const ChangePasswordScreen = (props) => {
    const animatedValue = new Animated.Value(0);
    const Focused = useIsFocused();
    const {
        values,
        isError,
        handleChange,
        handleChangePassword,
        secureTextEntry,
        setSecureTextEntry,
        secureTextEntry1,
        secureTextEntry2,
        setSecureTextEntry1,
        setSecureTextEntry2,
        loader
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
                                <Animated.View style={[styles.topTextMain, textStyleAnimate]}>
                                    <Text style={styles.text1}>Change Password</Text>
                                    <View style={styles.text2Main}>
                                        <Text style={styles.text2}>
                                        Your password include min 8 characters long, alphanumeric, one uppercase, one lowercase and one special character
                                        </Text>
                                    </View>
                                </Animated.View>
                                <View style={styles.subImageMain}>
                                    <Animated.View style={[imageStyle]}>
                                        <Image
                                            source={Images.carsGroup}
                                            style={globalStyles.image}
                                            resizeMode='contain'
                                        />
                                    </Animated.View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.mainBottom]}>
                            <View style={styles.bottomBody}>
                                <View style={styles.inputsMain}>
                                    <View style={styles.input1}>
                                        <NewInput
                                            placeholder="Enter old password"
                                            value={values && values.oldPassword}
                                            handleChange={(e) => handleChange("oldPassword", e)}
                                            error={isError && isError.oldPassword && isError.oldPassword.message ? isError.oldPassword.message : null}
                                            RightImage={true}
                                            RightImageSource={secureTextEntry ? Images.eye : Images.eyeOpen}
                                            handleRightImageClick={() => setSecureTextEntry(!secureTextEntry)}
                                            secureTextEntry={secureTextEntry}
                                        />
                                    </View>
                                    <View style={styles.input1}>
                                        <NewInput
                                            placeholder="Enter new password"
                                            value={values && values.newPassword}
                                            handleChange={(e) => handleChange("newPassword", e)}
                                            error={isError && isError.newPassword && isError.newPassword.message ? isError.newPassword.message : null}
                                            RightImage={true}
                                            RightImageSource={secureTextEntry1 ? Images.eye : Images.eyeOpen}
                                            handleRightImageClick={() => setSecureTextEntry1(!secureTextEntry1)}
                                            secureTextEntry={secureTextEntry1}
                                        />
                                    </View>
                                    <View style={styles.input1}>
                                        <NewInput
                                            placeholder="Enter confirm password"
                                            value={values && values.confirmPassword}
                                            handleChange={(e) => handleChange("confirmPassword", e)}
                                            error={isError && isError.confirmPassword && isError.confirmPassword.message ? isError.confirmPassword.message : null}
                                            RightImage={true}
                                            RightImageSource={secureTextEntry2 ? Images.eye : Images.eyeOpen}
                                            handleRightImageClick={() => setSecureTextEntry2(!secureTextEntry2)}
                                            secureTextEntry={secureTextEntry2}
                                        />
                                    </View>
                                </View>
                                <View style={styles.loginButton}>
                                    <Button
                                        title='Submit'
                                        buttonStyle={styles.btnStyle}
                                        onPress={() => handleChangePassword()}
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
export default ChangePasswordScreen