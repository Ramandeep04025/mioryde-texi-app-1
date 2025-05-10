import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import { colors } from '../../../assets/styles/Colors';
import { Dimension } from '../../../assets/styles/Dimension';
import globalStyles from '../../../assets/styles/GlobalStyles';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import Button from '../Button';
import Icons from '../IconComponent';
import { styles } from './style';



const DeletModal = (props) => {
    const { message } = props;

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
                <View style={styles.deletIconSub}>
                    <Icons
                        type={IconsType.antDesign}
                        name={IconsName.delete}
                        color={colors.primary}
                        size={Dimension.Big}
                    />
                </View>
                <View style={styles.meeageMain}>
                    <Text style={styles.message}>
                        {message ? message : ''}
                    </Text>
                </View>
                <View style={globalStyles.Row}>
                    <View style={styles.button1}>
                        <Button
                            title={'Back'}
                            titleStyle={styles.titleStyle}
                            buttonStyle={styles.btnStyle1}
                            onPress={() => (props.close())}
                        />
                    </View>
                    <View style={styles.button2}>
                        <Button
                            title={'Delete'}
                            buttonStyle={styles.btnStyle}
                            onPress={() => props && props.onConfirm ? props.onConfirm() : ''}
                        />
                    </View>
                </View>
                <View style={styles.viewIcon}>
                    <TouchableOpacity onPress={() => props.close()}>
                        <Icons
                            type={IconsType.ionIcon}
                            name={IconsName.close}
                            color={colors.primary}
                            size={Dimension.large2}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default DeletModal