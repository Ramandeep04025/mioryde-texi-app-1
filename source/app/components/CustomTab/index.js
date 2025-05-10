import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import globalStyles from '../../../assets/styles/GlobalStyles';


export const NavgationTabs = (props) => {

    return (
        <View style={[styles.container,Platform.OS==='ios'?globalStyles.shadow6: globalStyles.shadow3]}>
            <View style={globalStyles.Row}>
                {
                    props && props.types ?
                        props.types.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => props && props.onChange ? props.onChange(index) : ''}
                                style={props && props.active === index ? [styles.tab] : styles.tab2}
                            >
                                <Text style={props && props.active === index ? styles.text : styles.text2}>{item.name}</Text>
                            </TouchableOpacity>
                        ))
                        :
                        null
                }
            </View>
        </View>
    )
};


