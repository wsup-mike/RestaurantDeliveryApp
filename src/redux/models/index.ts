// To create 3 individual interfaces ('Models!') for our final data object (Define this object shape)

//Category Model
export interface Category {
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
export interface Restaurant {
    _id: string;
    name: string;
    foodType: string;
    address: string;
    phone: string;
    images: string;
    foods: [FoodModel];
}