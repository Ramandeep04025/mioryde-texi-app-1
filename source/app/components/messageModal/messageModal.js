import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import { colors } from '../../../assets/styles/Colors';
import globalStyles from '../../../assets/styles/GlobalStyles';
import { dpHeight } from '../../../assets/styles/Sizes';
import { Loader } from '../../../helpers/loader';
import Button from '../Button';
import Input from '../Input';
import { styles } from './style';

const MessageModalComp = (props) => {
    const {
        height,
        setHeight,
        checked,
        setChecked,
        showVehicleInfo,
        setShowVehicleInfo,
        values,
        isError,
        handleChange,
        handleSubmit,
        data,
        loader,
        close,
        ischecked,
        setIsChecked
    } = props;
    const [height1, setHeight1] = useState(null);

    return (
        <Modal
            isVisible={props.show}
            style={styles.modal}
            backdropColor={colors.black}
            backdropOpacity={0.88}
            // swipeDirection={'down'}
            onBackdropPress={() => close()}
            statusBarTranslucent={true}
        >
            <View style={styles.maincontainer}>
                <View style={styles.heading}>
                    <Text style={styles.messageTxt}>Message Seller</Text>
                </View>
                <View style={styles.viewScoll}>
                    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : null}>
                        <ScrollView
                            contentContainerStyle={styles.scrollContainer}
                            showsVerticalScrollIndicator={false}
                        >
                            <View>
                                <View style={styles.viewInput}>
                                    <Input
                                        style={[styles.inputStyle, globalStyles.shadow6]}
                                        placeholder="First Name"
                                        value={values && values.firstName}
                                        handleChange={(e) => handleChange("firstName", e)}
                                        error={isError && isError.firstName && isError.firstName.message ? isError.firstName.message : null}
                                    />
                                    <Input
                                        style={[styles.inputStyle, globalStyles.shadow6]}
                                        placeholder="Last Name"
                                        value={values && values.lastName}
                                        handleChange={(e) => handleChange("lastName", e)}
                                        error={isError && isError.lastName && isError.lastName.message ? isError.lastName.message : null}
                                    />
                                    <Input
                                        style={[styles.inputStyle, globalStyles.shadow6]}
                                        placeholder="Email"
                                        keyboardType={'email-address'}
                                        value={values && values.email}
                                        handleChange={(e) => handleChange("email", e)}
                                        autoCapitalize={'none'}
                                        error={isError && isError.email && isError.email.message ? isError.email.message : null}
                                    />
                                    <Input
                                        style={[styles.inputStyle, globalStyles.shadow6]}
                                        placeholder="Phone"
                                        keyboardType={'phone-pad'}
                                        value={values && values.phoneNumber}
                                        maxLength={10}
                                        handleChange={(e) => handleChange("phoneNumber", e)}
                                        autoCapitalize={'none'}
                                        error={isError && isError.phoneNumber && isError.phoneNumber.message ? isError.phoneNumber.message : null}
                                    />
                                    <Input
                                        style={[styles.inputStyle1, globalStyles.shadow6, { height: Platform.OS === "ios" ? height + dpHeight(5) : height + dpHeight(10) }]}
                                        placeholder="Type Message Here..."
                                        multiline={true}
                                        textAlignVertical={"top"}
                                        value={values && values.message}
                                        handleChange={(e) => handleChange("message", e)}
                                        error={isError && isError.message && isError.message.message ? isError.message.message : null}
                                        onContentSizeChange={(e) => (setHeight(e.nativeEvent.contentSize.height))}
                                    />
                                </View>
                                {data.dealer_id && <Button
                                    buttonStyle={styles.btnStyle}
                                    containerStyle={styles.btnContainerStyle}
                                    title='I Have a Trade In'
                                    onPress={() => setShowVehicleInfo(!showVehicleInfo)}
                                />}
                                {showVehicleInfo ? <Input
                                    style={[styles.inputStyle1, globalStyles.shadow6, { height: Platform.OS === "ios" ? height1 + dpHeight(5) : height + dpHeight(10) }]}
                                    placeholder="Vehicle Info"
                                    multiline={true}
                                    textAlignVertical={"top"}
                                    value={values && values.vehicleInfo}
                                    handleChange={(e) => handleChange("vehicleInfo", e)}
                                    error={isError && isError.vehicleInfo && isError.vehicleInfo.message ? isError.vehicleInfo.message : null}
                                    onContentSizeChange={(e) => (setHeight1(e.nativeEvent.contentSize.height))}
                                />
                                    :
                                    null}

                                <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        title={'By submitting my information on Carzino, I agree to receive communications from Carzino &, from the vehicle’s seller, and from the seller’s agent(s). By using this service, you accept the terms of our privacy statement.'}
                                        checked={checked}
                                        textStyle={styles.labelStyle}
                                        onPress={() => { setChecked(!checked), setIsChecked(false) }}
                                        containerStyle={{
                                            padding: 0,
                                            // backgroundColor:'red'
                                        }}
                                        checkedColor={colors.primary}
                                        uncheckedColor={colors.grey}
                                        wrapperStyle={{
                                            alignItems: 'flex-start'
                                        }}
                                    />
                                </View>
                            </View>
                            {ischecked ? <View style={styles.checkboxmain}>
                                <Text style={styles.errorText}>This field is required</Text>
                            </View> : null}
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.btttnmain}>
                    <View style={styles.btnView}>
                        <View style={styles.Col1}>
                            <TouchableOpacity onPress={() => props.close()}>
                                <Text style={styles.clearTxt}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Col2}>
                            <Button title='Submit'
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                </View>
            </View>
            {
                loader ?
                    <Loader loader={loader} />
                    : null
            }
        </Modal>
    )
};
export default MessageModalComp