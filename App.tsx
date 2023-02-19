import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { store } from './src/redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from './src/screens/HomeScreen';
import { LandingScreen } from './src/screens/LandingScreen';
import { AccountScreen } from './src/screens/AccountScreen';
import { CartScreen } from './src/screens/CartScreen';
import { OfferScreen } from './src/screens/OfferScreen';

const LandingStack = createStackNavigator();
const HomeStack = createStackNavigator();
export const HomeTabs = createBottomTabNavigator();

export const LandingStackScreen: React.FC = () => {
  return( 
    <LandingStack.Navigator 
      initialRouteName='Landing' 
      screenOptions={{headerShown: true}}
    >
      <LandingStack.Screen 
        name='Landing' 
        component={LandingScreen} 
      />
    </LandingStack.Navigator>
  );
};


// export const HomeStackScreen: React.FC = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name='Huh' component={HomeTabsScreen} />
//     </HomeStack.Navigator>
//   )
// };

export const HomeTabsScreen: React.FC = () => {
  return (
    <HomeTabs.Navigator initialRouteName='Home'>
      <HomeTabs.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({focused, color}) => {
            let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }}
      />

      <HomeTabs.Screen 
        name='Offer' 
        component={OfferScreen} 
        options={{
          tabBarIcon: ({focused, color}) => {
            let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }}
      />

      <HomeTabs.Screen 
        name='The fucking Cart Screen this is.' 
        component={CartScreen} 
        options={{
          tabBarIcon: ({focused, color}) => {
            let icon = focused == true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }}
      />

      <HomeTabs.Screen 
        name='Account' 
        component={AccountScreen} 
        options={{
          tabBarIcon: ({focused, color}) => {
            let icon = focused == true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }}
      />
    </HomeTabs.Navigator>
  )
};



export default function App() {
  return (
    <NavigationContainer>
      {/* <LandingStackScreen /> */}
      <HomeTabsScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabIcon: {
    width: 30,
    height: 30,
  }
});
