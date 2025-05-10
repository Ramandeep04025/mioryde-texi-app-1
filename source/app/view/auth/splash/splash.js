import { View, Image, StatusBar } from 'react-native'
import styles from './styles'
import { Images } from '../../../../assets/styles/Images'
import { colors } from '../../../../assets/styles/Colors';


const SplashScreen = () => {
  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={colors.black}
        barStyle={"light-content"}
      />
      <Image
        source={Images.splash}
        resizeMode="contain"
      />
    </View>
  )
};

export default SplashScreen