import { StyleSheet } from 'react-native';
import { colors } from './Colors';
import { dpImageHeight, dpImageWidth } from './Sizes';

const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default globalStyles;
