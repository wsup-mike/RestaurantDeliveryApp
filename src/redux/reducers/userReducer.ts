import { LocationGeocodedAddress } from 'expo-location';
import { UserAction } from '../actions';
import { UserModel, UserState } from '../models';

const initialState: UserState = {
    user: {} as UserModel,
    location: {} as LocationGeocodedAddress,
    error: undefined,
}


const UserReducer = () => {

}

export { UserReducer }