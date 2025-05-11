import { StyleSheet } from 'react-native';
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth } from '../../../assets/styles/Sizes';
import { Font } from '../../../assets/styles/FontsFamily';
import { colors } from '../../../assets/styles/Colors';


export const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.white,
        flex: 1
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: colors.white
    },
    innerView: {
        flex: 1,
        paddingHorizontal: dpHeight(3)
    },
    heading: {
        fontSize: dpFont(16),
        fontFamily: Font.medium,
        color: colors.black,
        paddingTop: dpHeight(1)
    },
    flatListStyle: {
        marginHorizontal: dpHeight(-3),
        marginTop: dpHeight(2)
    },
    flatContainer: {
        marginHorizontal: dpHeight(3),
        paddingRight: dpHeight(3.5)
    },
    tab: {
        marginRight: dpHeight(2)
    },
    bikeImgBg: {
        height: dpImageHeight(80),
        width: dpImageWidth(80),
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: dpFont(20)
    },
    bikeImg: {
        height: dpImageHeight(60),
        width: dpImageWidth(60),
    },
    title: {
        fontSize: dpFont(16),
        fontFamily: Font.regular,
        color: colors.black,
        textAlign: 'center',
        paddingTop: dpHeight(1.5)
    },
    bannerView: {
        borderWidth: dpBorderWidth(0.6),
        borderColor: colors.lightGrey,
        borderRadius: dpFont(12),
        paddingTop: dpHeight(2),
        paddingHorizontal: dpHeight(2),
        marginTop: dpHeight(5),
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: dpHeight(1.5)
    },
    bannerHeading: {
        fontSize: dpFont(26),
        fontFamily: Font.medium,
        color: colors.blueColor2,

    },
    bannerDesc: {
        fontSize: dpFont(15),
        fontFamily: Font.regular,
        color: colors.lightGrey2,
        paddingTop: dpHeight(0.5)

    },
    bannerBg: {
        height: dpImageHeight(115),
        width: dpImageWidth(140),
        overflow: 'hidden'
    },
    leftCol: {
        flex: 0.6,
    },
    rightCol: {
        flex: 0.4,
    },
    row2: {
        flexDirection: 'row',
        borderBottomWidth: dpBorderWidth(0.7),
        borderColor: colors.lightGrey,
        paddingBottom: dpHeight(1.3),
        marginTop: dpHeight(2)
    },
    leftSide: {
        flex: 0.8,
        flexDirection: 'row',
        columnGap: dpHeight(2),
    },
    rightSide: {
        flex: 0.2,
    },
    arrowCircleBg: {
        width: dpImageWidth(50),
        height: dpImageHeight(50),
        borderRadius: dpHeight(10),
        overflow: 'hidden',
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowCircle: {
        width: dpImageWidth(22),
        height: dpImageHeight(18),
        overflow: 'hidden'
    },
    Info: {
        flex: 1,
        justifyContent: 'center',
    },
    title2: {
        fontSize: dpFont(14),
        fontFamily: Font.regular,
        color: colors.black,
    },
    desc2: {
        fontSize: dpFont(12),
        fontFamily: Font.regular,
        color: colors.darkGrey,
        flexWrap: 'wrap',
    },
    dots: {
        width: dpImageWidth(28),
        height: dpImageHeight(28),
        borderRadius: dpFont(10),
        backgroundColor: colors.primary,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'

    },
    deleteTab: {
        backgroundColor: colors.white,
        borderRadius: dpFont(12),
        width: dpImageWidth(110),
        paddingHorizontal: dpHeight(2),
        paddingVertical: dpHeight(1.2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        alignItems: 'center',
        elevation: 8,
        position: 'absolute',
        // marginRight: dpHeight(1),
        top: dpHeight(0.5),
        left: dpHeight(-5.5)
    },
    deleteTxt: {
        fontSize: dpFont(14),
        fontFamily: Font.regular,
        color: colors.darkGrey,
        flexWrap: 'wrap',
    },
    bannerRow: {
        flexDirection: 'row',
        paddingHorizontal: dpHeight(2),
        paddingTop: dpHeight(2),
    },
    bannerLeft: {
        flex: 0.6,
    },
    bannerRight: {
        flex: 0.4,
    },
    bannerTitle2: {
        fontSize: dpFont(26),
        fontFamily: Font.medium,
        color: colors.white,
    },
    bannerDesc2: {
        fontSize: dpFont(14),
        fontFamily: Font.regular,
        color: colors.white,
    },
    autoImg: {
        height: dpImageHeight(140),
        width: dpImageWidth(170),
        justifyContent: 'flex-end',
        marginTop: dpHeight(-1.5)
    },
    banner2: {
        width: '100%',
        position: 'relative',
        marginTop: dpHeight(2.5)
    },

    bannerBackgroundOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.primary,
        borderRadius: dpFont(10),
        zIndex: 0,
    },

    bannerBg2: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        borderRadius: dpFont(10),
        overflow: 'hidden',
        zIndex: 1,
    },

    bannerImageStyle: {
        borderRadius: dpFont(10),
        opacity: 0.2,

    },
    bottomView: {
        marginTop: dpHeight(1),
        marginHorizontal: dpHeight(-3),
    },

    bgImg3: {
        width: '100%',
        height: dpImageHeight(250)
    },

    branding: {
        paddingHorizontal: dpHeight(3),
        paddingTop: dpHeight(13)
    },
    mio: {
        fontSize: dpFont(36),
        color: colors.black,
        fontFamily: Font.bold,
    },
    ryde: {
        color: colors.darkGrey,
        fontFamily: Font.bold,
    },
    madeTxt: {
        fontSize: dpFont(14),
        color: colors.grey2,
        fontFamily: Font.regular
    },

})