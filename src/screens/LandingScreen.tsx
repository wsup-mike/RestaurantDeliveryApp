import React, { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { ParamListBase } from "@react-navigation/native";
import * as Location from 'expo-location';
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackScreen, HomeTabsScreen } from "../../App";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get('screen').width

// interface Props {
//     navigation: StackNavigationProp<ParamListBase>;
// }

export const LandingScreen: React.FC = () => {

    const navigation = useNavigation();

    const [errorMsg, setErrorMsg] = useState("");
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
    const [displayAddress, setDisplayAddress] =  useState("Waiting for current location");

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
                    let currentAddress = `${item.name} ${item.city} ${item.postalCode}`
                    setDisplayAddress(currentAddress)
                    
                    if(currentAddress.length > 0) {
                        setTimeout(() => {
                            navigation.navigate('Home', { screen: 'Home' });
                        }, 500)
                    }
                    
                    return;
                }

            } else {
                //notify user something went wrong with location
            }
        })();

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.navigation} />
            
            <View style={styles.body}>
                <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressContainer}>Your delivery address</Text>
                </View>
                <Text style={styles.addressText}>{displayAddress}</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}


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
    },

    footer: {
        flex: 1,
        backgroundColor: 'cyan',
    },

    deliveryIcon: {
        width: 120,
        height: 120,
    },

    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
    },

    addressTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#7d7d7d',
    },

    addressText: {
        fontSize: 20,
        fontWeight: '200',
        color: '#4f4f4f',
    },
});
