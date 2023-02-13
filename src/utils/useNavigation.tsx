import { useContext } from "react";
import { NavigationContext } from '@react-navigation/native';

export function useNavigation() {
    return useContext(NavigationContext);
}
