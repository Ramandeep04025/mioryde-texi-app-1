import { View, Text, Image, ImageBackground, StatusBar, ScrollView, Animated, Easing } from 'react-native'
import { styles } from './style'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { colors } from '../../../../assets/styles/Colors'
import { useIsFocused } from '@react-navigation/native'
import { IconsName, IconsType } from '../../../../assets/styles/Icon'
import { Dimension } from '../../../../assets/styles/Dimension'
import { useEffect } from 'react'
import { Loader } from '../../../../helpers/loader'
import { renderImage } from '../../../../helpers/renderImage'
import FastImage from 'react-native-fast-image'
import { Button, Input } from '@rneui/themed'
import { HeaderComponet } from '../../../components/header/Header'



const ForgotPasswordScreen = (props) => {
    const Focused = useIsFocused();
    const animatedValue = new Animated.Value(0);

    const {
        values,
        isError,
        handleChange,
        handleForgot,
        loader,
        navigation,
        banner
    } = props;


    return (
        <>
            <HeaderComponet
                leftIcon={"back"}
                center={"headerlabel"}
                headerLabel={"Forgot password"}
            />
            <ScrollView
                style={styles.ScrollView}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.mainTop}>
                    <View style={styles.subMain}>
                        <View style={styles.topTextMain}>
                            <Text style={styles.text1}>{banner && banner.title ? banner.title : null}</Text>
                            <View style={styles.text2Main}>
                                <Text style={styles.text2}>
                                    {banner && banner.discription ? banner.discription : null}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.subImageMain}>
                            <FastImage
                                source={banner && banner.image ? renderImage(banner.image, "large") : Images.carsGroup}
                                style={globalStyles.image}
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.mainBottom]}>
                    <Input
                        placeholder="Email"
                        rightIcon={true}
                        keyboardType={'email-address'}
                        autoCapitalize="none"
                        value={values && values.email}
                        handleChange={(e) => handleChange("email", e)}
                        error={isError && isError.email && isError.email.message ? isError.email.message : null}
                        IconRightType={IconsType.fontisto}
                        IconRightName={IconsName.email}
                        rightIconColor={colors.darkGrey}
                        IconRightSize={Dimension.large}
                    />
                </View>
                <View style={styles.bottomButton}>
                    <Button
                        title='Get OTP'
                        onPress={() => handleForgot()}
                    />
                </View>
            </ScrollView>
            {
                loader ?
                    <Loader loader={loader} />
                    : null
            }
        </>
    )
};

export default ForgotPasswordScreen