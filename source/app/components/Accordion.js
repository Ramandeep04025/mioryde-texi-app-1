import { View, TouchableOpacity, Text , StyleSheet } from 'react-native';
import Icons from './IconComponent';
import { IconsName, IconsType } from '../../assets/styles/Icon';
import { colors } from '../../assets/styles/Colors';
import { Dimension } from '../../assets/styles/Dimension';
import { dpFont, dpHeight } from '../../assets/styles/Sizes';
import { Font } from '../../assets/styles/FontsFamily';
import globalStyles from '../../assets/styles/GlobalStyles';


const Accordion = (props) => {
    const {
        title,
        content,
        handleExpand,
        expanded,
        item
    } = props;
    
    return (
        <View >
            <View style={[styles.mainView,globalStyles.shadow6]}>
                <TouchableOpacity onPress={() => handleExpand(item)}>
                    <View style={styles.row}>
                        <View style={styles.col1}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <View style={styles.col2}>
                            <Icons
                                type={IconsType.antDesign}
                                name={expanded ? IconsName.upArrow : IconsName.down}
                                color={colors.black}
                                size={Dimension.medium}
                                style={styles.icon}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                {expanded && (
                    <Text style={styles.contentTxt}>{content}</Text>
                )}
            </View>
     
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: colors.white,
        borderRadius: dpHeight(1.5),
        padding: dpHeight(2.2),
        marginBottom: dpHeight(2),
    },
    title: {
        color: colors.darkGrey,
        fontFamily: Font.medium,
        fontSize: dpFont(16),
    },
    contentTxt: {
        color: colors.darkGrey,
        fontFamily: Font.medium,
        fontSize: dpFont(14),
        paddingTop:dpHeight(1.5)
    },
    row: {
        flexDirection: 'row',
    },
    col1: {
        flex: 0.9,
    },
    col2: {
        flex: 0.1,
        alignItems: "flex-end",
        justifyContent:'flex-start' 
    },
    icon: {
        paddingTop:dpHeight(0)
    }
})

export default Accordion;


