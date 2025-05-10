import { Platform } from "react-native";
import splash from "../app/view/auth/splash";
import Intro from "../app/view/auth/intro";
import login from "../app/view/auth/login";
import MainLoginSignup from "../app/view/auth/MainLoginSignup";
const { createStackNavigator, TransitionPresets } = require("@react-navigation/stack");

const Stack = createStackNavigator();

const StackScreens = () => (
  <Stack.Navigator
    initialRouteName="splash"
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      presentation: Platform.OS === 'android' ? 'modal' : null,
    }}
  >
    <Stack.Screen
      name="splash"
      component={splash}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="intro"
      component={Intro}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="login-signup"
      component={MainLoginSignup}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    />
    {/* <Stack.Screen
      name="ForgotVerifyOtp"
      component={ForgotVerifyOtp}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    /> */}
    {/* <Stack.Screen
      name="forgot_Password"
      component={ForgotPassword}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    /> */}
    {/* <Stack.Screen
      name="reset_Password"
      component={ResetPassword}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    /> */}
    {/* <Stack.Screen
      name="emailVerify"
      component={EmailVerification}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    /> */}
    {/* <Stack.Screen
      name="signup"
      component={Signup}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    /> */}
    {/* <Stack.Screen
      name="AppStack"
      component={AppDrawer}
      options={{
        headerShown: false,
      }}
    /> */}
    {/* <Stack.Screen
      name="home_page"
      component={Homepage}
      options={{
        headerShown: false
      }}
    /> */}
  </Stack.Navigator>
);


export { StackScreens };

