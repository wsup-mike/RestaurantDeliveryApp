import React, {useState, useEffect, useReducer} from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { onUpdateLocation, UserState, ApplicationState, onAvailability, ShoppingState } from "../redux";
import { ShoppingReducer } from "../redux/reducers/shoppingReducer";
import { SearchBar } from "../components";

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
    const {availability} = props.shoppingReducer;
    const { categories, foods, restaurants } = availability;

    console.log(foods)
    console.log(categories)
    console.log(restaurants)
    
    useEffect(() => {
        props.onAvailability(location.postalCode)
    });


   // Old useEffect - Populates address in center of screen upon retrieval from Expo Location 
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
                    onUpdateLocation(item)
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
                <View style={{ marginTop: 50, flex: 4, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}> 
                    {/* <Text>{`${location.name} ${location.city} ${location.postalCode}`}</Text> */}
                    <Text>{displayAddress}</Text>
                    <Text>Edit Button</Text>
                </View>
                <View style={{ flex: 8, backgroundColor: 'green'}}>
                    <SearchBar
                        onTextChange={() => {}}
                        didTouch={() => {
                            navigation.navigate('SearchPage')
                        }}
                    />
                </View>
            </View>
            <View style={styles.body}>
                {/* From old useEffect */}
                {/* <Text>The detected address is:</Text>
                <Text>{displayAddress}</Text>
                <Text>Home Screen</Text> */}
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
    userReducer: state.userReducer,
    shoppingReducer: state.shoppingReducer,
})

const HomeScreen = connect(mapToStateProps, { onUpdateLocation, onAvailability })(_HomeScreen)

export { HomeScreen }
