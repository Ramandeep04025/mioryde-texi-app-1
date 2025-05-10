import NetInfo from '@react-native-community/netinfo';
import React from 'react';
import { Linking, PermissionsAndroid, Platform} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import { Toaster } from './toaster';
import { store } from '../redux/store';
import { setLocation, setLocationStatus } from '../redux/action/user';


class LocationService extends React.Component {
  constructor(props) {
    super(props);
  }

  checkLocation = async () => {
    let grant = false;
    if (Platform.OS === 'ios') {
      grant = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
      if (grant) {
        const locationServicesAvailable = await NetInfo.fetch();
        if (locationServicesAvailable.isConnected) {
          grant = true;
          await store.dispatch(setLocationStatus(grant));
        } else {
          grant = false;
          await store.dispatch(setLocationStatus(grant));
        }
      } else {
        await store.dispatch(setLocationStatus(grant));
      }
    } else {
      grant = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (grant) {
        const locationServicesAvailable = await NetInfo.fetch();
        if (locationServicesAvailable.isConnected) {
          grant = true;
          await store.dispatch(setLocationStatus(grant));
        } else {
          grant = false;
          await store.dispatch(setLocationStatus(grant));
        }
      } else {
        await store.dispatch(setLocationStatus(grant));
      }
    }
    return grant;
  };


  //Get Current location of user
  getInitialState = async () => {
    await this.getLocation().then(async data => {
      await store.dispatch(
        setLocation({ lat: data.latitude, lng: data.longitude }),
      );
      await store.dispatch(setLocationStatus(true));
    });
  };

  location = async () => {
    if (Platform.OS === 'ios') {
      await this.getInitialState();
    } else {
      let grant = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (grant) {
        await this.getInitialState();
      } else {
        await this.requestLocationPermission();
      }
    }
  };

  //Permissions For Android
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Auswide',
          message: 'Auswide needs access to your device location',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getInitialState();
      } else {
        //requestLocationPermission();
        await store.dispatch(setLocationStatus(false));
        // alert(`${t('er_1')}`);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  handleIosError = async () => {
    await new Toaster().error(
      'Please provide the access of location',
    );
    Linking.openSettings();
  }

  //CURRENT LOCATION
  getLocation = async () => {
    return new Promise(async (resolve, reject) => {
      if (Platform.OS === 'ios')
        await Geolocation.requestAuthorization('always');
      Geolocation.getCurrentPosition(
        data => resolve(data.coords),
        err => {
          if (Platform.OS === 'ios') {
            this.handleIosError();
          } reject(err);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 },
      );
    });
  };
  //GET LOCATION BY NAME
  geocodeLocationByName = locationName => {
    return new Promise((resolve, reject) => {
      Geocoder.from(locationName)
        .then(json => {
          const addressComponent = json.results[0].address_components[0];
          resolve(addressComponent);
        })
        .catch(error => reject(error));
    });
  };

  //GET LOCATion BY COORDINATES(lat,long)
  geocodeLocationByCoords = (lat, long) => {
    return new Promise((resolve, reject) => {
      Geocoder.from(lat, long)
        .then(json => {
          // const addressComponent = json.results[0].address_components[0];
          const addressComponent = json.results[0];
          resolve(addressComponent);
        })
        .catch(error => reject(error));
    });
  };

  //CHECK PERMISSIONS GIVEN OR NOT
  getLocationPermissions = async () => {
    const granted = await request(
      Platform.select({
        android:
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION &&
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
      {
        title: 'Auswide',
        message: 'Auswide app would like access to your location ',
      },
    );
    return granted === RESULTS.GRANTED;
  };
}

export default LocationService;
