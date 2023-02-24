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
export const onAvailability = (postCode: string) => {
    
    
    // console.log(postCode); 

    return async ( dispatch: Dispatch<ShoppingAction> ) => {
        
        console.log(`${BASE_URL}food/availability/400012`)
        try {
            // First to call the Axios webservice
            console.log(`Here's the Base URL:${BASE_URL}. BEFORE the axios.get() call! At least this worked!`)

            const response = await axios.get<FoodAvailability>(`${BASE_URL}food/availability/${postCode}`)
            
            console.log(`Here's the Base URL:${BASE_URL}. It's finally running within the try block! Yay!`)
            console.log(response)

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
            console.log(error)
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error,
            })
        }
    }
}
