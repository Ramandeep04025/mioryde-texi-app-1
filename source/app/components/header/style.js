import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";
import { Font } from "../../../assets/styles/FontsFamily";


export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: dpWidth(5),
        paddingTop: Platform.OS === "ios" ? dpHeight(6.5) : dpHeight(5.2),
        paddingBottom: dpHeight(0.2),
        paddingVertical: dpHeight(3),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // paddingVertical: dpHeight(2),
        height: dpHeight(12)
    },
    leftSideContainer: {
        flex: 0.15,
        alignItems: 'flex-start'
    },
    barImg: {
        height: dpImageHeight(10),
        width: dpImageWidth(32)
    },
    centerPart: {
        flex: 0.70,
        alignItems: 'center'
    },
    centertext: {
        fontSize: dpFont(17),
        fontWeight: Font.medium,
        color: colors.black
    },
    rightSideContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    viewImage: {
        width: dpImageWidth(70),
        height: dpImageHeight(55),
    },
    viewImageright: {
        width: dpImageWidth(60),
        height: dpImageHeight(60),
        borderRadius: dpHeight(30),
        overflow: 'hidden',
        borderColor: colors.white,
        borderWidth: dpFont(3)
    },
    loginbtnMian: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: dpWidth(3.5)
    },
    loginbtnleft: {
        flex: 0.5,
        alignItems: 'flex-end',
    },
    loginbtn: {
        backgroundColor: colors.primary,
        paddingHorizontal: dpSpacing(2.5),
        paddingVertical: dpSpacing(1),
        borderRadius: dpHeight(10)
    },
    loginbtntxt: {
        fontSize: dpFont(14),
        color: colors.white,
        fontFamily: Font.regular
    },
    signbtntxt: {
        fontSize: dpFont(15),
        color: colors.black,
        fontFamily: Font.regular
    },
    loginbtnright: {
        flex: 0.5,
        alignItems: 'flex-end',
    },
    heading: {
        fontSize: dpFont(17),
        color: colors.black,
        fontFamily: Font.medium
    },
    // backIcon: {
    //     height: dpImageHeight(60),
    //     width: dpImageWidth(60),
    //     borderRadius: dpHeight(10),
    //     backgroundColor: colors.primary,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    backIcon: {
        height: dpWidth(12),
        width: dpWidth(12),
        borderRadius: dpHeight(20),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    }
});