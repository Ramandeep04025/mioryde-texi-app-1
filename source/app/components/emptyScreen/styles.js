import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";
import { Font } from "../../../assets/styles/FontsFamily";


export const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:colors.white,
        padding:dpHeight(3),
    },
    messageView: {
        marginBottom: dpHeight(1),
    },
    message: {
        fontFamily: Font.bold,
        fontSize: dpFont(32),
        color: colors.black,
        textAlign:'center'
    },
    message2: {
        fontFamily: Font.regular,
        fontSize: dpFont(18),
        color: colors.lightGrey2,
        textAlign:'center'
    },
    imgStyle: {
        height: dpImageHeight(150),
        width: dpImageHeight(150),
        alignSelf: 'center',
    }
});