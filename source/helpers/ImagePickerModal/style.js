import { StyleSheet} from 'react-native'
import { dpBorderWidth, dpFont, dpHeight, dpWidth } from '../../assets/styles/Sizes';
import { colors } from '../../assets/styles/Colors';
import { Font } from '../../assets/styles/FontsFamily';


export const styles = StyleSheet.create({
    main: {
      maxHeight: dpHeight(50),
      marginHorizontal: dpWidth(2),
      backgroundColor: colors.white,
      borderRadius: dpHeight(2),
      paddingVertical: dpHeight(2),
      paddingHorizontal: dpHeight(2),
      overflow: 'hidden',
    },
    header: {
      textAlign: 'center',
      fontFamily: Font.semiBold,
      fontSize: dpFont(20),
      color: colors.black,
    },
    list: {
      // marginTop: dpHeight(1),
    },
    row: {
      flexDirection: 'row',
      paddingVertical: dpHeight(2),
      paddingHorizontal: dpWidth(2),
      borderRadius: dpBorderWidth(10),
      backgroundColor: colors.grey1,
      marginTop: dpWidth(2),
      marginBottom: dpWidth(2),
    },
    left: {
      flex: 0.30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: dpHeight(7),
      width: dpHeight(7),
      padding: dpHeight(2),
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    right: {
      flex: 0.70,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    title: {
      fontFamily: Font.medium,
      fontSize: dpFont(20),
      color: colors.black
    },
    progress: {
      borderRadius: dpHeight(0.6),
      height: dpHeight(5),
      marginBottom: dpHeight(13),
    },
    progressText: {
      fontFamily: Font.medium,
      fontSize: dpFont(15),
      color: colors.red,
      marginBottom: dpHeight(2),
      textAlign: 'center',
    },
    cross: {
      zIndex: 99,
      position: 'absolute',
      top: dpHeight(2),
      right: dpWidth(4)
    },
  });