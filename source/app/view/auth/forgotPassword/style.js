import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../../../assets/styles/Colors';
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from '../../../../assets/styles/Sizes';
import { Font } from '../../../../assets/styles/FontsFamily';


export const styles = StyleSheet.create({
    ScrollView: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: dpWidth(5)
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: dpHeight(2),
    },
    subMain: {
        zIndex: 9999,
        marginTop: Platform.OS === 'ios' ? dpHeight(-24) : dpHeight(-26.5)
    },
    text1: {
        fontSize: dpFont(22),
        color: colors.white,
        fontFamily: Font.bold
    },
    text2: {
        fontSize: dpFont(16),
        color: colors.white,
        fontFamily: Font.regular,
    },
    subImageMain: {
        height: dpImageHeight(155),
        backgroundColor: colors.transparent,
        marginTop: dpHeight(1.8),
    },
    bottomBody: {
        // marginVertical: dpHeight(0),
    },
    bottomButton: {
        position: 'absolute',
        bottom: dpHeight(4)
    }
})