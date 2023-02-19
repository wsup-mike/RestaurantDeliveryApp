import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import { LocationGeocodedAddress } from "expo-location";

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