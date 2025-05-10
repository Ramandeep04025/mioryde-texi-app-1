import { View, Text, Image } from 'react-native'
import styles from './style'
import { Images } from '../../../assets/styles/Images' 
import globalStyles from '../../../assets/styles/GlobalStyles' 
import Button from '../Button' 

const SuccessMessage = () => {
    return (
        <View style={styles.main}>
            <View style={styles.viewMain}>
                <Text style={styles.congrats}>Congratulations</Text>
                <Text style={styles.message}>
                    Your car has been listed successfully 
                </Text>
                <View style={styles.viewImage}>
                    <Image
                        source={Images.successFull}
                        style={globalStyles.image}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.viewBtn}>
                    <View style={styles.viewCol1}>
                        <Button
                            title='Post another car'
                            buttonStyle={styles.btnStyle1}
                        />
                    </View>
                    <View style={styles.viewCol2}>
                        <Button
                            title='See my listing'
                            buttonStyle={styles.btnStyle}
                            titleStyle={styles.titleStyle}
                        />
                    </View>
                </View>
            </View>
            <Text style={styles.account}>Go to my Account</Text>
        </View>
    )
};

export default SuccessMessage