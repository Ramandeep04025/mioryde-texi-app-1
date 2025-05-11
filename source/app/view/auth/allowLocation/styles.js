import { StyleSheet } from 'react-native';
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
    body: {
        marginTop: dpHeight(5)
    },
    bottomButton: {
        position: 'absolute',
        bottom: dpHeight(2)
    },
    enterManullayButtn: {
        marginTop: dpHeight(3)
    },
    entermanullyButtonStyle: {
        backgroundColor: '#F4F6F8'
    },
    centerTextBody: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    locationIconMian: {
        height: dpImageHeight(40),
        width: dpImageWidth(40)
    },
    text1: {
        fontSize: dpFont(34),
        color: colors.black,
        fontFamily: Font.medium,
        marginTop: dpHeight(2)
    },
    text2: {
        fontSize: dpFont(14),
        color: colors.darkGrey,
        fontFamily: Font.regular,
        marginTop: dpHeight(1.5),
        marginHorizontal: dpWidth(14),
        textAlign: 'center'
    }
})