import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import ProgressBar from 'react-native-progress/Bar'
import { dpHeight } from '../../assets/styles/Sizes';
import { colors } from '../../assets/styles/Colors';
import { IconsName, IconsType } from '../../assets/styles/Icon';
import Icons from '../../app/components/IconComponent';
import { Dimension } from '../../assets/styles/Dimension';
import { styles } from './style';
import ImageController from '../../app/apis/controllers/ImageController';
import { Toaster } from '../toaster';



const ImagePickerModal = props => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = React.useState(0);


    const isFocus = useIsFocused();
    useEffect(() => {
        if (isFocus) {
            setProgress(0);
        } else {
            setProgress(0);
        }
    }, [isFocus, props.show]);


    const options = {
        quality: 0.4,
        orientation: 'portrait',
        isVertical: true,
        rotation: 360,
        includeExtra: true,
        fixOrientation: true,
        includeBase64: true,
        mediaType: 'photo',
        maxWidth: 1200,
        maxHeight: 1200,
    };


    const camera = () => {
        setProgress(0);
        launchCamera(options, async response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                uploadImage(response && response.assets[0]);
                ///setValues({ ...values, images: response.uri })
            }
        });
    };


    const gallery = () => {
        setProgress(0);
        launchImageLibrary(options, async response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                uploadImage(response.assets[0]);
            }
        });
    };


    const uploadImage = async image => {
        setProgress(0.2);
        let callback = p => {
            setProgress(p >= 100 ? 100 : p);
        };
        let data = {
            image: image,
            folder: props.type ? props.type : 'user',
            callback,
        };
        let response = await ImageController.addImage(data);
        if (response && response.status) {
            setProgress(1);
            props.response(response && response.path);
            if (props.response2) {
                props.response2(response)
            }
            new Toaster().success(response.message);
            props.close();
        }
        else{
            setProgress(1);
            props.close();
        }
    };




    return (
        <Modal
            isVisible={props.show}
            backdropColor={colors.black}
            backdropOpacity={0.8}
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
            onBackButtonPress={() => {
                props.close();
            }}
            onBackdropPress={() => {
                props.close();
            }}>
            <View style={styles.main}>
                {progress == 0 ? <Text style={styles.header}>{'Choose an option'}</Text> : null}
                <View style={styles.list}>
                    {progress > 0 ? (<>
                        {/* <Text
                            style={[
                                styles.progressText,
                                { color: loading ? colors.red : colors.green },
                            ]}>
                            {loading && progress != 1
                                ? 'Uploading please wait...'
                                : 'File uploaded successfully'}
                        </Text> */}
                        <ProgressBar
                            progress={progress}
                            size={100}
                            color={colors.primary}
                            height={10}
                            width={null}
                        />
                    </>) : null}

                    {progress > 0 ? null : (
                        <>
                            <TouchableOpacity style={styles.row} onPress={() => camera(props)}>
                                <View style={styles.left}>
                                    <Icons
                                        type={IconsType.feather}
                                        name={IconsName.camera}
                                        color={colors.black}
                                        size={Dimension.large3}
                                    />
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.title}>{'Camera'}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.row} onPress={() => gallery(props)}>
                                <View style={styles.left}>
                                    <Icons
                                        type={IconsType.antDesign}
                                        name={IconsName.picture}
                                        color={colors.black}
                                        size={Dimension.large3}
                                    />
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.title}>{'Gallery'}</Text>
                                </View>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
                {/* {loading ? <ProgressCircle progress={progress} /> : null} */}
                {/* {loading ? <Loader loader={loading} /> : null} */}
            </View>
        </Modal>
    );
};

export default ImagePickerModal;
