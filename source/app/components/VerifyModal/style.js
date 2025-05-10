import { StyleSheet } from 'react-native'
import { dpFont, dpHeight, dpWidth } from '../../../assets/styles/Sizes'
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
    absulateImage: {
        position: 'absolute',
        top: dpHeight(-11),
        width: dpWidth(100),
        zIndex: 999,
        height: dpHeight(22)
    },
    absulateSub: {
        width: dpWidth(100),
        zIndex: 999,
        height: dpHeight(12),
        marginBottom: dpHeight(-8),
        marginLeft: dpWidth(10)
    },
    meeageMain: {
        marginTop: dpHeight(8),
        marginVertical: dpHeight(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: dpFont(20),
        color: colors.black,
        fontFamily: Font.medium,
    },
    dis: {
        fontSize: dpFont(14),
        color: colors.darkGrey,
        fontFamily: Font.regular,
        textAlign: 'center',
        marginHorizontal: dpWidth(10)
    }
});
