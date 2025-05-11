import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets/styles/Colors';
import { dpBorderWidth, dpFont, dpHeight, dpWidth } from '../../../../assets/styles/Sizes';
import { Font } from '../../../../assets/styles/FontsFamily';


export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: dpHeight(2)
    },
    text1: {
        fontSize: dpFont(32),
        color: colors.black,
        fontFamily: Font.semiBold,
        marginTop: dpHeight(2)
    },
    text2: {
        fontSize: dpFont(14),
        color: colors.black,
        fontFamily: Font.regular,
        marginTop: dpHeight(0.5)
    },
    text3: {
        fontSize: dpFont(14),
        color: colors.black,
        fontFamily: Font.medium,
        marginTop: dpHeight(1)
    },
    bottomBody: {
        marginTop: dpHeight(4)
    },
    bottomButton: {
        position: 'absolute',
        bottom: dpHeight(3)
    },
    forget: {
        fontSize: dpFont(14),
        color: colors.black,
        fontFamily: Font.regular,
        marginTop: dpHeight(-1.5)
    },
    bottomtextMain: {
        marginTop: dpHeight(2.5)
    },
    bottomtext: {
        fontSize: dpFont(13),
        color: colors.black,
        fontFamily: Font.regular,
    },
    terms: {
        fontSize: dpFont(13),
        color: colors.primary,
        fontFamily: Font.regular,
    },
    otpContainer: {
        justifyContent: "space-between",
        alignSelf: 'center',
    },
    otpTextInput: {
        borderColor: colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRadius: dpHeight(2),
        width: dpHeight(9),
        backgroundColor: colors.white,
        height: dpHeight(6.5),
        color: colors.black,
        fontSize: dpFont(18),
        marginRight: dpWidth(4)
    },
    dontHaveAccount: {
        marginTop: dpHeight(2)
    },
    resend: {
        color: colors.black,
        fontSize: dpFont(14),
        fontWeight: Font.regular
    }
})