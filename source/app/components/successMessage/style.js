import { colors } from "../../../assets/styles/Colors";
import { Font } from "../../../assets/styles/FontsFamily";
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from "../../../assets/styles/Sizes";


const { StyleSheet } = require("react-native");


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    viewMain: {
        alignItems: 'center'
    },
    congrats: {
        fontSize: dpFont(24),
        color: colors.red,
        fontFamily: Font.bold,
        paddingTop:dpHeight(10)
    },
    message: {
        fontSize: dpFont(14),
        color: colors.darkGrey,
        fontFamily: Font.semiBold,
        paddingVertical:dpFont(25)
    },
    viewImage: {
        height: dpImageHeight(230),
        width: dpImageWidth(220),
        marginTop:dpHeight(2),
    },
    viewBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: dpWidth(5),
        marginTop:dpHeight(8)
    },
    viewCol1: {
        flex: 0.5,
        paddingRight:dpWidth(2)
    },
    viewCol2: {
        flex: 0.5,
        paddingLeft:dpWidth(2)
    },
    btnStyle1: {
        height: dpHeight(6),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: dpHeight(4),
    },
    btnStyle: {
        height: dpHeight(6),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderWidth: dpBorderWidth(1),
        borderColor:colors.red,
        borderRadius: dpHeight(5),
    },
    titleStyle: {
        fontFamily: Font.regular,
        color: colors.red,
        fontSize: dpFont(16)
    },
    account: {
        fontSize: dpFont(16),
        color: colors.darkGrey,
        fontFamily: Font.semiBold,
        textAlign:'center',
        textDecorationLine: 'underline',
        position: 'absolute',
        bottom:dpHeight(2)
    }
});
export default styles;