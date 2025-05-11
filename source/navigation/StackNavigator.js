import { Platform } from "react-native";
import splash from "../app/view/auth/splash";
import Intro from "../app/view/auth/intro";
import login from "../app/view/auth/login";
import MainLoginSignup from "../app/view/auth/MainLoginSignup";
import AppDrawer from "./DrawerNavigator";
import EditProfile from "../app/view/editProfile";
import ForgotPassword from "../app/view/auth/forgotPassword";
import SignupScreen from "../app/view/auth/SignupAndOTPVerify/Screen";
import ForgotPassword from "../app/view/auth/forgotPassword";
const { createStackNavigator, TransitionPresets } = require("@react-navigation/stack");

const Stack = createStackNavigator();

const StackScreens = () => (
  <Stack.Navigator
    initialRouteName="app-drawer"
    // initialRouteName="home"
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
    <Stack.Screen
      name="app-drawer"
      component={AppDrawer}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="signUp"
      component={SignupScreen}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="edit-profile"
      component={EditProfile}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    />
    {/* <Stack.Screen
      name="home"
      component={Home}
      options={{
        headerMode: 'screen',
        headerShown: false,
      }}
    /> */}
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
    />
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

