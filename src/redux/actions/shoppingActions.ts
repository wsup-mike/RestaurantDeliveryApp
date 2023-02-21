import axios from 'axios';
import { LocationGeocodedAddress } from 'expo-location';
import { Dispatch } from 'react';
import { BASE_URL } from '../../utils';
import { FoodAvailability } from '../models';


// Availability Action
export interface AvailabilityAction {
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability,
}

export interface ShoppingErrorAction {
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

//New action creator function: Trigger actions from components
export const onAvailability = (postalCode: string) => {
    return async ( dispatch: Dispatch<ShoppingAction>) => {
        try {
            // First to call the Axios webservice
            const response = await axios.get<FoodAvailability>(`${BASE_URL}/food/availability/${postalCode}`)

            if(!response) {
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Availability error'
                })
            }

            // save our location to local storage
            dispatch({
                type: 'ON_AVAILABILITY',
                payload: response.data,
            })
        } catch (error) {
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error,
            })
        }
    }
}
