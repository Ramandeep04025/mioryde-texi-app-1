import { View, Text, Image } from 'react-native'
import React from 'react'
import globalStyles from '../../../assets/styles/GlobalStyles'
import { styles } from './styles'
import { Images } from '../../../assets/styles/Images'
import FastImage from 'react-native-fast-image'

const EmptyScreen = (props) => {
    const {
        containerStyle,
        mainView,
        messageView,
        messageView2,
        message,
        message2,
        textStyle,
        textStyle2,
        image,
        imgOuterView,
        imgStyle
    } = props

    return (
        <View style={containerStyle ? containerStyle : globalStyles.main}>
            <View style={mainView ? mainView : styles.mainView}>
                <View style={imgStyle ? imgStyle : styles.imgStyle}>
                    <FastImage
                        source={image ? image : Images.logo}
                        style={globalStyles.image}
                        resizeMode='contain'
                    />
                </View>
                <View style={messageView ? messageView : styles.messageView}>
                    <Text style={textStyle ? textStyle : styles.message}>
                        {message ? message : 'Oops!'}
                    </Text>
                </View>
                {message2 ? <View style={messageView2 ? messageView2 : styles.messageView2}>
                    <Text style={textStyle2 ? textStyle2 : styles.message2}>
                        {message2 ? message2 : 'No Data Found'}
                    </Text>
                </View> : null}
            </View>
        </View>
    )
}

export default EmptyScreen