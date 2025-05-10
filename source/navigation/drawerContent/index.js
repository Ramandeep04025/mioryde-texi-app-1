import { DrawerContentScrollView, DrawerItem, useDrawerStatus } from '@react-navigation/drawer';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import AuthController from '../../app/apis/controllers/authController';
import DealerMembershipController from '../../app/apis/controllers/dealer/memebershipController';
import Icons from '../../app/components/IconComponent';
import { colors } from '../../assets/styles/Colors';
import { Dimension } from '../../assets/styles/Dimension';
import globalStyles from '../../assets/styles/GlobalStyles';
import { IconsName, IconsType } from '../../assets/styles/Icon';
import { Images } from '../../assets/styles/Images';
import { dpFont } from '../../assets/styles/Sizes';
import { isEmptyObj } from '../../helpers/General';
import { store } from '../../redux/store';
import { styles } from './styles';



export const DrawerContent = (props) => {
  const {
    activeScreen
  } = props

  const userType = store.getState().UserReducer
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [isActiveMemberShip, setisActiveMemberShip] = useState(null);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isEmptyObj(userType && userType.user)) {
      navigation.navigate('AppStack', { screen: 'bottomTab' });
    }
  }, [userType]);

  useEffect(() => {
    if (isDrawerOpen) {
      if (userType && !isEmptyObj(userType.user)) {
        if (userType && userType.user && userType.user.role === 'dealer') {
          getisActiveMembership();
        }
      }
    }
  }, [isDrawerOpen]);

  const getisActiveMembership = async () => {
    let response = await DealerMembershipController.checkMemberShip();
    if (response && response.status) {
      let data = response && response.membership_status
      setisActiveMemberShip(data);
    } else {
      setisActiveMemberShip(null);
    }
  };


  const listSeller = [
    {
      title: 'Home',
      action: () => navigation.navigate('bottomTab'),
      icon: IconsName.home,
      type: IconsType.antDesign,
      size: dpFont(25),
      name: 'bottomTab'
    },
    {
      title: 'Dashboard',
      action: () => navigation.navigate('dashboard'),
      icon: IconsName.grid,
      type: IconsType.simpleLineIcons,
      size: dpFont(20),
      name: 'dashboard'
    },
    {
      title: 'List a Car for Sale',
      action: () => navigation.navigate('post_car_seller'),
      image: Images.drawerImage5,
      name: 'post_car_seller'
    },
    {
      title: 'My Vehicles',
      action: () => navigation.navigate('car_listing_Seller'),
      image: Images.drawerImage2,
      name: 'car_listing_Seller'
    },
    {
      title: 'My Account',
      action: () => navigation.navigate("seller_profile", { fromDrawer: true }),
      image: Images.drawerImage7,
      name: 'seller_profile'
    },
    {
      title: 'Support Help',
      action: () => navigation.navigate('support_help'),
      image: Images.drawerImage6,
      name: 'support_help'
    },
    // {
    //   title: 'Open Ticket Notifications',
    //   action: () => navigation.navigate('open_ticket_notifications'),
    //   image: Images.drawerImage6,
    // name : 'post_car_seller'
    // },
    {
      title: 'Leads',
      action: () => navigation.navigate('leads_Listing'),
      image: Images.drawerImage3,
      name: 'leads_Listing'
    },
    // {
    //   title: 'Leads Notifications',
    //   action: () => navigation.navigate('lead_notifications'),
    //   image: Images.drawerImage3,
    // name : 'post_car_seller'
    // },
    {
      title: 'Billing',
      action: () => navigation.navigate('billingPage'),
      icon: IconsName.wpforms,
      type: IconsType.fontAwesome5,
      size: dpFont(22),
      name: 'billingPage'
    },
    {
      title: 'Buy Credits',
      action: () => navigation.navigate('credit_Detail'),
      icon: IconsName.creditcard,
      type: IconsType.antDesign,
      size: dpFont(20),
      name: 'credit_Detail'
    },
    {
      title: 'Promoted History',
      action: () => navigation.navigate('promoted_History'),
      icon: IconsName.history,
      type: IconsType.fontAwesome5,
      size: dpFont(20),
      name: 'promoted_History'
    },
    {
      title: 'Change Password',
      action: () => navigation.navigate('change_password'),
      icon: IconsName.lock,
      type: IconsType.octicons,
      size: dpFont(20),
    },
    {
      title: 'About Us',
      action: () => navigation.navigate('about_us'),
      icon: IconsName.infocirlceo,
      type: IconsType.antDesign,
      size: dpFont(20),
      name: 'about_us'
    },
    {
      title: 'Privacy Policy',
      action: () => navigation.navigate('privacy_policy'),
      icon: IconsName.privacyTip,
      type: IconsType.materialIcons,
      size: dpFont(20),
      name: 'privacy_policy'
    },
    {
      title: 'Terms & Condition',
      action: () => navigation.navigate('terms'),
      icon: IconsName.documentOutline,
      type: IconsType.ionIcon,
      size: dpFont(20),
      name: 'terms'
    },
    {
      title: 'Logout',
      action: () => !isEmptyObj(userType && userType.user) ? handleLogout() : null,
      icon: IconsName.power,
      type: IconsType.feather,
      size: dpFont(20),
    },
    // {
    //   title: 'Contact Us',
    //   action: () => navigation.navigate('contact_us'),
    //   icon: IconsName.phone,
    //   type: IconsType.feather,
    //   size: dpFont(20),
    // name : 'post_car_seller'
    // },
  ];

  const listDealer = [
    {
      title: 'Home',
      action: () => navigation.navigate('bottomTab'),
      icon: IconsName.home,
      type: IconsType.antDesign,
      size: dpFont(25),
      name: 'bottomTab'
    },
    // {
    //   title: 'Dealer Membership',
    //   action: () => navigation.navigate('dealer_membership'),
    //   icon: IconsName.home,
    //   type: IconsType.antDesign,
    //   size: dpFont(25),
    // },
    {
      title: 'My Dashboard',
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate('dashboard'),
      icon: IconsName.grid,
      type: IconsType.simpleLineIcons,
      size: dpFont(20),
      name: 'dashboard'
    },
    {
      title: 'My Account',
      action: () => navigation.navigate('dealer_profile', { fromDrawer: true }),
      image: Images.drawerImage7,
      name: 'dealer_profile'
    },
    {
      title: 'My Cars',
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate('my_carListing_dealer'),
      image: Images.drawerImage2,
      name: 'my_carListing_dealer'
    },
    {
      title: 'Add Car',
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate('post_car_dealer'),
      icon: IconsName.diffAdded,
      type: IconsType.octicons,
      size: dpFont(22),
      name: 'post_car_dealer'
    },
    {
      title: 'My Leads',
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate("leads_Listing"),
      image: Images.drawerImage3,
      name: 'leads_Listing'
    },
    {
      title: `Dealeship's Users`,
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate('user_list'),
      icon: IconsName.users,
      type: IconsType.fontAwesome5,
      size: dpFont(20),
      name: 'user_list'
    },
    {
      title: 'Support Help',
      action: () => navigation.navigate('support_help'),
      image: Images.drawerImage6,
      name: 'support_help'
    },
    {
      title: 'Billing',
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate('billingPage'),
      icon: IconsName.wpforms,
      type: IconsType.fontAwesome5,
      size: dpFont(22),
      name: 'billingPage'
    },
    {
      title: 'Buy AD Credits',
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate('credit_Detail'),
      icon: IconsName.creditcard,
      type: IconsType.antDesign,
      size: dpFont(20),
      name: 'credit_Detail'
    },
    {
      title: 'Promoted History',
      action: () => isActiveMemberShip === 'inactive' ? navigation.navigate('dealer_membership') : navigation.navigate('promoted_History'),
      icon: IconsName.history,
      type: IconsType.fontAwesome5,
      size: dpFont(20),
      name: 'promoted_History'
    },
    {
      title: 'Change Password',
      action: () => navigation.navigate('change_password'),
      icon: IconsName.lock,
      type: IconsType.octicons,
      size: dpFont(20),
    },
    {
      title: 'About Us',
      action: () => navigation.navigate('about_us'),
      icon: IconsName.infocirlceo,
      type: IconsType.antDesign,
      size: dpFont(20),
      name: 'about_us'
    },
    {
      title: 'Privacy Policy',
      action: () => navigation.navigate('privacy_policy'),
      icon: IconsName.privacyTip,
      type: IconsType.materialIcons,
      size: dpFont(20),
      name: 'privacy_policy'
    },
    {
      title: 'Terms & Condition',
      action: () => navigation.navigate('terms'),
      icon: IconsName.documentOutline,
      type: IconsType.ionIcon,
      size: dpFont(20),
      name: 'terms'
    },

    {
      title: 'Logout',
      action: () => !isEmptyObj(userType && userType.user) ? handleLogout() : null,
      icon: IconsName.power,
      type: IconsType.feather,
      size: dpFont(20),
    },
  ];

  const WithoutLogInScreen = [
    {
      title: 'Home',
      action: () => navigation.navigate('bottomTab'),
      icon: IconsName.home,
      type: IconsType.antDesign,
      size: dpFont(25),
      name: 'bottomTab'
    },

  ];


  const handleLogout = async () => {
    props.navigation.closeDrawer();
    let logoutLoader = {
      loader: true
    }
    await AuthController.setlogoutLoader(logoutLoader)
    let response = await AuthController.logoutUser();
    if (response && response.status) {
      navigation.navigate('bottomTab'),
        await AuthController.setlogoutLoader({ loader: false })
    } else {
      await AuthController.setlogoutLoader({ loader: false })
    }
    await AuthController.setlogoutLoader({ loader: false })
  };


  return (
    <View style={styles.container}>
      {
        isDrawerOpen ?
          <StatusBar
            backgroundColor={colors.brown}
            barStyle="light-content"
          />
          :
          null
      }
      <View style={styles.body}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <View style={styles.closeIconMain}>
            <Icons
              type={IconsType.antDesign}
              name={IconsName.close}
              color={colors.white}
              size={Dimension.large3}
            />
          </View>
        </TouchableOpacity>
        {!isEmptyObj(userType && userType.user) ?
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}>
            {/* <DrawerItemList {...props} /> */}
            <View style={styles.content}>
              {userType && userType.user && userType.user.role === 'dealer' ? <>
                {listDealer.map((item, index) => (
                  <DrawerItem
                    key={index}
                    label={item.title}
                    labelStyle={styles.name2}
                    icon={({ focused, color, size }) =>
                    (
                      item.icon ?
                        <View style={activeScreen === item.name ? styles.iconMain : styles.iconMain2}>
                          <Icons
                            type={item.type}
                            name={item.icon}
                            color={colors.white}
                            size={item.size ? item.size : Dimension.large2}
                          />
                        </View>
                        :
                        <View style={activeScreen === item.name ? styles.iconMain : styles.iconMain2}>
                          <View style={styles.imageMain}>
                            <Image
                              style={globalStyles.image}
                              source={item.image}
                              resizeMode="contain"
                            />
                          </View>
                        </View>
                    )
                    }
                    onPress={() => {
                      if (item.action != null) {
                        item.action();
                      }
                    }}
                  />
                ))}
              </> : <>
                {listSeller.map((item, index) => (
                  <DrawerItem
                    key={index}
                    label={item.title}
                    labelStyle={activeScreen === item.name ? styles.name2 : styles.name2}
                    icon={({ focused, color, size }) =>
                    (
                      item.icon ?
                        <View style={activeScreen === item.name ? styles.iconMain : styles.iconMain2}>
                          <Icons
                            type={item.type}
                            name={item.icon}
                            color={colors.white}
                            size={item.size ? item.size : Dimension.large2}
                          />
                        </View>
                        :
                        <View style={activeScreen === item.name ? styles.iconMain : styles.iconMain2}>
                          <View style={styles.imageMain}>
                            <Image
                              style={globalStyles.image}
                              source={item.image}
                              resizeMode="contain"
                            />
                          </View>
                        </View>
                    )
                    }
                    onPress={() => {
                      if (item.action != null) {
                        item.action();
                      }
                    }}
                  />
                ))}
              </>}
            </View>
          </DrawerContentScrollView> : <DrawerContentScrollView
            {...props}
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}>
            {/* <DrawerItemList {...props} /> */}
            <View style={styles.content}>
              {WithoutLogInScreen.map((item, index) => (
                <DrawerItem
                  key={index}
                  label={item.title}
                  labelStyle={activeScreen === item.name ? styles.name2 : styles.name2}
                  icon={({ focused, color, size }) =>
                  (
                    item.icon ?
                      <View style={activeScreen === item.name ? styles.iconMain : styles.iconMain2}>
                        <Icons
                          type={item.type}
                          name={item.icon}
                          color={colors.white}
                          size={item.size ? item.size : Dimension.large2}
                        />
                      </View>
                      :
                      <View style={activeScreen === item.name ? styles.iconMain : styles.iconMain2}>
                        <View style={styles.imageMain}>
                          <Image
                            style={globalStyles.image}
                            source={item.image}
                            resizeMode="contain"
                          />
                        </View>
                      </View>
                  )
                  }
                  onPress={() => {
                    if (item.action != null) {
                      item.action();
                    }
                  }}
                />
              ))}
            </View>
          </DrawerContentScrollView>}
      </View>
      {/* {
        isDrawerOpen && !isEmptyObj(userType && userType.user) ?
          <View style={styles.bottomImageMain}>
            <View style={styles.bottomImage}>
              {isDrawerOpen ?
                <Image
                  style={globalStyles.image}
                  source={Images.tirepatch2}
                  resizeMode='contain'
                /> : null}
            </View>
            <View style={styles.logoutContainer}>
              <TouchableOpacity style={styles.logoutCon} onPress={() => { !isEmptyObj(userType && userType.user) ? handleLogout() : null }}>
                <View style={styles.iconStyleLogut}>
                  <Icons
                    type={IconsType.feather}
                    name={IconsName.power}
                    color={colors.white}
                    size={Dimension.large}
                  />
                </View>
                <Text style={styles.name2}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          null
      } */}
      {/* {isDrawerOpen ? <View style={styles.bottomView}></View>  */}
      {/* : null} */}
    </View >
  );
};


