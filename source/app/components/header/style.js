import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";
import { Font } from "../../../assets/styles/FontsFamily";


export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: dpWidth(5),
        paddingTop: Platform.OS === "ios" ? dpHeight(6.5) : dpHeight(5.2),
        paddingBottom: dpHeight(0.2),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftSideContainer: {
        flex: 0.37,
        alignItems: 'flex-start'
    },
    centerPart: {
        flex: 0.26,
        // backgroundColor:'red',
        alignItems: 'center'
    },
    rightSideContainer: {
        flex: 0.37,
        alignItems: 'flex-end',
        // backgroundColor:'red',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    viewImage: {
        width: dpImageWidth(70),
        height: dpImageHeight(55),
    },
    viewImageright2: {
        width: dpImageWidth(43),
        height: dpImageHeight(43),
        borderRadius: dpHeight(100),
        overflow: 'hidden',
        borderColor: colors.darkGray,
        borderWidth: dpFont(3),
        justifyContent  : 'center',
        alignItems : 'center'
    },
    viewImageright: {
        width: dpImageWidth(38),
        height: dpImageHeight(38),
        borderRadius: dpHeight(100),
        overflow: 'hidden',
        borderColor: colors.white,
        borderWidth: dpFont(3)
    },
    loginbtnMian: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
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
});