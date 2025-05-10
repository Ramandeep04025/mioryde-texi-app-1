import { View, Text, Image, TouchableOpacity, ImageBackground, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { colors } from '../../../../assets/styles/Colors'
import { useIsFocused } from '@react-navigation/native'
import Input from '../../../components/Input'
import { IconsName, IconsType } from '../../../../assets/styles/Icon'
import { Dimension } from '../../../../assets/styles/Dimension'
import Button from '../../../components/Button'
import { useState, useEffect } from 'react'
import { setUserData } from '../../../../redux/action/user'
import { store } from '../../../../redux/store'
import { Animated } from 'react-native'
import { Easing } from 'react-native'
import NewInput from '../../../components/newInput'
import { styles } from './styles'
import { Loader } from '../../../../helpers/loader'



const EmailVerificationScreen = (props) => {
    const Focused = useIsFocused();
    const {
        values,
        isError,
        handleChange,
        handleEmailVerification,
        loader
    } = props;


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
                                    <View style={styles.topTextMain}>
                                        <Text style={styles.text1}>Email Verification</Text>
                                        <View style={styles.text2Main}>
                                            <Text style={styles.text2}>Lorem Ipsum is simply dummy text of the printing.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.subImageMain}>
                                        <Image
                                            source={Images.carsGroup}
                                            style={globalStyles.image}
                                            resizeMode='contain'
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.mainBottom]}>
                                <View style={styles.bottomBody}>
                                    <View style={styles.inputsMain}>
                                        <View style={styles.input1}>
                                            <NewInput
                                                placeholder="Email"
                                                rightIcon={true}
                                                keyboardType={'email-address'}
                                                autoCapitalize='none'
                                                value={values && values.email}
                                                handleChange={(e) => handleChange("email", e)}
                                                error={isError && isError.email && isError.email.message ? isError.email.message : null}
                                                IconRightType={IconsType.fontisto}
                                                IconRightName={IconsName.email}
                                                rightIconColor={colors.darkGrey}
                                                IconRightSize={Dimension.large}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.loginButton}>
                                        <Button
                                            title='Submit'
                                            buttonStyle={styles.btnStyle}
                                            // onPress={() => (store.dispatch(setUserData('user')), props.navigation.navigate('AppStack'))}
                                            onPress={() => handleEmailVerification()}
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

export default EmailVerificationScreen