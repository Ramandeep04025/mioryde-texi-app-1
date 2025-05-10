import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../../../assets/styles/Colors';
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from '../../../../assets/styles/Sizes';
import { Font } from '../../../../assets/styles/FontsFamily';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    mainTop: {
        flex: 0.3,
        marginTop: Platform.OS === 'ios' ? dpHeight(3) : dpHeight(3),
        marginHorizontal: dpWidth(6),
    },
    ScrollView: {
        flex: 1
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: dpHeight(2),
    },
    mainBottom: {
        flex: 1,
        marginHorizontal: dpWidth(6),
    },
    imageMain: {
        height: dpImageHeight(220),
        width: '100%',
        overflow: 'hidden',
        borderRadius: dpFont(22),
    },
    subMain: {
        zIndex: 9999,
        marginTop: Platform.OS === 'ios' ? dpHeight(-24) : dpHeight(-26.5)
    },
    topTextMain: {
        marginHorizontal: dpWidth(7)
    },
    text1: {
        fontSize: dpFont(22),
        color: colors.white,
        fontFamily: Font.bold
    },
    text2Main: {
        marginTop: dpHeight(1),
        marginRight: dpWidth(3)
    },
    text2: {
        fontSize: dpFont(16),
        color: colors.white,
        fontFamily: Font.regular,
    },
    subImageMain: {
        height: dpImageHeight(155),
        backgroundColor: colors.transparent,
        marginTop: dpHeight(1.8),
    },
    bottomBody: {
        // marginVertical: dpHeight(0),
    },
    googleLoginButtonMain: {
        marginVertical: dpHeight(2)
    },
    containerLoginGoogle: {
        height: dpHeight(7),
        marginTop: Platform.OS === 'ios' ? dpHeight(3.5) : dpHeight(1),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: dpHeight(8)
    },
    viewlogingoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewLoginGoogle: {
        marginLeft: dpWidth(2)
    },
    textlogingoogle: {
        fontSize: dpFont(16),
        color: colors.darkGrey,
        fontFamily: Font.medium
    },
    orMain: {
        marginVertical: dpHeight(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    orText: {
        fontSize: dpFont(12),
        color: colors.darkGrey,
        fontFamily: Font.medium,
    },
    forgetPassMain: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: dpHeight(-1),
    },
    forget: {
        fontSize: dpFont(13),
        color: colors.darkGrey,
        fontFamily: Font.medium
    },
    loginButton: {
        marginTop: dpHeight(2),
        marginHorizontal: dpWidth(7)
    },
    btnStyle: {
        height: dpHeight(6),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: dpHeight(5),
    },
    dontHaveText: {
        fontSize: dpFont(13),
        color: colors.darkGrey,
        fontFamily: Font.medium
    },
    signup: {
        fontSize: dpFont(13),
        color: colors.darkGrey,
        fontFamily: Font.bold
    },
    rightImageStyle: {
        height: dpImageHeight(18),
        width: dpImageWidth(20),
        overflow: 'hidden',
    },
    rightImagePosition: {
        position: 'absolute',
        zIndex: 1,
        top: dpHeight(2.2),
        right: dpWidth(7)
    },
    inputStyle: {
        height: dpHeight(7),
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: dpHeight(8),
        fontSize: dpFont(16),
        fontFamily: Font.medium,
        paddingLeft: dpWidth(7),
        paddingRight: dpWidth(15),
        color: colors.black,
    },

})