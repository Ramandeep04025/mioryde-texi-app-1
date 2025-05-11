import { createTheme } from '@rneui/themed';
import { colors } from './Colors';
import { Font } from './FontsFamily';
import { dpBorderWidth, dpFont, dpHeight, dpWidth } from './Sizes';
import { StyleSheet } from 'react-native';

export const Theme = createTheme({
    components: {
        Input: {
            labelStyle: {
                color: colors.darkGrey,
                fontFamily: Font.regular,
                fontSize: dpFont(15),
                fontWeight: 'normal',
                marginBottom: dpHeight(1),
            },
            placeholderTextColor: colors.darkGrey,
            placeholder: {
                color: colors.darkGrey,
            },
            selectionColor : colors.primary,
            containerStyle: {
                paddingRight: 0,
                paddingLeft: 0,
            },
            inputContainerStyle: {
                height: dpHeight(7),
                borderRadius: dpHeight(2.5),
                borderTopWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderLeftWidth: StyleSheet.hairlineWidth,
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: colors.grey,
                fontFamily: Font.regular,
                backgroundColor: colors.white,
                paddingLeft: dpWidth(5),
                paddingRight: dpWidth(5),
                width: '100%',
            },
            errorStyle: {
                color: colors.errorColor,
                fontFamily: Font.regular,
                fontSize: dpFont(15),
                marginTop: dpHeight(0.5),
                padding: 0,
            },
            fontFamily: Font.regular,
            fontSize: dpFont(14),
        },
        Button: {
            type: 'solid',
            titleStyle: {
                color: colors.black,
                fontSize: dpFont(14),
                fontFamily: Font.regular,
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
            },
            buttonStyle: {
                borderRadius: dpHeight(2.5),
                height: dpHeight(7),
                paddingHorizontal: dpWidth(5),
                backgroundColor: colors.primary
            },
            containerStyle: {
                borderRadius: dpHeight(1),
            },
        },
    },
});
