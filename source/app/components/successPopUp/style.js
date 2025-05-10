import { StyleSheet } from 'react-native'
import { dpBorderWidth, dpFont, dpHeight, dpWidth } from '../../../assets/styles/Sizes'
import { colors } from '../../../assets/styles/Colors'
import { Font } from '../../../assets/styles/FontsFamily'

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 0,
    },
    maincontainer: {
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: dpHeight(3),
        paddingHorizontal: dpWidth(5),
        paddingVertical: dpHeight(1),
        alignItems: 'center'
    },
    btnContainerStyle: {
        marginTop: dpHeight(2),
        marginBottom:dpHeight(1)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: dpHeight(2)
    },
    mainhead2: {
      marginTop:dpHeight(5)
    },
    col1: {
        flex: 0.6,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    col2: {
        flex: 0.4,
    },
    viewImage: {
        height: dpHeight(9),
        width: dpHeight(9)
    },
    title: {
        fontSize: dpFont(28),
        color: colors.red,
        fontFamily: Font.heavy,
        paddingBottom: dpFont(3)
    },
    name: {
        fontSize: dpFont(18),
        color: colors.grey6,
        fontFamily: Font.semiBold,
        textAlign: 'center',
        paddingVertical: dpHeight(1)
    },
    discription: {
        fontSize: dpFont(14),
        color: colors.grey6,
        fontFamily: Font.regular,
        textAlign: 'center',
        paddingVertical: dpHeight(1),
        lineHeight: dpFont(20)
    },
    available: {
        fontSize: dpFont(19),
        color: colors.primary,
        fontFamily: Font.bold,
        textAlign: 'center',
        paddingTop: dpHeight(3)
    },
    number: {
        fontSize: dpFont(20),
        color: colors.primary,
        fontFamily: Font.bold,
        textAlign: 'center'
    },
    creditRing1: {
        height: dpHeight(16.5),
        width: dpHeight(16.5),
        borderRadius: dpHeight(8),
        borderWidth: dpBorderWidth(0.4),
        borderColor: colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: dpHeight(2),
        marginBottom: dpHeight(1)
    },
    creditRing2: {
        height: dpHeight(14.5),
        width: dpHeight(14.5),
        borderRadius: dpHeight(8),
        borderWidth: dpBorderWidth(0.4),
        borderColor: colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow : { 
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
    },
    shadow2 : { 
        shadowColor: colors.red,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: dpHeight(1.5),
        shadowRadius: 12,
        elevation: 8,
    },
    creditRing: {
        height: dpHeight(12),
        width: dpHeight(12),
        borderRadius: dpHeight(8),
        backgroundColor: colors.pink,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewIcon: {
        position: 'absolute',
        top: dpHeight(1.3),
        right: dpHeight(1.3),
    },
    btnStyle: {
        height: dpHeight(7),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: dpHeight(5),
    },
    viewBtn: {
        width:'100%',
        marginTop: dpHeight(2),
        marginBottom:dpHeight(1)
    }
});
