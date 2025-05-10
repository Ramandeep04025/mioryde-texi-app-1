import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../assets/styles/Colors';
import { Font } from '../../assets/styles/FontsFamily';
import { dpBorderWidth, dpFont, dpHeight, dpSpacing } from '../../assets/styles/Sizes';
import { CheckBox } from '@rneui/themed';

const Checkbox = (props) => {

  const { checked, setChecked, labelStyle, disableLabel } = props;
  // const [checked, setChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    // <TouchableOpacity
    //   style={styles.container}
    //   onPress={handleToggleCheckbox}
    // >
    //   {props.disableLabel ? <>
    //     <View style={checked ? styles.checkBox2 : styles.checkBox}>
    //       {checked && <Icon
    //         name="check"
    //         size={dpFont(14)}
    //         color={colors.white}
    //       />}
    //     </View>
    //   </> :
    //     <View style={styles.checkBoxMian}>
    //       <View style={styles.left}>
    //         <View style={checked ? styles.checkbox2 : styles.checkbox}>
    //           {checked && <Icon
    //             name="check"
    //             size={dpFont(14)}
    //             color={colors.white}
    //           />}
    //         </View>
    //       </View>
    //       <View style={styles.right}>
    //         <Text style={labelStyle ? labelStyle : styles.label}>{props.label ? props.label : null}</Text>
    //       </View>
    //     </View>
    //   }
    // </TouchableOpacity>
    <CheckBox
      title={props.label ? props.label : null}
      checked={checked}
      textStyle={labelStyle ? labelStyle : styles.label}
      onPress={() => handleToggleCheckbox()}
      containerStyle={{
        padding: 0,
        margin: 0
        // backgroundColor:'red'
      }}
      checkedColor={colors.primary}
      uncheckedColor={colors.grey}
      wrapperStyle={{
        // alignItems: 'flex-start'
        // backgroundColor:'red'
      }}
      iconType="material-community"
      checkedIcon="checkbox-marked"
      uncheckedIcon="checkbox-blank-outline"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    height: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    borderRadius: dpHeight(0.5),
    borderWidth: Platform.OS === 'ios' ? dpBorderWidth(0.3) : dpBorderWidth(0.7),
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: dpSpacing(3),
  },
  checkBoxMian: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "flex-start"
  },
  checkbox2: {
    width: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    height: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    borderRadius: dpHeight(0.5),
    borderWidth: Platform.OS === 'ios' ? dpBorderWidth(0.3) : dpBorderWidth(0.7),
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: dpSpacing(3),
  },
  checkBox: {
    width: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    height: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    borderRadius: dpHeight(1),
    borderWidth: Platform.OS === 'ios' ? dpBorderWidth(0.3) : dpBorderWidth(0.7),
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: dpSpacing(2),
  },
  checkBox2: {
    width: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    height: Platform.OS === 'ios' ? dpHeight(2.2) : dpHeight(2.8),
    borderRadius: dpHeight(1),
    borderWidth: Platform.OS === 'ios' ? dpBorderWidth(0.3) : dpBorderWidth(0.7),
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: dpSpacing(2),
  },
  label: {
    fontFamily: Font.medium,
    fontSize: dpFont(15),
    color: colors.darkGrey,
    paddingBottom: dpSpacing(0.2),
    marginLeft: dpSpacing(1)
  },
  left: {
    flex: 0.10
  },
  right: {
    flex: 0.9
  }
});

export default Checkbox;
