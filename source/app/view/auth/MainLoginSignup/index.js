import { StatusBar, Text, TouchableOpacity } from "react-native";
import { View } from "react-native"
import styles from "./style";
import globalStyles from "../../../../assets/styles/GlobalStyles";
import { Image } from "react-native";
import { Images } from "../../../../assets/styles/Images";
import { colors } from "../../../../assets/styles/Colors";
import Login from "../login";
import SignupAndOTPVerify from "../SignupAndOTPVerify"
import { useState } from "react";


const MainLoginSignup = () => {
    const [activeScreen, setActiveScreen] = useState("login");

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
                    <TouchableOpacity onPress={() => setActiveScreen("login")} style={activeScreen === "login" ? styles.LoginbuttonActive : styles.Loginbutton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveScreen("signup")} style={activeScreen === "signup" ? styles.signUpbuttonActive : styles.signUpbutton}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.screenBody}>
                    {
                        activeScreen === "login" ?
                            <Login /> :
                            activeScreen === "signup" ?
                                <SignupAndOTPVerify />
                                :
                                null
                    }
                </View>
            </View>
        </View>
    )
};

export default MainLoginSignup