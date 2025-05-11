import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Button, Icon, Input } from '@rneui/themed';
import { dpFont, dpHeight } from '../../../assets/styles/Sizes';
import { HeaderComponet } from '../../components/header/Header';
import { Images } from '../../../assets/styles/Images';
import globalStyles from '../../../assets/styles/GlobalStyles';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import { colors } from '../../../assets/styles/Colors';


const EditProfileScreen = () => {


    return (
        <>
            <HeaderComponet
                leftIcon='back'
                headerLabel="Edit profile"
                center={"headerlabel"}
            />
            <KeyboardAvoidingView
                style={{ flexGrow: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled={true}
            >
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.innerView}>
                        <View style={styles.top}>
                            <View style={styles.profileImg}>
                                <Image
                                    source={Images.user}
                                    style={globalStyles.image}
                                    resizeMode='cover'
                                />
                            </View>
                            <TouchableOpacity style={styles.editIcon}>
                                <Icon
                                    name={IconsName.edit2}
                                    type={IconsType.feather}
                                    color={colors.black}
                                    size={dpFont(25)}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.row}>
                                <View style={styles.col}>
                                    <Input
                                        placeholder="Alyx"
                                    // value={values && values.email}
                                    // handleChange={(e) => handleChange("email", e)}
                                    // error={isError && isError.email && isError.email.message ? isError.email.message : null}
                                    />
                                </View>
                                <View style={styles.col}>
                                    <Input
                                        placeholder="poler"
                                    // value={values && values.email}
                                    // handleChange={(e) => handleChange("email", e)}
                                    // error={isError && isError.email && isError.email.message ? isError.email.message : null}
                                    />
                                </View>
                            </View>
                            <Input
                                placeholder="+91 9898989898"
                                rightIcon={
                                    <Text style={styles.rightTxt}>Change</Text>
                                }
                            // value={values && values.email}
                            // handleChange={(e) => handleChange("email", e)}
                            // error={isError && isError.email && isError.email.message ? isError.email.message : null}
                            />
                            <Input
                                placeholder="alyxpoller@sample.com"
                                rightIcon={
                                    <Text style={styles.rightTxt}>Change</Text>
                                }
                            // value={values && values.email}
                            // handleChange={(e) => handleChange("email", e)}
                            // error={isError && isError.email && isError.email.message ? isError.email.message : null}
                            />
                            <Input
                                placeholder="Mohali"
                            // value={values && values.email}
                            // handleChange={(e) => handleChange("email", e)}
                            // error={isError && isError.email && isError.email.message ? isError.email.message : null}
                            />
                            <Input
                                placeholder="Punjab"
                            // value={values && values.email}
                            // handleChange={(e) => handleChange("email", e)}
                            // error={isError && isError.email && isError.email.message ? isError.email.message : null}
                            />
                            <View style={styles.btnView}>
                                <Button
                                    title="Save changes"
                                />
                            </View>
                        </View>
                    </View>

                </ScrollView>

            </KeyboardAvoidingView>
        </>
    )
}

export default EditProfileScreen