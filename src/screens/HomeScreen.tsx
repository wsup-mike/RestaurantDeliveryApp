import React, {useState, useEffect, useReducer} from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { onUpdateLocation, UserState, ApplicationState, onAvailability, ShoppingState } from "../redux";
import { ShoppingReducer } from "../redux/reducers/shoppingReducer";

const screenWidth = Dimensions.get('screen').width;

interface LandingProps {
    userReducer: UserState,
    shoppingReducer: ShoppingState,
    onUpdateLocation: Function,
    onAvailability: Function,
}


const _HomeScreen: React.FC<LandingProps> = (props) => {
      
    const { userReducer, onUpdateLocation} = props;
    const navigation = useNavigation();
    const [errorMsg, setErrorMsg] = useState("");
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
    const [displayAddress, setDisplayAddress] =  useState("Waiting for current location");
    const { location } = props.userReducer;
    

    useEffect(() => {
        (async() => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if ( status !== 'granted') {
                setErrorMsg('Permission to access device location not granted')
            }

            let location: any = await Location.getCurrentPositionAsync({});

            const { coords } = location;

            if (coords) {
                const { latitude, longitude } = coords;

                let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude })

                for(let item of addressResponse) {
                    setAddress(item)
                    onUpdateLocation(address)
                    let currentAddress = `${item.name} ${item.city} ${item.postalCode}`
                    setDisplayAddress(currentAddress)                    
                    return;
                }

            } else {
                //notify user something went wrong with location
            }
        })();

    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text>Navigation</Text>
            </View>
            <View style={styles.body}>
                <Text>The detected address is:</Text>
                <Text>{displayAddress}</Text>
                <Text>Home Screen</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },

    navigation: {
        flex: 2,
        backgroundColor: 'red',

    },

    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },

    footer: {
        flex: 1,
        backgroundColor: 'cyan',
    }
});

const mapToStateProps = (state: ApplicationState) => ({
    useReducer: state.userReducer,
    shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, { onUpdateLocation, onAvailability })(_HomeScreen)

export { HomeScreen }
