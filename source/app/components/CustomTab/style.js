import { StyleSheet } from 'react-native';
import { dpFont, dpHeight, dpWidth } from '../../../assets/styles/Sizes';
import { colors } from '../../../assets/styles/Colors';
import { Font } from '../../../assets/styles/FontsFamily';



export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
        paddingVertical:dpHeight(0.6),
        paddingHorizontal:dpWidth(1.5),
        borderRadius: dpHeight(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab: {
        flex: 0.5,
        paddingVertical:dpHeight(1.6),
        borderRadius: dpHeight(8),
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    tab2: {
        flex: 0.5,
        paddingVertical:dpHeight(1.6),
        borderRadius: dpHeight(8),
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    text: {
        fontSize: dpFont(14),
        fontFamily: Font.medium,
        color: colors.white,
    },
    text2: {
        fontSize: dpFont(14),
        fontFamily: Font.medium,
        color: colors.black,
    },

});