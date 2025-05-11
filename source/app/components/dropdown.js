import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/Colors';
import { dpFont, dpHeight, dpWidth } from '../../assets/styles/Sizes';
import { Font } from '../../assets/styles/FontsFamily';
import Icons from './IconComponent';
import { IconsName, IconsType } from '../../assets/styles/Icon';
import { Dimension } from '../../assets/styles/Dimension';

const CustomDropdown = ({ placeholder }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'India', value: 'in' },
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' },
        { label: 'Australia', value: 'au' },
    ]);

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={placeholder}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                textStyle={styles.text}
                placeholderStyle={styles.placeholder}
                ArrowDownIconStyle={styles.arrowIcon}
                ArrowDownIconComponent={() => (
                    <Icons
                        type={IconsType.antDesign}
                        name={IconsName.caretdown}
                        color={colors.black}
                        size={dpHeight(2)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 9999, // Required when using multiple dropdowns
        marginBottom: dpHeight(3.5),
    },
    dropdown: {
        borderColor: colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRadius: dpWidth(4.5),
        height: dpHeight(7),
        paddingHorizontal: dpWidth(5.5),
    },
    dropdownContainer: {
        borderColor: colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
    },
    text: {
        fontFamily: Font.regular,
        fontSize: dpFont(14),
        color: colors.darkGrey
    },
    placeholder: {
        color: colors.darkGrey,
    },
    arrowIcon: {
        tintColor: colors.primary,
    },
});

export default CustomDropdown;
