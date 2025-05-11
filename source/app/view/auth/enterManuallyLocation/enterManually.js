import { View, Text, ScrollView } from 'react-native'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { Loader } from '../../../../helpers/loader'
import { styles } from './styles'
import { HeaderComponet } from '../../../components/header/Header'
import { Button, Input } from '@rneui/themed'
import CustomDropdown from '../../../components/dropdown'



const EnterManullyLocationScreen = (props) => {
    const {
        values,
        isError,
        handleChange,
        handleSubmit,
        secureTextEntry,
        setSecureTextEntry,
        loader,
    } = props;

    return (
        <>
            <HeaderComponet
                leftIcon={"back"}
                center={"headerlabel"}
                headerLabel={"Location"}
            />
            <ScrollView
                style={styles.ScrollView}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.screenLabelContainer}>
                    <Text style={styles.mainLabel}>Enter location</Text>
                </View>
                <View style={styles.body}>
                    <CustomDropdown placeholder={"Country"}/>
                    <View style={globalStyles.Row}>
                        <View style={globalStyles.col5MR}>
                            <CustomDropdown placeholder={"State"} />
                        </View>
                        <View style={globalStyles.col5}>
                            <Input
                                placeholder="Pin code"
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
                        placeholder="Street"
                        value={values && values.password}
                        handleChange={(e) => handleChange("password", e)}
                        error={isError && isError.password && isError.password.message ? isError.password.message : null}
                    />
                </View>
                <View style={styles.bottomButton}>
                    <Button
                        title='Proceed'
                        onPress={() => handleSubmit()}
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
export default EnterManullyLocationScreen