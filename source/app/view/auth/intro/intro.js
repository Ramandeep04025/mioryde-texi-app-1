import { useState } from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../assets/styles/Colors';
import globalStyles from '../../../../assets/styles/GlobalStyles';
import { Images } from '../../../../assets/styles/Images';
import styles from './style';


const IntroScreen = (props) => {
    const [secondSplash, setSecondSplash] = useState(false);

    const handleNext = () => {
        if (secondSplash) {
            onNavigate();
        }
        else {
            setSecondSplash(true)
        }
    };

    const onNavigate = () => {
        // props.navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'login' }],
        // })
        props.navigation.navigate('login-signup')
    };

    return (
        <View style={styles.main}>
            <StatusBar
                backgroundColor={colors.transparent}
                barStyle={"dark-content"}
                translucent={true}
            />
            <View style={styles.abuslateBackgroundImg}>
                <ImageBackground
                    style={globalStyles.image}
                    source={Images.introback2}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.skipMain} >
                {!secondSplash && <Text styles={styles.skip}>Skip</Text>}
            </View>
            <View style={styles.imageMain}>
                <Image
                    style={globalStyles.image}
                    source={secondSplash ? Images.dropBox : Images.steptodown}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.mainContent}>
                <Text style={styles.Label}>{secondSplash ? "Deliver Faster." : "Move Smart."}</Text>
                <Text style={styles.subLabel}>{secondSplash ? "Door-to-Door Drops" : "Safe. Swift. Simple."}</Text>
                <TouchableOpacity onPress={() => handleNext()} style={styles.nextButton}>
                    <Text style={styles.nextText}>{secondSplash ? "Join now" : "Next"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.abuslateBackgroundImgBottom}>
                <ImageBackground
                    style={globalStyles.image}
                    source={Images.introback1}
                    resizeMode='contain'
                />
            </View>
        </View>
    )
};

export default IntroScreen