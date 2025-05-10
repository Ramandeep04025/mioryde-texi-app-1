import { colors } from "../../../../assets/styles/Colors";
import { Font } from "../../../../assets/styles/FontsFamily";
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpSpacing, dpWidth } from "../../../../assets/styles/Sizes";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white"
    },
    abuslateBackgroundImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: dpHeight(25),
        width: "60%",
        zIndex: 999
    },
    skipMain: {
        alignItems: 'flex-end',
        marginHorizontal: dpWidth(5),
        marginVertical: dpHeight(2),
        marginTop: dpHeight(6)
    },
    skip: {
        fontFamily: Font.regular,
        fontSize: dpFont(20),
        letterSpacing: dpSpacing(0.2),
        color: "#111111",
    },
    imageMain: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor : 'red'
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    image: {
        height: "100%",
        width: '100%',
    },
    Label: {
        fontSize: dpFont(34),
        fontFamily: Font.semiBold,
        color: colors.black,
        textAlign: 'center',
        marginBottom : dpHeight(-1.3)
    },
    subLabel: {
        fontSize: dpFont(14),
        fontFamily: Font.regular,
        color: colors.darkGrey,
        textAlign: 'center',
        letterSpacing: dpSpacing(0.2),
    },
    nextButton: {
        width: dpWidth(40),
        height: dpHeight(8),
        borderRadius: dpFont(25),
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: dpHeight(5)
    },
    nextText: {
        fontFamily: Font.regular,
        fontSize: dpFont(14),
        letterSpacing: dpSpacing(0.2),
        color: colors.black
    },
    abuslateBackgroundImgBottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: dpHeight(35),
        width: "40%",
        zIndex: -999,
        // backgroundColor: 'red'
    },
})
export default styles;