import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../assets/styles/Colors';
import { Dimension } from '../../../../assets/styles/Dimension';
import { Loader } from '../../../../helpers/loader';
import { styles } from './style';
import { dpHeight } from '../../../../assets/styles/Sizes';
import { Button, Input } from '@rneui/themed';
import PhoneInputField from '../../../components/PhoneInputField';


const SignupScreen = (props) => {
    const {
        values,
        handleChange,
        loader,
        isError,
        onSubmit
    } = props

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
                    <Text style={styles.text1}>Get Started</Text>
                    <View style={styles.bottomBody}>
                        <PhoneInputField />
                    </View>
                </ScrollView>
                <View style={styles.bottomButton}>
                    <Button
                        title='Get OTP'
                        onPress={() => onSubmit()}
                    />
                    <View style={styles.bottomtextMain}>
                        <Text style={styles.bottomtext}>By continuing, you agree to our <Text style={styles.terms}>Terms of Service</Text> and <Text style={styles.terms}>Privacy Policy</Text>.</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {loader ? <Loader loader={loader} /> : null}
        </>
    )
}

export default SignupScreen