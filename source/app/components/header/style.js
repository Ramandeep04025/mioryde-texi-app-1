import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpFont, dpHeight, dpWidth } from "../../../assets/styles/Sizes";
import { Font } from "../../../assets/styles/FontsFamily";


export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: dpWidth(5),
        paddingTop: Platform.OS === "ios" ? dpHeight(6.5) : dpHeight(5.2),
        paddingBottom: dpHeight(0.2),
        paddingVertical: dpHeight(3),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: dpHeight(12)
    },
    leftSideContainer: {
        flex: 0.15,
        alignItems: 'flex-start'
    },
    centerPart: {
        flex: 0.70,
        alignItems: 'center'
    },
    centertext: {
        fontSize: dpFont(17),
        fontWeight: Font.medium,
        color: colors.black
    },
    rightSideContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
    },
    backIcon: {
        height: dpWidth(12),
        width: dpWidth(12),
        borderRadius: dpHeight(20),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    }
});