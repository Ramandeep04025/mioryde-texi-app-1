import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, TouchableOpacity, View, Image, Text } from 'react-native';
import { colors } from '../../../assets/styles/Colors';
import Icons from '../IconComponent';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import { Dimension } from '../../../assets/styles/Dimension';
import { Images } from '../../../assets/styles/Images';
import { Icon, Input } from '@rneui/themed';
import { dpFont, dpHeight } from '../../../assets/styles/Sizes';
import { styles } from './style';



export const InternalHeader = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.main}>

        <View style={styles.container}>
          <View style={styles.leftSideContainer}>
            {
              props && props.leftIcon === 'menu' ?
                <TouchableOpacity style={styles.drawerIcon} onPress={() => navigation.openDrawer()}>
                  <View style={styles.barImg}>
                    <Image
                      style={styles.image}
                      source={Images.bar}
                      resizeMode='contain'
                    />
                  </View>
                </TouchableOpacity>
                : props && props.leftIcon === 'back' ?
                  <TouchableOpacity style={styles.backIcon} onPress={() => { props && props.onBack ? props.onBack() : navigation.goBack() }}>
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
            {props && props.heading && <Text style={styles.heading}>{props.heading}</Text>}
          </View>
          <View style={styles.rightSideContainer}>
            {props && props.rightImg ?
              <TouchableOpacity style={styles.viewImageright}>
                <Image
                  style={styles.image}
                  source={Images.profileImg}
                  resizeMode='cover'
                />
              </TouchableOpacity> :
              null}
          </View>
        </View>
        {/* <View style={{ marginHorizontal: dpHeight(3) }}> */}

        <Input
          placeholder="Where are you going?"
          containerStyle={{ marginTop: dpHeight(3) }}
          leftIcon={
            <Icon
              name={IconsName.search1}
              type={IconsType.antDesign}
              color={colors.black}
              size={dpFont(20)}
            />
          }
        />
        {/* </View> */}

      </View>
    </>
  );
};


