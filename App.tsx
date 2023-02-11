import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { LandingScreen } from './src/screens/LandingScreen';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const LandingStack = createStackNavigator();
const HomeStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

const LandingStackScreen: React.FC = () => {
  return( 
    <LandingStack.Navigator initialRouteName='Landing'>
      <LandingStack.Screen name='Landing' component={LandingScreen} />
    </LandingStack.Navigator>
  );
};


const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator initialRouteName='HomeTabs'>
      <HomeStack.Screen name='HomeTabs' component={HomeTabsScreen}/>
    </HomeStack.Navigator>
  )
};

const HomeTabsScreen: React.FC = () => {
  return (
    <HomeTabs.Navigator>
      <HomeTabs.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }}
      />

      <HomeTabs.Screen 
        name='Offer' 
        component={OfferScreen} 
        options={{
          tabBarIcon: ({focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }}
      />

      <HomeTabs.Screen 
        name='Cart' 
        component={CartScreen} 
        options={{
          tabBarIcon: ({focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }}
      />

      <HomeTabs.Screen 
        name='Account' 
        component={AccountScreen} 
        options={{
          tabBarIcon: ({focused, tintColor}) => {
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
      <LandingStackScreen />
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
