import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icons from './IconComponent'
import { IconsName, IconsType } from '../../assets/styles/Icon'
import { colors } from '../../assets/styles/Colors'
import { Dimension } from '../../assets/styles/Dimension'
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from '../../assets/styles/Sizes'
import { Font } from '../../assets/styles/FontsFamily'
import { Images } from '../../assets/styles/Images'

const Button = (props) => {
    const {
        title,
        titleStyle,
        centerIcon,
        centerIconStyle,
        centerIconType,
        centerIconName,
        centerIconSize,
        centerIconColor,
        leftIcon,
        leftIconStyle,
        leftIconType,
        rightIcon,
        rightIconStyle,
        rightIconType,
        rightTitle,
        rightTitleStyle,
        buttonStyle,
        onPress,
        leftIconName,
        leftIconColor,
        leftIconSize,
        containerStyle,
        //-------------leftImage
        leftImage,
        leftImageStyle,
        leftImageTimeSource
    } = props;
    return (
        <View style={containerStyle ? containerStyle : null}>
            <TouchableOpacity style={[buttonStyle ? buttonStyle : styles.btnStyle]}
                onPress={onPress}
            >
                <View style={styles.row}>
                    {leftIcon ?
                        <Icons
                            type={leftIconType ? leftIconType : IconsType.antDesign}
                            name={leftIconName ? leftIconName : IconsName.right}
                            color={leftIconColor ? leftIconColor : colors.secondary}
                            size={leftIconSize ? leftIconSize : Dimension.big}
                            style={[leftIconStyle ? leftIconStyle : styles.leftIcon]}
                        />
                        : null}
                    {leftImage ?
                        <View style={leftImageStyle ? leftImageStyle : styles.viewImage}>
                            <Image
                                style={styles.image}
                                source={leftImageTimeSource ? leftImageTimeSource : Images.cart}
                            />
                        </View>
                        : null}
                    {centerIcon ?
                        <Icons
                            type={centerIconType ? centerIconType : IconsType.antDesign}
                            name={centerIconName ? centerIconName : IconsName.right}
                            color={centerIconColor ? centerIconColor :colors.secondary}
                            size={centerIconSize ? centerIconSize : Dimension.big}
                            style={[centerIconStyle ? centerIconStyle : centerIcon]}
                        />
                        : null}
                    {title ?
                        <Text style={[titleStyle ? titleStyle : styles.titleStyle]}>{title}</Text>
                        : null}
                    {rightIcon ?
                        <Icons
                            type={rightIconType ? rightIconType : IconsType.antDesign}
                            name={IconsName.right}
                            color={colors.secondary}
                            size={Dimension.big}
                            style={[rightIconStyle ? rightIconStyle : styles.rightIcon]}
                        />
                        : null}
                    {rightTitle ?
                        <Text style={[rightTitleStyle ? rightTitleStyle : styles.titleStyle]}>{rightTitle}</Text>
                        : null}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: Font.regular,
        color: colors.white,
        fontSize: dpFont(16)
    },
    btnStyle: {
        height: dpHeight(7),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: dpHeight(5),
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    centerIcon: {

    },
    leftIcon: {

    },
    rightIcon: {

    },
    image: {
        height: '100%',
        width: '100%',
    },
    viewImage: {
        height: dpImageHeight(40),
        width: dpImageWidth(40),
        borderRadius: dpHeight(1),
        overflow: 'hidden',
    },
});

export default Button

