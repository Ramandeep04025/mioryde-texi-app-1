import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../../assets/styles/Colors'
import { Dimension } from '../../../../assets/styles/Dimension'
import { IconsName, IconsType } from '../../../../assets/styles/Icon'
import { Images } from '../../../../assets/styles/Images'
import { Loader } from '../../../../helpers/loader'
import { styles } from './style'
import { dpHeight } from '../../../../assets/styles/Sizes'
import { Button, Input } from '@rneui/themed'
import Icons from '../../../components/IconComponent'


const LoginScreen = (props) => {

    const {
        values,
        isError,
        handleChange,
        secureTextEntry,
        setSecureTextEntry,
        handleLogin,
        loader,
        eye,
        setEye
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
                    <Text style={styles.text1}>Hey,</Text>
                    <Text style={styles.text1}>Welcome back !</Text>
                    <View style={styles.bottomBody}>
                        <Input
                            placeholder="Phone number"
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
                        <Input
                            placeholder="Password"
                            value={values && values.password}
                            handleChange={(e) => handleChange("password", e)}
                            error={isError && isError.password && isError.password.message ? isError.password.message : null}
                            RightImage={true}
                            RightImageSource={secureTextEntry ? Images.eye : Images.eyeOpen}
                            handleRightImageClick={() => setSecureTextEntry(!secureTextEntry)}
                            secureTextEntry={secureTextEntry}
                            rightIcon={{
                                type: IconsType.ionIcon,
                                name: eye ? IconsName.mdeyeoffoutline : IconsName.eyeFilled,
                                size: Dimension.semilarge,
                                color: colors.gray,
                                // onPress: () => setEye(!eye)
                            }}
                        />
                        <TouchableOpacity >
                        {/* <TouchableOpacity onPress={() => props.navigation.navigate('forgot_Password')}> */}
                            <Text style={styles.forget} >Forgot password ?</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.bottomButton}>
                    <Button
                        title='Login'
                        onPress={() => handleLogin()}
                    />
                </View>
            </KeyboardAvoidingView>
            {
                loader ?
                    <Loader loader={loader} />
                    : null
            }
        </>
    )
};

export default LoginScreen