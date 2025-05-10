import { StyleSheet } from 'react-native'
import { dpBorderWidth, dpFont, dpHeight, dpWidth } from '../../../assets/styles/Sizes'
import { colors } from '../../../assets/styles/Colors'
import { Font } from '../../../assets/styles/FontsFamily'

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 0,
    },
    maincontainer: {
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: dpHeight(3),
        paddingHorizontal: dpWidth(5),
        paddingVertical: dpHeight(1),
        alignItems: 'center'
    },
    row: {
        alignItems: 'center',
        paddingVertical: dpHeight(2)
    },
    col1: {
        flex: 0.6,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    col2: {
        flex: 0.4,
    },
    viewImage: {
        height: dpHeight(9),
        width: dpHeight(9)
    },
    title: {
        fontSize: dpFont(28),
        color: colors.red,
        fontFamily: Font.heavy,
        paddingBottom: dpFont(3)
    },
    name: {
        fontSize: dpFont(18),
        color: colors.grey6,
        fontFamily: Font.semiBold,
        textAlign: 'center',
        paddingBottom: dpHeight(1)
    },
    discription: {
        fontSize: dpFont(14),
        color: colors.grey6,
        fontFamily: Font.regular,
        textAlign: 'center',
        paddingVertical: dpHeight(1),
        lineHeight: dpFont(20)
    },
    available: {
        fontSize: dpFont(19),
        color: colors.primary,
        fontFamily: Font.bold,
        textAlign: 'center',
        paddingTop: dpHeight(3)
    },
    viewIcon: {
        position: 'absolute',
        top: dpHeight(1.3),
        right: dpHeight(1.3),
    },
    btnStyle: {
        height: dpHeight(7),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: dpHeight(5),
    },
    viewBtn: {
        width:'100%',
        marginTop: dpHeight(2),
        marginBottom:dpHeight(1)
    },
    otpContainer: {
        // borderWidth: 2
        // justifyContent: 'center',
        // alignSelf: 'center',
        // paddingHorizontal: dpWidth(5),
    },
    otpTextInput: {
        borderWidth: dpBorderWidth(1),
        borderBottomWidth: dpBorderWidth(1),
        borderRadius: dpHeight(1),
        width: dpHeight(5.5),
        // marginRight: dpHeight(0.8),
        backgroundColor: colors.grey1,
        height: dpHeight(6.5),
        borderColor: colors.primary,
        color: colors.black,
        fontSize: dpFont(18),
    },
    inputsMain:{
        marginTop: dpHeight(2),
        marginBottom: dpHeight(1),
    }
});
