import axios from 'axios';
import { LocationGeocodedAddress } from 'expo-location';
import { Dispatch } from 'react';
import { BASE_URL } from '../../utils';
import { FoodAvailability } from '../models';

export interface AvailabilityAction {
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability,
}