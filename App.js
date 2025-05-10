import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './source/assets/styles/Colors';
import { Font } from './source/assets/styles/FontsFamily';
import { dpFont } from './source/assets/styles/Sizes';
import { Theme } from './source/assets/styles/theme';
// import { StackScreens } from './source/navigation/StackNavigator';
import { persistor, store } from './source/redux/store';
import SplashScreen from './source/app/view/auth/splash/splash';
import IntroScreen from './source/app/view/auth/intro/intro';
import { StackScreens } from './source/navigation/StackNavigator';
export const navigationRef = React.createRef();


export function navigate(name, params, reset) {
  if (reset) {
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name: name }],
    });
  } else {
    navigationRef.current?.navigate(name, params);
  }
};

export const toastConfig = {
  success: (props) => (
    <BaseToast
      // text1={props.text1}
      text1={props && props.props && props.props.text1}
      text1NumberOfLines={3}
      style={{ backgroundColor: colors.lightGreen, borderLeftColor: colors.green1, marginTop: Platform.OS === "ios" ? 20 : 8 }}
      contentContainerStyle={{ paddingHorizontal: 15, }}
      text1Style={{
        fontSize: dpFont(16),
        fontFamily: Font.regular,
        // fontWeight:600,
        color: colors.black,
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      text1={props && props.props && props.props.text1}
      text1NumberOfLines={3}
      style={{ backgroundColor: colors.lightRed, borderLeftColor: colors.red, marginTop: Platform.OS === "ios" ? 20 : 8 }}
      contentContainerStyle={{ paddingHorizontal: 15, }}
      text1Style={{
        fontSize: dpFont(16),
        fontFamily: Font.regular,
        // fontWeight:600,
        color: colors.black,
      }}
    />
  ),
};


const App = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={Theme}>
            <StatusBar
              backgroundColor={colors.white}
              barStyle={"light-content"}
            />
            <NavigationContainer>
              <StackScreens />
            </NavigationContainer>
            {/* <SplashScreen /> */}
            {/* <IntroScreen /> */}
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;