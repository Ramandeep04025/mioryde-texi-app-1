import { StyleSheet } from 'react-native'
import { dpBorderWidth, dpFont, dpHeight, dpSpacing, dpWidth } from '../../../assets/styles/Sizes'
import { colors } from '../../../assets/styles/Colors'
import { Font } from '../../../assets/styles/FontsFamily'

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 0,
    },
    maincontainer: {
        backgroundColor: colors.white,
        width: '100%',
        maxHeight: dpHeight(89),
        borderTopLeftRadius: dpHeight(5),
        borderTopRightRadius: dpHeight(5),
        overflow: 'hidden',
    },
    heading: {
        paddingHorizontal: dpWidth(6),
        paddingVertical: dpHeight(2),
        borderBottomWidth: dpBorderWidth(0.5),
        borderBottomColor: colors.lightGrey1
    },
    messageTxt: {
        color: colors.darkGrey,
        fontSize: dpFont(18),
        fontFamily: Font.bold,
    },
    viewInput: {
        marginTop: dpHeight(3)
    },
    viewScoll: {
        paddingTop: dpHeight(0.01)
    },
    inputStyle: {
        height: dpHeight(7),
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: dpHeight(8),
        fontSize: dpFont(16),
        fontFamily: Font.medium,
        paddingLeft: dpWidth(7),
        paddingRight: dpWidth(5),
        color: colors.darkGrey,
    },
    inputStyle1: {
        maxHeight: dpHeight(10),
        flexGrow: 1,
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: dpHeight(4),
        fontSize: dpFont(16),
        fontFamily: Font.medium,
        paddingLeft: dpWidth(7),
        paddingRight: dpWidth(7),
        paddingTop: dpHeight(2.5),
        color: colors.darkGrey,
    },
    viewCheckbox: {
    },
    checkboxmain: {
        marginVertical: dpHeight(1)
    },
    errorText: {
        color: '#f44336',
        fontSize: dpFont(12),
        marginTop: dpHeight(0.5),
        // marginLeft: dpWidth(2),
        textAlign:'center',
        fontFamily: Font.regular
      },
    btttnmain: {
        position: 'absolute',
        bottom: dpHeight(1),
        paddingVertical: dpHeight(2),
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: dpWidth(6),
        width: '100%',
    },
    btnView: {

        flexDirection: 'row',
        alignItems: 'center',
    },
    Col1: {
        flex: 0.40,
        alignItems: 'center'
    },
    Col2: {
        flex: 0.60,
    },
    clearTxt: {
        color: colors.darkGrey,
        fontSize: dpFont(16),
        fontFamily: Font.bold,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: dpHeight(20),
        paddingHorizontal: dpWidth(6),
    },
    labelStyle: {
        color: colors.darkGrey,
        fontSize: dpFont(13),
        fontFamily: Font.regular,
    },
    btnStyle: {
        height: dpHeight(7),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGray,
        borderRadius: dpHeight(5),
    },
    btnContainerStyle: {
        marginBottom: dpHeight(3)
    }
});
