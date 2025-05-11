import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Images } from '../../../../assets/styles/Images'
import globalStyles from '../../../../assets/styles/GlobalStyles'
import { colors } from '../../../../assets/styles/Colors'
import { IconsName, IconsType } from '../../../../assets/styles/Icon'
import { Dimension } from '../../../../assets/styles/Dimension'
import { Loader } from '../../../../helpers/loader'
import { styles } from './styles'
import { HeaderComponet } from '../../../components/header/Header'
import { Button, Input } from '@rneui/themed'
import { dpWidth } from '../../../../assets/styles/Sizes'


const AllowLocationScreen = (props) => {
    const {
        values,
        isError,
        handleChange,
        handleSubmit,
        secureTextEntry,
        setSecureTextEntry,
        loader,
        navigation
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
                <View style={styles.centerTextBody}>
                    <View style={styles.locationIconMian}>
                        <Image
                            style={globalStyles.image}
                            source={Images.location}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={styles.text1}>Set Location</Text>
                    <Text style={styles.text2}>To serve you better, we need access to your location.</Text>
                </View>
                <View style={styles.bottomButton}>
                    <Button
                        title='Skip'
                        onPress={() => handleSubmit()}
                    />
                    <View style={styles.enterManullayButtn}>
                        <Button
                            buttonStyle={styles.entermanullyButtonStyle}
                            title='Enter Manually'
                            onPress={() => navigation.navigate("enter_manully_location")}
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
export default AllowLocationScreen