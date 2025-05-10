import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDrawerProgress } from "@react-navigation/drawer";
import React, { useState, useEffect } from 'react';
import { ImageBackground, Keyboard, Platform, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import Icons from "../app/components/IconComponent";
import Wishlist from "../app/view/commanScreens/Wishlist";
import Homepage from '../app/view/commanScreens/homepage';
import Search from "../app/view/commanScreens/search";
import { colors } from "../assets/styles/Colors";
import { IconsName, IconsType } from "../assets/styles/Icon";
import { Images } from "../assets/styles/Images";
import { dpBorderWidth, dpHeight, dpWidth } from "../assets/styles/Sizes";
import { store } from "../redux/store";
import SellerProfile from "../app/view/sellerScreens/profile";
import DealerProfile from '../app/view/dealerScreens/profile'
import { isEmptyObj } from "../helpers/General";
import { HeaderComponet } from "../app/components/header/Header";
import { connect } from "react-redux";

const BottomTabBar = createBottomTabNavigator();
const BottomTabs = (props) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const drawerProgress = useDrawerProgress();

  const viewStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      drawerProgress.value,
      [0, 0.36],
      [1, 0.9]
    )

    const borderRadius = interpolate(
      drawerProgress.value,
      [0, 0.1],
      [0, 3]
    )

    return {
      transform: [{ scale }],
      borderRadius,
    }
  })


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    // <>
    //   {
    //     userType ?
    //       <Animated.View style={[{ flex: 1, overflow: 'hidden' }, viewStyle]}>
    //         {activeScreen}
    //         {!keyboardOpen ? (
    //           // <ImageBackground
    //           //   source={Images.bottomtabback}
    //           //   resizeMode='cover'
    //           //   style={{ height: Platform.OS === 'ios' ? dpHeight(10) : 65, width: '100%' }}
    //           // >

    //             <Tabbar
    //               tabs={userType && isEmptyObj(userType.user) ? tabsWithoulogin : tabs}
    //               tabBarContainerBackground={colors.primary}
    //               tabBarBackground={colors.white}
    //               activeTabBackground={colors.primary}
    //               onTabChange={handleTabChange}
    //               defaultActiveTabIndex={0}
    //               transitionSpeed={100}
    //               containerBottomSpace={dpHeight(-1.5)}
    //             />
    //           // </ImageBackground>
    //         ) : null}

    //       </Animated.View>
    //       :
    //       null
    //   }
    // </>

    <Animated.View style={[{ flex: 1, overflow: 'hidden' }, viewStyle]}>
      <BottomTabBar.Navigator
        initialRouteName='home_page'
        screenOptions={({ route, navigation }) => {
          return {
            tabBarStyle: {
              backgroundColor: colors.primary,
              height: Platform.OS === "ios" ? dpHeight(11) : dpHeight(8.5),
              paddingHorizontal: dpWidth(2),
              borderTopWidth: 0,
              paddingTop: dpHeight(1),
              // paddingBottom: dpHeight(2),
              elevation: 0,
            },
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.textColor2,
            tabBarLabel: '',
            tabBarHideOnKeyboard: true,
          }
        }}
      >
        <BottomTabBar.Screen
          name="home_page"
          component={Homepage}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={focused ? {
                marginBottom: dpHeight(6),
                backgroundColor: colors.primary,

                height: dpHeight(9),
                width: dpHeight(9),
                borderRadius: dpHeight(100),
                borderColor: colors.white,
                borderWidth: dpBorderWidth(2.5),
                justifyContent: "center",
                alignItems: "center",
              } : {
                // marginBottom: 20,
                backgroundColor: colors.primary,
              }}>
                <Icons
                  size={dpHeight(3)}
                  type={IconsType.feather}
                  name={IconsName.home}
                  color={colors.white}
                />
              </View>
            ),
            // headerShown: false
            header: ({ navigation, route, options }) => (
              <HeaderComponet
                leftIcon={'menu'}
                login={true}
              />
            ),
          }}
        />
        <BottomTabBar.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={focused ? {
                marginBottom: keyboardOpen ? dpHeight(0) : dpHeight(6),
                backgroundColor: colors.primary,

                height: dpHeight(9),
                width: dpHeight(9),
                borderRadius: dpHeight(100),
                borderColor: colors.white,
                borderWidth: dpBorderWidth(2.5),
                justifyContent: "center",
                alignItems: "center"
              } : {
                // marginBottom: 20,
                backgroundColor: colors.primary,
              }}>
                <Icons
                  size={focused ? dpHeight(3) : dpHeight(3)}
                  type={IconsType.feather}
                  name={IconsName.search}
                  color={colors.white}
                />
              </View>
            ),
            // headerShown:false
            header: ({ navigation, route, options }) => (
              <HeaderComponet
                login={true}
                leftIcon={'menu'}
              />
            ),
          }}
        />
        {props && !isEmptyObj(props.user) ? <BottomTabBar.Screen
          name={props && props.user && props.user.role === 'dealer' ? "dealer_profile" : "seller_profile"}
          component={props && props.user && props.user.role === 'dealer' ? DealerProfile : SellerProfile}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={focused ? {
                marginBottom: dpHeight(6),
                backgroundColor: colors.primary,

                height: dpHeight(9),
                width: dpHeight(9),
                borderRadius: dpHeight(100),
                borderColor: colors.white,
                borderWidth: dpBorderWidth(2.5),
                justifyContent: "center",
                alignItems: "center"
              } : {
                // marginBottom: 20,
                backgroundColor: colors.primary,
              }}>
                <Icons
                  size={focused ? dpHeight(3) : dpHeight(3)}
                  type={IconsType.feather}
                  name={IconsName.user}
                  color={colors.white}
                />
              </View>
            ),
            headerShown: false
            // header: ({ navigation, route, options }) => (
            //   <HeaderComponet
            //     leftIcon={'menu'}
            //     profile={true}
            //     navigation={navigation}
            //   />
            // ),
          }}
        /> : null}
        {props && props.isActive !== 'inactive' ? <BottomTabBar.Screen
          name="wish_list"
          component={Wishlist}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View style={focused ? {
                marginBottom: dpHeight(6),
                backgroundColor: colors.primary,

                height: dpHeight(9),
                width: dpHeight(9),
                borderRadius: dpHeight(100),
                borderColor: colors.white,
                borderWidth: dpBorderWidth(2.5),
                justifyContent: "center",
                alignItems: "center"
              } : {
                // marginBottom: 20,
                backgroundColor: colors.primary,
              }}>
                <Icons
                  size={focused ? dpHeight(3) : dpHeight(3)}
                  type={IconsType.feather}
                  name={IconsName.heart}
                  color={colors.white}
                />
              </View>
            ),
            // headerShown:false
            header: ({ navigation, route, options }) => (
              <HeaderComponet
                leftIcon={'menu'}
                profile={true}
                login={true}
              />
            ),
          }}
        /> : null}
      </BottomTabBar.Navigator>
    </Animated.View>
  );
}
const mapStateToProps = state => ({
  user: state.UserReducer.user,
  isActive: state.DealerMemeberShipRedux.isActive,
});
export default connect(mapStateToProps, null)(BottomTabs);