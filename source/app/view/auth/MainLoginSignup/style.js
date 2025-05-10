import { colors } from "../../../../assets/styles/Colors";
import { Font } from "../../../../assets/styles/FontsFamily";
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from "../../../../assets/styles/Sizes";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        flex: 0.32,
        width: '100%',
        backgroundColor: "#000000",
        alignItems: 'center',
        justifyContent: 'center'
    },
    view2: {
        flex: 0.68,
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: dpWidth(10),
        borderTopRightRadius: dpWidth(10),
        marginTop: dpHeight(-5)
    },
    locationLogo: {
        height: dpImageHeight(70),
        width: dpImageWidth(60),
        marginBottom: dpHeight(5)
    },
    absulateScreenlabel: {
        position: 'absolute',
        top: -dpHeight(5),
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    Loginbutton: {
        backgroundColor: colors.transparent,
        paddingVertical: dpWidth(2.5),
        paddingHorizontal: dpWidth(5),
        alignItems: 'center',
        borderBottomWidth: dpBorderWidth(1.5),
        borderBottomColor: colors.primary,
        borderRadius: dpWidth(2)
    },
    signUpbutton: {
        marginLeft : dpWidth(20),
        backgroundColor: colors.transparent,
        paddingVertical: dpWidth(2.5),
        paddingHorizontal: dpWidth(4),
        alignItems: 'center',
        borderBottomWidth: dpBorderWidth(1.5),
        borderBottomColor: colors.primary,
        borderRadius: dpWidth(2),
    },
    buttonText: {
        color: colors.white,
        fontSize: dpFont(14),
        fontWeight: Font.medium
    },
    screenBody : {
        paddingHorizontal : dpWidth(5),
        height : '100%',
    }
})
export default styles;