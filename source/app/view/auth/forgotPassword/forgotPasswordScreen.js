import { View, Text, Image, TouchableOpacity, ImageBackground, StatusBar, ScrollView, KeyboardAvoidingView, Animated, Easing } from 'react-native'
import { styles } from './style'
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
import { renderImage } from '../../../../helpers/renderImage'
import FastImage from 'react-native-fast-image'



const ForgotPasswordScreen = (props) => {
    const Focused = useIsFocused();
    const animatedValue = new Animated.Value(0);

    const {
        values,
        isError,
        handleChange,
        handleForgot,
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
                            <NewInput
                                placeholder="Email"
                                rightIcon={true}
                                keyboardType={'email-address'}
                                autoCapitalize="none"
                                value={values && values.email}
                                handleChange={(e) => handleChange("email", e)}
                                error={isError && isError.email && isError.email.message ? isError.email.message : null}
                                IconRightType={IconsType.fontisto}
                                IconRightName={IconsName.email}
                                rightIconColor={colors.darkGrey}
                                IconRightSize={Dimension.large}
                            />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.loginButton}>
                                    <Button
                                        title='Back'
                                        buttonStyle={styles.btnStyle22}
                                        titleStyle={styles.titleStyle22}
                                        onPress={() => props.navigation.goBack()}
                                    />
                                </View>
                                <View style={styles.loginButton}>
                                    <Button
                                        title='Submit'
                                        buttonStyle={styles.btnStyle}
                                        onPress={() => handleForgot()}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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

export default ForgotPasswordScreen