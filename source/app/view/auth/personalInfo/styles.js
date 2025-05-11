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
        marginVertical: dpHeight(2),
    },
    mainLabel: {
        fontSize: dpFont(34),
        color: colors.black,
        fontFamily: Font.medium,
        marginBottom: dpHeight(-1)
    },
    screenLabelContainer: {
        marginTop: dpHeight(8)
    },
    lockmain: {
        height: dpHeight(4),
        width: dpWidth(8),
        marginBottom: dpHeight(1.5)
    },
    text2: {
        fontSize: dpFont(14),
        color: colors.darkGrey,
        fontFamily: Font.regular,
        marginTop: dpHeight(3)
    },
    text3: {
        fontSize: dpFont(14),
        color: colors.black,
        fontFamily: Font.medium,
        marginTop: dpHeight(1)
    },
    userimage: {
        height: dpImageHeight(100),
        width: dpImageWidth(100),
        borderRadius: dpWidth(300),
        overflow: "hidden",
        marginTop: dpHeight(1.5)
    },
    passvaliTextMain: {
        marginTop: dpHeight(-1),
        marginBottom: dpHeight(1),
        marginHorizontal:dpWidth(5)
    },
    passvaliText : {
        fontSize: dpFont(12),
        color: colors.black,
        fontFamily: Font.regular,
        marginLeft:dpWidth(1)
    }
})