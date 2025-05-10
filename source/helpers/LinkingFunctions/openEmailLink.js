import { Linking } from 'react-native';


export const openEmailLink = email => {
    if (email) {
        Linking.openURL(`mailto:${email}`);
    }
    else;
};