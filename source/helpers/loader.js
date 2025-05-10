import { StyleSheet, View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { colors } from '../assets/styles/Colors';
import { dpFont, dpHeight } from '../assets/styles/Sizes';
import { Image, Text } from '@rneui/themed';
import { Images } from '../assets/styles/Images';
import globalStyles from '../assets/styles/GlobalStyles';
import FastImage from 'react-native-fast-image';
import { Font } from '../assets/styles/FontsFamily';


export const Loader = (props) => {
    return (
        <>
            {
                props && props.loader ?
                    <View style={styles.background}>
                        <SkypeIndicator
                            size={dpFont(70)}
                            color={colors.primary}
                        />
                        {/* <View style={styles.main}>
                            <FastImage
                                source={Images.tire}
                                style={globalStyles.image}
                                resizeMode='contain'
                            />
                            <View style={styles.txtmain}>
                                <Text style={styles.txtload}>{props.txt ? props.txt : 'Loading...'}</Text>
                            </View>
                            {props.txt2 ? <View style={styles.txtmain}>
                                <Text style={styles.txtload}>{props.txt2 ? props.txt2 : ''}</Text>
                            </View> : null}
                        </View> */}
                    </View>
                    :
                    null
            }
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        top: 0,
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0,
        opacity: 0.9,
        zIndex: 9999,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    main: {
        height: dpHeight(10),
        width: dpHeight(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtmain: {
        marginTop: dpHeight(1)
    }
    ,
    txtload: {
        fontSize: dpFont(20),
        color: colors.black,
        fontFamily: Font.bold
    }
});
