import React from 'react';
import { Image, Text, View } from 'react-native';
import Modal from "react-native-modal";
import { colors } from '../../../assets/styles/Colors';
import globalStyles from '../../../assets/styles/GlobalStyles';
import { styles } from './style';
import { Images } from '../../../assets/styles/Images';
import { Button } from '@rneui/themed';


const VerifiyModal = (props) => {
    const { message, discriptionn } = props;

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
                <View style={styles.absulateImage}>
                    <View style={styles.absulateSub}>
                        <Image
                            style={globalStyles.image}
                            source={Images.victory2}
                            resizeMode='contain'
                        />
                    </View>
                    <Image
                        style={globalStyles.image}
                        source={Images.victoryCap}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.meeageMain}>
                    <Text style={styles.message}>
                        {message ? message : ''}
                    </Text>
                    <Text style={styles.dis}>
                        {discriptionn ? discriptionn : ''}
                    </Text>
                </View>
                <View style={globalStyles.Row}>
                    <Button
                        title={'Okay'}
                        onPress={() => props && props.onConfirm ? props.onConfirm() : ''}
                    />
                </View>
            </View>
        </Modal>
    )
};

export default VerifiyModal