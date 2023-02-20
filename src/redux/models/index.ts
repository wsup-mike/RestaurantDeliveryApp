// To create individual interfaces ('Models!') for use throughout our final data object (Define this object shape)

// To use expo location to 
import { LocationGeocodedAddress} from 'expo-location';

//Category Model
export interface CategoryModel {
    title: string,
    icon: string,
}

//Food Model
export interface FoodModel {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    readyTime: number;
    image: [string];
}

//Restaurant Model
export interface RestaurantModel {
    _id: string;
    name: string;
    foodType: string;
    address: string;
    phone: string;
    images: string;
    foods: [FoodModel];
}

//To be able to utilize all models as 1 single model to be read by Axios eventually
export interface FoodAvailability {
    categories: [CategoryModel];
    restaurants: [RestaurantModel];
    foods: [FoodModel]
}

//Todo: we will modify later
// The User Model
export interface UserModel {
    firstName: string;
    lastName: string;
    contactNumber: string;
    token: string;
}

// The User State Model
export interface UserState {
    user: UserModel;
    location: LocationGeocodedAddress;
    error: string | undefined;
}

// Now Shopping related models
// The ShoppingState model
export interface ShoppingState {
    availability: FoodAvailability,
    // other models
}