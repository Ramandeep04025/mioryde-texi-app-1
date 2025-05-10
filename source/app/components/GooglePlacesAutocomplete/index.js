
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from '../../../assets/styles/Colors';
import { dpBorderWidth, dpFont, dpHeight, dpWidth } from '../../../assets/styles/Sizes';
import { Font } from '../../../assets/styles/FontsFamily';
import masterCarPostController from '../../apis/controllers/masterAPIs/masterCarPostController';
import { Toaster } from '../../../helpers/toaster';
import { Text, TouchableOpacity } from 'react-native'
import { useEffect, useRef } from 'react';
import Constant from '../../apis/constant';
import Icons from '../IconComponent';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import { Dimension } from '../../../assets/styles/Dimension';



export const GooglePlacesAutoComplete = (props) => {
    const {
        onChange,
        error,
        value,
        placeholderTextColor,
        textInputContainer,
        listView,
        iconmainstyle
    } = props
    const ref = useRef();


    useEffect(() => {
        if (ref && ref.current) {
            if (value) {
                ref.current?.setAddressText(value);
            }
            else {
                ref.current?.setAddressText('');
            }
        }
    }, [value]);


    const handlePlaceSelected = async (placeId) => {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${Constant.googleLocationKey}`;
        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const placeDetails = await response.json();
                let latitude = placeDetails.result.geometry.location.lat
                let longitude = placeDetails.result.geometry.location.lng
                //For getting exact detail such as post_code
                const response2 = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                if (response2 && response2.ok) {
                    const data = await response2.json();
                    let state = data && data.address && data.address.state
                    let city = data && data.address && data.address.city
                    let response3 = await masterCarPostController.getCityStateIds(state, city);
                    if (response3 && response3.status) {
                        let newdata = {
                            address: data && data.address && data.address.state && data.address.country ? `${data.address.city}, ${data.address.state}, ${data.address.country}` : null,
                            city_id: response3 && response3.city_id ? response3.city_id : null,
                            state_id: response3 && response3.state_id ? response3.state_id : null,
                            zip: data && data.address && data.address.postcode ? data.address.postcode : null,
                            location: data && data.display_name ? data.display_name : null,
                            longitude: data && data.lon ? data.lon : null,
                            latitude: data && data.lat ? data.lat : null,
                        };
                        onChange(newdata);
                    }
                    else {
                        onChange('');
                    }
                }
                else {
                    new Toaster().error('Something went wrong, Please try again');
                }
            } else {
                console.error('Failed to fetch additional place details');
            }
        } catch (error) {
            console.error('Error fetching place details:', error);
        }
    };


    return (
        <>
            <GooglePlacesAutocomplete
                ref={ref}
                placeholder='Location'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    if (data.place_id) {
                        handlePlaceSelected(data.place_id);
                    }
                }}
                query={{
                    key: `${Constant.googleLocationKey}`,
                    language: 'en',
                    types: 'geocode'
                }}
                components={{ country: ['us', 'ca'] }}
                onFail={(errors) => console.log(errors, "==============error")}
                returnKeyType={'search'}
                enablePoweredByContainer={false}
                keyboardShouldPersistTaps='handled'
                textInputProps={{
                    placeholderTextColor: placeholderTextColor ? placeholderTextColor : colors.placeholderColor,
                    fontSize: dpFont(16),
                    fontFamily: Font.regular,
                }}
                styles={{
                    container: {
                        flex: 1,
                    },
                    textInputContainer: textInputContainer ? textInputContainer :
                        {
                            borderColor: colors.white,
                            borderRadius: dpHeight(8),
                            paddingLeft: dpWidth(3),
                            paddingRight: dpWidth(12),
                            height: dpHeight(7),
                            paddingTop: dpHeight(0.3),
                            alignItems: 'center',
                            backgroundColor: colors.white,
                            marginHorizontal: 0,
                        },
                    textInput: {
                        fontSize: dpFont(16),
                        color: colors.darkGrey,
                        fontFamily: Font.semiBold,
                    },
                    description: {
                        color: colors.black,
                        fontSize: dpFont(16),
                        fontFamily: Font.semiBold,
                    },
                    listView: listView ? listView : {
                        borderRadius: dpHeight(2), // Apply borderRadius to listViewContainer
                        marginTop: dpHeight(1),
                        overflow: 'hidden', // Ensure that borderRadius is applied
                    },
                    placeholderText: {
                        color: colors.gray, // Set the color of the placeholder text
                        fontSize: dpFont(16),
                        fontFamily: Font.semiBold,
                    },
                }}
            />
            <TouchableOpacity style={iconmainstyle ? iconmainstyle : {
                position: 'absolute',
                right: 23.5,
                top: 16
            }}
            >
                <Icons
                    type={IconsType.entypo}
                    name={IconsName.locationPin}
                    color={colors.darkGray}
                    size={Dimension.large3}
                />
            </TouchableOpacity>
            {error && <Text style={{
                color: colors.errorColor,
                fontSize: dpFont(12),
                marginTop: dpHeight(0.5),
                marginLeft: dpWidth(1),
                fontFamily: Font.regular
            }}> {error}</Text >
            }
        </>
    )
}