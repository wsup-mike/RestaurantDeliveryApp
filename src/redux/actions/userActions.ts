import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import { LocationGeocodedAddress } from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UpdateLocationAction {
    readonly type: 'ON_UPDATE_LOCATION',
    payload: LocationGeocodedAddress,
}

export interface UserErrorAction {
    readonly type: 'ON_USER_ERROR',
    payload: any
}

//Create type where all actions will consildate 2:  
export type UserAction = UpdateLocationAction | UserErrorAction;

// Create action creator function - to trigger user actions from components
export const onUpdateLocation = (location: LocationGeocodedAddress) => {
    return async ( dispatch: Dispatch<UserAction>) => {
        try {
            const locationString = JSON.stringify(location)
            await AsyncStorage.setItem('user_location', locationString)
            //Save our location in local storage
            dispatch({
                type: 'ON_UPDATE_LOCATION',
                payload: location,
            })
        } catch (error) {
            dispatch({
                type: 'ON_USER_ERROR',
                payload: error,
            })
        }
    }
}