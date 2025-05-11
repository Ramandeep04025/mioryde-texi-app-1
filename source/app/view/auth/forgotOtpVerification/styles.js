import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../../../assets/styles/Colors';
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from '../../../../assets/styles/Sizes';
import { Font } from '../../../../assets/styles/FontsFamily';


export const styles = StyleSheet.create({
    ScrollView: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: dpWidth(5)
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: dpHeight(2),
    },
    body: {
        marginTop: dpHeight(5)
    },
    bottomButton: {
        position: 'absolute',
        bottom: dpHeight(4)
    },
    mainLabel: {
        fontSize: dpFont(34),
        color: colors.black,
        fontFamily: Font.medium,
        marginBottom: dpHeight(-1)
    },
    screenLabelContainer: {
        marginTop: dpHeight(8)
    },
    lockmain: {
        height: dpHeight(4),
        width: dpWidth(8),
        marginBottom: dpHeight(1.5)
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
    dontHaveAccount: {
        marginTop: dpHeight(2)
    },
    resend: {
        color: colors.black,
        fontSize: dpFont(14),
        fontWeight: Font.regular
    }
})