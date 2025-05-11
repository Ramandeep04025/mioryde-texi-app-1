import { DrawerContentScrollView, DrawerItem, useDrawerStatus } from '@react-navigation/drawer';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native';
import Icons from '../../app/components/IconComponent';
import { colors } from '../../assets/styles/Colors';
import { Dimension } from '../../assets/styles/Dimension';
import globalStyles from '../../assets/styles/GlobalStyles';
import { IconsName, IconsType } from '../../assets/styles/Icon';
import { Images } from '../../assets/styles/Images';
import { dpFont, dpHeight } from '../../assets/styles/Sizes';
import { isEmptyObj } from '../../helpers/General';
import { store } from '../../redux/store';
import { styles } from './styles';
import { Button } from '@rneui/themed';



export const DrawerContent = (props) => {
  const {
    activeScreen
  } = props

  const userType = store.getState().UserReducer
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [isActiveMemberShip, setisActiveMemberShip] = useState(null);
  const isFocus = useIsFocused();

  // useEffect(() => {
  //   if (isEmptyObj(userType && userType.user)) {
  //     navigation.navigate('AppStack', { screen: 'bottomTab' });
  //   }
  // }, [userType]);

  // useEffect(() => {
  //   if (isDrawerOpen) {
  //     if (userType && !isEmptyObj(userType.user)) {
  //       if (userType && userType.user && userType.user.role === 'dealer') {
  //         getisActiveMembership();
  //       }
  //     }
  //   }
  // }, [isDrawerOpen]);

  // const getisActiveMembership = async () => {
  //   let response = await DealerMembershipController.checkMemberShip();
  //   if (response && response.status) {
  //     let data = response && response.membership_status
  //     setisActiveMemberShip(data);
  //   } else {
  //     setisActiveMemberShip(null);
  //   }
  // };


  const list = [
    {
      title: 'My profile',
      img: Images.userIcon,
      action: () => navigation.navigate('edit-profile'),
    },
    {
      title: 'Change Password',
      img: Images.lock,
      // action: () => navigation.navigate('dashboard'),
    },
    {
      title: 'My Parcels',
      img: Images.truck,
      // action: () => navigation.navigate('dashboard'),
    },
    {
      title: 'My Rides',
      img: Images.ride,
      // action: () => navigation.navigate('dashboard'),
    },
    {
      title: 'Wallet',
      img: Images.wallet,
      // action: () => navigation.navigate('post_car_seller'),
    },
    {
      title: 'Ratings',
      img: Images.rating,
      // action: () => navigation.navigate('post_car_seller'),
    },
    {
      title: 'About Us ',
      img: Images.info,
      // action: () => navigation.navigate('car_listing_Seller'),
    },
    {
      title: 'FAQs',
      img: Images.faq,
      // action: () => navigation.navigate("seller_profile", { fromDrawer: true }),
    },
    {
      title: 'Help',
      img: Images.message,
      // action: () => navigation.navigate('support_help'),
    },
    {
      title: 'Tearms and conditions',
      img: Images.info,
      // action: () => navigation.navigate('billingPage'),
    },
    {
      title: 'Miyoride Policies',
      img: Images.info,
      // action: () => navigation.navigate('leads_Listing'),
    },
  ];


  return (
    <View style={styles.container}>
      {
        isDrawerOpen ?
          <StatusBar
            backgroundColor={colors.white}
            barStyle="light-content"
          />
          :
          null
      }
      <View style={styles.body}>
        <ImageBackground
          source={Images.sidebarBg}
          style={styles.profileBg}
          resizeMode='contain'
        >
          <View style={styles.topRow}>
            <View style={styles.profileImg}>
              <Image
                source={Images.profileImg}
                style={globalStyles.img}
                resizeMode='cover'
              />
            </View>
            <Text style={styles.name}>Thomas Freral</Text>
          </View>
        </ImageBackground>

        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {list && list.length > 0 && list.map((item, index) => (
              <View
                key={index}
              >
                <View
                  style={[
                    styles.drawerItemContainer,
                    index === 3 && { backgroundColor: colors.primary }, // Active background
                  ]}
                >
                  <DrawerItem
                    key={index}
                    label={item.title}
                    labelStyle={styles.title}
                    pressColor={colors.primary}
                    icon={({ focused, color, size }) =>
                    (
                      <View style={styles.icon}>
                        <Image
                          source={item.img}
                          style={[styles.image]}
                          resizeMethod='contain'
                        />
                      </View>
                    )
                    }
                    onPress={() => {
                      if (item.action != null) {
                        item.action();
                      }
                    }}
                  />
                </View>
                {index === 1 && <View style={styles.seperator}>
                  <Image
                    source={Images.line}
                    style={globalStyles.image}
                    resizeMode='cover'
                  />
                </View>}
                {index === 5 && <View style={styles.seperator}>
                  <Image
                    source={Images.line}
                    style={globalStyles.image}
                    resizeMode='cover'
                  />
                </View>}
              </View>

            ))

            }
            <View style={styles.btnView}>
              <Button
                title="Log Out"
                icon={
                  <View style={styles.logIcon}>
                    <Image
                      source={Images.logout}
                      style={globalStyles.img}
                      resizeMode='contain'
                    />
                  </View>
                }
                iconLeft={true}
                titleStyle={styles.titleStyle}
                buttonStyle={styles.buttonStyle}
              >


              </Button>
            </View>
          </View>
        </DrawerContentScrollView>
      </View>
    </View >
  );
};


