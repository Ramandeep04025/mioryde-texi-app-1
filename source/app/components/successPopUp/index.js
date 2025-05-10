import { View, Text, Image, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { styles } from './style';
import { colors } from '../../../assets/styles/Colors';
import { Images } from '../../../assets/styles/Images';
import globalStyles from '../../../assets/styles/GlobalStyles';
import Icons from '../IconComponent';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import { Dimension } from '../../../assets/styles/Dimension';
import Button from '../Button';

const SuccessModal = (props) => {
    const {
        title,
        isCredit,
        message1,
        message2,
        availablecredits,
        navigate,
        thankyouimage,
        isCredittext,
        buttontxt,
        loader,
        isloader
    } = props;


    const handleNavigate = () => {
        navigate()
        props.close()
    };

    const handleNavigateloader = () => {
        navigate()
    };
    return (
        <Modal
            isVisible={props.show}
            style={styles.modal}
            backdropColor={colors.black}
            backdropOpacity={0.88}
            // statusBarTranslucent={false}
            // onDismiss={() => props.close()}
            onBackdropPress={() => props && props.close ? props.close() : null}
        >
            <View style={styles.maincontainer}>
                <View style={styles.viewIcon}>
                    <TouchableOpacity onPress={() => { loader ? null : props.close() }}
                    >
                        <Icons
                            type={IconsType.ionIcon}
                            name={IconsName.close}
                            color={loader ? colors.grey : colors.primary}
                            size={Dimension.Big}
                        />
                    </TouchableOpacity>
                </View>
                {thankyouimage ? <View style={styles.row}>
                    <View style={styles.col1}>
                        <Text style={styles.title}>
                            {title ? title : `Thank you !`}
                        </Text>
                    </View>
                    <View style={styles.col2}>

                        <View style={styles.viewImage}>
                            <Image
                                source={Images.heart}
                                style={globalStyles.image}
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                </View> : <View style={styles.mainhead2}>
                    <View >
                        <Text style={styles.title}>
                            {title ? title : `Thank you !`}
                        </Text>
                    </View>
                </View>}
                <Text style={styles.name}>
                    {message1 ? message1 : 'Hello'}
                </Text>
                {message2 ? <Text style={styles.discription}>
                    {message2 ? message2 : ''}
                </Text> : null}
                {isCredittext ? <Text style={styles.available}>
                    Available Credits
                </Text> : null}
                {isCredit ? <View style={styles.creditRing1}>
                    <View style={styles.creditRing2}>
                        <View style={[styles.creditRing, Platform.OS === 'ios' ? styles.shadow : styles.shadow2]}>
                            <Text style={styles.number}>
                                {availablecredits ? availablecredits : 0}
                            </Text>
                        </View>
                    </View>
                </View> : null}
                {isloader ? <>

                    {loader ?
                        <View style={[styles.btnStyle, styles.btnContainerStyle]}>
                            <ActivityIndicator
                                color={colors.white}
                                size={'small'}
                                style={{ alignSelf: 'center' }}
                            />
                        </View> : <View style={styles.viewBtn}>
                            <Button
                                title={buttontxt ? buttontxt : 'Back'}
                                buttonStyle={styles.btnStyle}
                                onPress={() => handleNavigateloader()}
                            />

                        </View>}

                </>

                    : <View style={styles.viewBtn}>
                        <Button
                            title={buttontxt ? buttontxt : 'Back'}
                            buttonStyle={styles.btnStyle}
                            onPress={() => handleNavigate()}
                        />
                    </View>}
            </View>
        </Modal>
    )
};

export default SuccessModal