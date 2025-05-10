import { Linking, Alert, Platform } from 'react-native';


export const openPhoneNumberLink = phone => {
  let phoneNumber = '';
  if (Platform.OS !== 'android') {
    phoneNumber = `${phone}`;
    Linking.openURL(`tel:${phoneNumber}`)
  }
  else  {
    phoneNumber = `tel:${phone}`;
    Linking.openURL(`tel:${phoneNumber}`)
  }
  // Linking.canOpenURL(phoneNumber)
  // .then(supported => {
  //   if (!supported) {
  //     Alert.alert('Phone number is not available');
  //   } else {
  //     return Linking.openURL(phoneNumber);
  //   }
  // })
  // .catch(err => console.log(err), Alert.alert('Phone number is not available'));
};