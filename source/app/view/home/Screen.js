import { FlatList, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors } from '../../../assets/styles/Colors';
import { Images } from '../../../assets/styles/Images';
import globalStyles from '../../../assets/styles/GlobalStyles';
import { dpFont, dpHeight } from '../../../assets/styles/Sizes';
import { Icon } from '@rneui/base';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import { InternalHeader } from '../../components/header2/internalHeader';


const HomeScreen = (props) => {
    const {
        setShow,
        show,
    } = props

    const arr = [
        {
            id: 1,
            title: 'Parcel',
            img: Images.parcel
        },
        {
            id: 2,
            title: 'Auto',
            img: Images.auto
        },
        {
            id: 3,
            title: 'Car',
            img: Images.car
        },
        {
            id: 4,
            title: 'Bike',
            img: Images.bike
        },
        {
            id: 5,
            title: 'Truck',
            img: Images.truck2
        },
        {
            id: 6,
            title: 'Delivery',
            img: Images.delivery
        },
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.tab}>
            <View style={styles.bikeImgBg}>
                <View style={styles.bikeImg}>
                    <Image
                        source={item.img ? item.img : Images.parcel}
                        style={globalStyles.image}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <Text style={styles.title}>{item.title ? item.title : null}</Text>
        </TouchableOpacity>
    );

    const renderItem2 = ({ item, index }) => (
        <View style={index === 1 ? [styles.row2, { borderBottomWidth: 0 }] : styles.row2}>
            <View style={styles.leftSide}>
                <View style={styles.arrowCircleBg}>
                    <View style={styles.arrowCircle}>
                        <Image
                            source={Images.arrowCircle}
                            style={globalStyles.image}
                            resizeMode='cover'
                        />
                    </View>
                </View>
                <View style={styles.Info}>
                    <Text style={styles.title2}>Lorem ipsum </Text>
                    <Text style={styles.desc2}>Lorem ipsum sit dor amet ipsum lorem Lorem ipsum sit</Text>
                </View>
            </View>
            <View style={styles.rightSide}>
                <TouchableOpacity
                    style={styles.dots}
                    onPress={() => setShow(index)}>
                    <Icon
                        name={IconsName.dotsHor}
                        type={IconsType.entypo}
                        size={dpFont(15)}
                        color={colors.white}
                    />
                </TouchableOpacity>
                {show === index &&
                    <TouchableOpacity
                        style={styles.deleteTab}
                        onPress={() => setShow(false)}>
                        <Text style={styles.deleteTxt}>Delete</Text>
                    </TouchableOpacity>}
            </View>
        </View>
    )

    return (
        <View style={styles.main}>
            <InternalHeader
                leftIcon='menu'
                rightImg={true}
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
                        <Text style={styles.heading}>Book your ride</Text>
                        <FlatList
                            data={arr}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.flatListStyle}
                            contentContainerStyle={styles.flatContainer}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                        <View style={styles.bannerView}>
                            <View style={styles.leftCol}>
                                <Text style={styles.bannerHeading}>Bike, car, Auto</Text>
                                <Text style={styles.bannerDesc}>Lorem ipsum sitdor amet ipsum lorem sit</Text>
                            </View>
                            <View style={styles.rightCol}>
                                <View style={styles.bannerBg}>
                                    <Image
                                        source={Images.bannerBg}
                                        style={globalStyles.image}
                                        resizeMode='cover'
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.heading}>Recent</Text>
                        <FlatList
                            data={[1, 2]}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderItem2}
                            keyExtractor={(_, index) => index}
                        />
                        <View style={styles.banner2}>
                            <View style={styles.bannerBackgroundOverlay} />
                            <ImageBackground
                                source={Images.location}
                                style={styles.bannerBg2}
                                resizeMode="cover"
                                imageStyle={styles.bannerImageStyle}
                            >
                                <View style={styles.bannerRow}>
                                    <View style={styles.bannerLeft}>
                                        <Text style={styles.bannerTitle2}>Lom opsum sit</Text>
                                        <Text style={styles.bannerDesc2}>Lorem ipsum sitdor amet ipsum lorem sit</Text>
                                    </View>
                                    <View style={styles.bannerRight}>
                                        <View style={styles.autoImg}>
                                            <Image
                                                source={Images.auto2}
                                                style={globalStyles.image}
                                                resizeMode="contain"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.bottomView}>
                            <ImageBackground
                                source={Images.bgImg3}
                                style={styles.bgImg3}
                                resizeMode="cover"
                            >
                                <View style={styles.branding}>
                                    <Text style={styles.mio}>
                                        mio<Text style={styles.ryde}>RYDE</Text>
                                    </Text>
                                    <Text style={styles.madeTxt}>Made in India</Text>
                                </View>
                            </ImageBackground>
                        </View>

                    </View>
                </ScrollView>

            </KeyboardAvoidingView>
        </View >
    )
}

export default HomeScreen