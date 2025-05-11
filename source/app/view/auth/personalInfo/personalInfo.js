import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { Loader } from '../../../../helpers/loader'
import { styles } from './styles'
import { HeaderComponet } from '../../../components/header/Header'
import { Button, Input } from '@rneui/themed'
import { dpWidth } from '../../../../assets/styles/Sizes'
import Icons from '../../../components/IconComponent'
import { IconsName, IconsType } from '../../../../assets/styles/Icon'
import { colors } from '../../../../assets/styles/Colors'
import { Dimension } from '../../../../assets/styles/Dimension'


const PersonalInfoScreen = (props) => {
    const {
        values,
        isError,
        handleChange,
        handleSubmit,
        secureTextEntry,
        setSecureTextEntry,
        loader
    } = props;


    return (
        <>
            <HeaderComponet
                leftIcon={"back"}
                center={"headerlabel"}
                headerLabel={"Sign Up"}
            />
            <ScrollView
                style={styles.ScrollView}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.screenLabelContainer}>
                    <Text style={styles.mainLabel}>Personal info</Text>
                    <Text style={styles.text2}>Profile picture /<Text style={styles.text3}> Upload</Text></Text>
                    <View style={styles.userimage}>
                        <Image
                            style={globalStyles.image}
                            source={Images.userDummy}
                            resizeMode="cover"
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={globalStyles.Row}>
                        <View style={globalStyles.col5MR}>
                            <Input
                                placeholder="First name"
                                value={values && values.password}
                                handleChange={(e) => handleChange("password", e)}
                                error={isError && isError.password && isError.password.message ? isError.password.message : null}
                                RightImage={true}
                                RightImageSource={secureTextEntry ? Images.eye : Images.eyeOpen}
                                handleRightImageClick={() => setSecureTextEntry(!secureTextEntry)}
                                secureTextEntry={secureTextEntry}
                            />
                        </View>
                        <View style={globalStyles.col5}>
                            <Input
                                placeholder="Last name"
                                value={values && values.password}
                                handleChange={(e) => handleChange("password", e)}
                                error={isError && isError.password && isError.password.message ? isError.password.message : null}
                                RightImage={true}
                                RightImageSource={secureTextEntry ? Images.eye : Images.eyeOpen}
                                handleRightImageClick={() => setSecureTextEntry(!secureTextEntry)}
                                secureTextEntry={secureTextEntry}
                            />
                        </View>
                    </View>
                    <Input
                        placeholder="Email address"
                        value={values && values.password}
                        handleChange={(e) => handleChange("password", e)}
                        error={isError && isError.password && isError.password.message ? isError.password.message : null}
                    />
                    <Input
                        placeholder="Password"
                        value={values && values.password}
                        handleChange={(e) => handleChange("password", e)}
                        error={isError && isError.password && isError.password.message ? isError.password.message : null}
                        RightImage={true}
                        RightImageSource={secureTextEntry ? Images.eyeOff : Images.eyeOff}
                        handleRightImageClick={() => setSecureTextEntry(!secureTextEntry)}
                        secureTextEntry={secureTextEntry}
                        rightIcon={
                            <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                                <Image
                                    source={secureTextEntry ? Images.eyeOff : Images.eyeOff}
                                    style={{ width: dpWidth(5), height: dpWidth(5) }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                    />
                    <Input
                        placeholder="Confirm password"
                        value={values && values.password}
                        handleChange={(e) => handleChange("password", e)}
                        error={isError && isError.password && isError.password.message ? isError.password.message : null}
                        RightImage={true}
                        RightImageSource={secureTextEntry ? Images.eyeOff : Images.eyeOff}
                        handleRightImageClick={() => setSecureTextEntry(!secureTextEntry)}
                        secureTextEntry={secureTextEntry}
                        rightIcon={
                            <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                                <Image
                                    source={secureTextEntry ? Images.eyeOff : Images.eyeOff}
                                    style={{ width: dpWidth(5), height: dpWidth(5) }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                    />
                    <View style={styles.passvaliTextMain}>
                        <View style={globalStyles.row}>
                            <Icons
                                type={IconsType.antDesign}
                                name={IconsName.check}
                                color={colors.primary}
                                size={Dimension.small}
                            />
                            <Text style={styles.passvaliText}>
                                Only contains letters, numbers and hyphens</Text>
                        </View>
                        <View style={globalStyles.row}>
                            <Icons
                                type={IconsType.antDesign}
                                name={IconsName.check}
                                color={colors.primary}
                                size={Dimension.small}
                            />
                            <Text style={styles.passvaliText}>
                                At least 3 characters</Text>
                        </View>
                    </View>
                    <View style={styles.bottomButton}>
                        <Button
                            title='Next'
                            onPress={() => handleSubmit()}
                        />
                    </View>
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
export default PersonalInfoScreen