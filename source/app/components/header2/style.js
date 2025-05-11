import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";
import { Font } from "../../../assets/styles/FontsFamily";


export const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.white,
        paddingHorizontal: dpWidth(5),
        paddingTop: Platform.OS === "ios" ? dpHeight(6.5) : dpHeight(6.5),
        borderBottomLeftRadius: dpHeight(4),
        borderBottomRightRadius: dpHeight(4),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 8,
        marginBottom: dpHeight(2)

    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftSideContainer: {
        flex: 0.37,
        alignItems: 'flex-start'
    },
    barImg: {
        // height: dpImageHeight(10),
        // width: dpImageWidth(32)
        height: dpImageHeight(10),
        width: dpImageWidth(32)
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
    // viewImageright2: {
    //     width: dpImageWidth(43),
    //     height: dpImageHeight(43),
    //     borderRadius: dpHeight(100),
    //     overflow: 'hidden',
    //     borderColor: colors.darkGray,
    //     borderWidth: dpFont(3),
    //     justifyContent  : 'center',
    //     alignItems : 'center'
    // },
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
    backIcon: {
        height: dpImageHeight(60),
        width: dpImageWidth(60),
        borderRadius: dpHeight(10),
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});