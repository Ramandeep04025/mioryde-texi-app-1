import { StyleSheet } from 'react-native';
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth } from '../../../assets/styles/Sizes';
import { Font } from '../../../assets/styles/FontsFamily';
import { colors } from '../../../assets/styles/Colors';


export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: dpHeight(5),
        backgroundColor: colors.white
    },
    innerView: {
        flex: 1,
        paddingHorizontal: dpHeight(3)
    },
    top: {
        alignItems: 'center',
        paddingTop: dpHeight(5)
    },
    editIcon: {
        height: dpHeight(6.3),
        width: dpHeight(6.3),
        borderRadius: dpHeight(4),
        overflow: 'hidden',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: dpHeight(12.5)
    },
    profileImg: {
        height: dpImageHeight(140),
        width: dpImageWidth(140),
        borderRadius: dpHeight(30),
        overflow: 'hidden',
    },
    bottom: {
        paddingTop: dpHeight(8)
    },
    row: {
        flexDirection: 'row',
        columnGap: dpHeight(2.5)
    },
    col: {
        flex: 0.5
    },
    rightTxt: {
        fontSize: dpFont(12),
        color: colors.black,
        fontFamily: Font.regular
    },
    btnView: {
        marginTop: dpHeight(8)
    }
})