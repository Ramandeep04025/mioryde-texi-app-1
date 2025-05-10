import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from '@rneui/themed';
import Modal from "react-native-modal";
import { Platform } from 'react-native';
import Icons from '../IconComponent';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import { colors } from '../../../assets/styles/Colors';
import { dpFont, dpHeight, dpWidth } from '../../../assets/styles/Sizes';
import { renderImage } from '../../../helpers/renderImage';
import { Images } from '../../../assets/styles/Images';


const ImagePopUp = props => {

    return (
        <>
            <Modal
                isVisible={props.open}
                backdropColor={colors.black}
                backdropOpacity={0.5}
                style={styles.modal}
                onDismiss={() => props.close()}
                onBackdropPress={() => props.close()}
                onBackButtonPress={() => props.close()}>
                <View style={styles.main}>
                    <View style={styles.submain}>
                        <View style={styles.Icon}>
                            <TouchableOpacity onPress={() => props.close()}>
                                <Icons
                                    type={IconsType.antDesign}
                                    name={IconsName.close}
                                    color={colors.primary}
                                    size={dpFont(22)}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageMain}>
                            <View style={styles.subImage}>
                                <Image
                                    style={styles.image}
                                    source={props.getImage ? renderImage(props.getImage, 'large') : Images.nodata}
                                    resizeMode={Platform.OS === "ios" ? "contain" : "contain"}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    main: {
        backgroundColor: colors.transparent,
        width: '85%',
        // height: '30%',
        // height: 255,
        paddingHorizontal: dpWidth(10),
        borderRadius: dpFont(32),
    },
    submain: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageMain: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    subImage: {
        height: Platform.OS === "ios" ? dpHeight(55) : dpHeight(75),
        width: Platform.OS === "ios" ? dpWidth(90) : dpWidth(90),
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: dpFont(32),
        overflow: 'hidden'
    },
    Icon: {
        position: 'absolute',
        top: dpHeight(3),
        right: dpWidth(-6),
        zIndex: 99999,
        backgroundColor: colors.white,
        height: dpHeight(3),
        width: dpHeight(3),
        justifyContent: 'center',
        borderRadius: dpFont(15),
    },
});

export default ImagePopUp;
