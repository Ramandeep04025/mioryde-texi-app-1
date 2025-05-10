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
        fontSize: dpFont(23),
        color: colors.black,
        fontFamily: Font.semiBold
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
    }
})