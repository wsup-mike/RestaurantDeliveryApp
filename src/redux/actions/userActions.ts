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