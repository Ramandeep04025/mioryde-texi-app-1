import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, TouchableOpacity, View, Image, Text } from 'react-native';
import { styles } from './style';
import { colors } from '../../../assets/styles/Colors';
import Icons from '../IconComponent';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import { Dimension } from '../../../assets/styles/Dimension';
import { Images } from '../../../assets/styles/Images';
import { store } from '../../../redux/store';
import { isEmptyObj } from '../../../helpers/General';
import { renderImage } from '../../../helpers/renderImage';



export const HeaderComponet = (props) => {
  const navigation = useNavigation();
  const user = store.getState().UserReducer;

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.leftSideContainer}>
          {
            props && props.leftIcon === 'menu' ?
              <TouchableOpacity style={styles.drawerIcon} onPress={() => navigation.openDrawer()}>
                <Icons
                  type={IconsType.feather}
                  name={IconsName.menu}
                  color={colors.black}
                  size={Dimension.big}
                />
              </TouchableOpacity>
              : props && props.leftIcon === 'back' ?
                <TouchableOpacity style={styles.drawerIcon} onPress={() => { props && props.onBack ? props.onBack() : navigation.goBack() }}>
                  <Icons
                    type={IconsType.antDesign}
                    name={IconsName.left}
                    color={colors.black}
                    size={Dimension.large}
                  />
                </TouchableOpacity>
                : null
          }
        </View>
        <View style={styles.centerPart}>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={Images.logo}
              resizeMode='contain'
            />
          </View>
        </View>
        <View style={styles.rightSideContainer}>
          {user && !isEmptyObj(user.user) ?
            <View style={styles.viewImageright2}>
              <TouchableOpacity style={styles.viewImageright} onPress={() => {
                user.user && user.user.role === 'dealer'
                  ? navigation.navigate('dealer_profile') :
                  navigation.navigate('seller_profile')
              }}>
                <Image
                  style={styles.image}
                  source={user && user.user && user.user.image ? renderImage(user.user.image) : Images.userImg}
                  resizeMode='cover'
                />
              </TouchableOpacity>
            </View>
            : props.login ?
              <View style={styles.loginbtnMian}>
                <View style={styles.loginbtnleft}>
                  <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.loginbtntxt}>Log in</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.loginbtnright}>
                  <TouchableOpacity onPress={() => navigation.navigate('selectUser')}>
                    <Text style={styles.signbtntxt}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View> : null}
        </View>
      </View>
    </>
  );
};


