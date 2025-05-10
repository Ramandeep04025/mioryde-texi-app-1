import { StatusBar, Text, TouchableOpacity } from "react-native";
import { View } from "react-native"
import styles from "./style";
import globalStyles from "../../../../assets/styles/GlobalStyles";
import { Image } from "react-native";
import { Images } from "../../../../assets/styles/Images";
import { colors } from "../../../../assets/styles/Colors";
import Login from "../login";
import Signup from "../signup";


const MainLoginSignup = () => {

    return (
        <View style={styles.main}>
            <StatusBar
                backgroundColor={colors.transparent}
                barStyle={"light-content"}
            />
            <View style={styles.view1}>
                <View style={styles.locationLogo}>
                    <Image
                        style={globalStyles.image}
                        source={Images.locationIcon}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <View style={styles.view2}>
                <View style={styles.absulateScreenlabel}>
                    <TouchableOpacity style={styles.Loginbutton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpbutton}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.screenBody}>
                   {/* <Login /> */}
                   <Signup />
                </View>
            </View>
        </View>
    )
};

export default MainLoginSignup