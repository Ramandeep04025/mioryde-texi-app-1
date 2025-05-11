import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets/styles/Colors';
import { dpFont, dpHeight } from '../../../../assets/styles/Sizes';
import { Font } from '../../../../assets/styles/FontsFamily';


export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: dpHeight(2)
    },
    text1: {
        fontSize: dpFont(32),
        color: colors.black,
        fontFamily: Font.semiBold,
        marginTop :dpHeight(2)
    },
    bottomBody: {
        marginTop : dpHeight(4)
    },
    bottomButton: {
        position: 'absolute',
        bottom: dpHeight(3)
    },
    forget : {
        fontSize: dpFont(14),
        color: colors.black,
        fontFamily: Font.regular,
        marginTop : dpHeight(-1.5)
    },
    bottomtextMain : {
        marginTop : dpHeight(2.5)
    },
    bottomtext : {
        fontSize: dpFont(13),
        color: colors.black,
        fontFamily: Font.regular,
    },
    terms : {
        fontSize: dpFont(13),
        color: colors.primary,
        fontFamily: Font.regular,
    }
})