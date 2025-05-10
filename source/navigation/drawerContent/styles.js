
import { Platform, StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/Colors';
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from '../../assets/styles/Sizes';
import { Font } from '../../assets/styles/FontsFamily';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.brown,
        paddingTop: Platform.OS === "ios" ? dpHeight(6) : dpHeight(0)
    },
    scroll: {
        flexGrow: 1,
        paddingTop:dpHeight(0.5),
        paddingBottom:dpHeight(7)
        // backgroundColor: 'red'

    },
    scrollCont: {
        flexGrow: 1,
        paddingBottom: Platform.OS === "ios" ? dpHeight(15) : dpHeight(24)
    },
    body: {
        flexGrow: 1,
        paddingLeft: dpHeight(2.5),
    },
    name2: {
        marginLeft: dpHeight(-1),
        fontSize: dpFont(16),
        color: colors.white,
        fontFamily: Font.medium,
    },
    itemMain: {
        marginTop: Platform.OS === 'ios' ? dpHeight(4) : dpHeight(4),
    },
    itemMain2: {
        marginTop: Platform.OS === 'ios' ? dpHeight(3) : dpHeight(3),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: dpHeight(1.2),
    },
    rowFlex1: {
        flexDirection: 'row',
        paddingVertical: dpHeight(0.3),
        paddingHorizontal: dpHeight(1),
        alignItems: 'center',
    },
    logoutCon: {
        flexDirection: 'row',
        // paddingVertical: dpHeight(1),
        paddingBottom: dpHeight(2),
        paddingLeft: dpHeight(9),
        alignItems: 'center'
    },
    logoutMain: {
        marginVertical: dpHeight(4)
    },
    logout: {
        fontSize: dpFont(19),
        color: colors.white,
        fontFamily: Font.regular,
    },
    closeIconMain: {
        marginTop: Platform.OS === 'ios' ? dpHeight(2) : dpHeight(7),
        marginBottom: Platform.OS === 'ios' ? dpHeight(2) : dpHeight(2),
        marginHorizontal: dpWidth(3)
    },
    logoutContainer: {
        zIndex: 9999,
        marginTop: dpHeight(-5.5),
        marginLeft: dpWidth(12),
        zIndex: 999999999999,
        // backgroundColor: colors.greyMain
    },
    bottomImage: {
        height: dpImageHeight(50),
        width: dpImageWidth(310),
        overflow: 'hidden'
    },
    imageMain: {
        height: dpImageHeight(20),
        width: dpImageWidth(20),
        overflow: 'hidden'
    },
    leftArea: {
        flex: .15
    },
    rightArea: {
        flex: 0.85
    },
    iconMain: {
        height: dpHeight(4.2),
        width: dpWidth(8.4),
        backgroundColor: colors.lightGrey2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: dpHeight(0.5)
    },
    iconMain2: {
        height: dpHeight(4.2),
        width: dpWidth(8.4),
        backgroundColor: colors.transparent,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: dpHeight(0.5)
    },
    bottomImageMain: {
        position: 'absolute',
        // marginTop: dpHeight(86),
        bottom: dpHeight(5),
        right: dpWidth(-11),
        // width: '100%',
        zIndex: 999999999,
        backgroundColor: colors.brown
    },
    bottomView: {
        backgroundColor: colors.brown,
        position: "absolute",
        bottom: 0,
        borderWidth: 0,
        height: dpHeight(5),
        width: '115%'

    },
    content: {
        flex: 1,
        marginHorizontal:dpHeight(-1)
    },
});