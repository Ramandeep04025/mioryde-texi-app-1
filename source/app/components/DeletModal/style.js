import { StyleSheet } from 'react-native'
import { dpBorderWidth, dpFont, dpHeight, dpWidth } from '../../../assets/styles/Sizes'
import { colors } from '../../../assets/styles/Colors'
import { Font } from '../../../assets/styles/FontsFamily'

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    maincontainer: {
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: dpHeight(3),
        paddingHorizontal: dpWidth(6),
        paddingVertical: dpHeight(3),
        alignItems: 'center'
    },
    viewIcon: {
        position: 'absolute',
        top: dpHeight(1.3),
        right: dpHeight(1.3),
    },
    btnStyle1: {
        height: dpHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: dpHeight(5),
        borderWidth: dpFont(1),
        borderColor: colors.grey
    },
    btnStyle: {
        height: dpHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: dpHeight(5),
    },
    titleStyle: {
        fontFamily: Font.regular,
        color: colors.black,
        fontSize: dpFont(16)
    },
    viewBtn: {
        marginTop: dpHeight(2),
        marginBottom: dpHeight(1)
    },
    button1: {
        flex: 0.5,
        marginRight: dpWidth(3)
    },
    button2: {
        flex: 0.5
    },
    deletIconSub: {
        height: dpFont(70),
        width: dpFont(70),
        borderRadius: dpFont(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: dpFont(1),
        borderColor: colors.primary
    },
    meeageMain: {
        marginVertical: dpHeight(3)
    },
    message: {
        fontSize: dpFont(16),
        color: colors.darkGrey,
        fontFamily: Font.semiBold,
    }
});
