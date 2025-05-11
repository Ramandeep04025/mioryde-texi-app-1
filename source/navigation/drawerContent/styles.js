
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
        paddingTop: dpHeight(0.5),
        paddingBottom: dpHeight(7)
    },
    body: {
        flexGrow: 1,
    },
    logout: {
        fontSize: dpFont(19),
        color: colors.white,
        fontFamily: Font.regular,
    },
    content: {
        flex: 1,
        marginLeft: dpHeight(-2),
        marginTop: dpHeight(2)
    },
    drawerItemContainer: {
        borderRadius: dpHeight(5),
        overflow: 'hidden',
        justifyContent: 'center',
        marginLeft: dpHeight(3),
        marginRight: dpHeight(2)
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: dpHeight(12),
        paddingBottom: dpHeight(2),
        paddingLeft: dpHeight(3)
    },
    profileImg: {
        height: dpImageHeight(60),
        width: dpImageWidth(60),
        overflow: 'hidden'
    },
    seperator: {
        height: dpImageHeight(10),
        width: '100%',
        marginVertical: dpHeight(1)
    },
    btnView: {
        marginTop: dpHeight(3),
        marginLeft: dpHeight(3),
        marginRight: dpHeight(1.5),
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    logIcon: {
        height: dpImageHeight(24),
        width: dpImageWidth(24),
        overflow: 'hidden',
    },
    name: {
        fontSize: dpFont(16),
        color: colors.black,
        fontFamily: Font.regular,
        paddingLeft: dpHeight(1.5)
    },
    editBtn: {
        paddingHorizontal: dpHeight(1.5),
        paddingTop: dpHeight(0.5),
        backgroundColor: colors.white,
        alignSelf: 'flex-start',
        borderRadius: dpHeight(2),
        marginTop: dpHeight(1)
    },
    editBtnTxt: {
        fontSize: dpFont(16),
        color: colors.black,
        fontFamily: Font.regular
    },
    icon: {
        height: dpImageHeight(22),
        width: dpImageWidth(24),
        overflow: 'hidden',
    },
    title: {
        fontSize: dpFont(16),
        color: colors.black,
        fontFamily: Font.regular,
        paddingLeft: dpHeight(0.4),
    },
    titleStyle: {
        textAlign: 'left',
        paddingLeft: dpHeight(2)
    },
    buttonStyle: {
        paddingLeft: dpHeight(5),
        paddingRight: dpHeight(5),
        borderRadius: dpFont(18),
        paddingVertical: dpHeight(2)
    },
    profileBg: {
        height: dpImageHeight(200),
        width: '100%',
        overflow: 'hidden',
        marginBottom: dpHeight(-3.5)
    }
});