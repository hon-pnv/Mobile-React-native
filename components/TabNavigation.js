import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

import Home from '../screens/HomeScreen';
import Profile from './ProfileScreen';
import ProDetail from './ProDetail';
import Map from '../screens/GoogleMapScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#F14506',
        inactiveTintColor: '#000',

        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(225,225,225,0.2)',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <Image source={require('../assets/Images/home.png')} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        options={{
          title: 'My Profile',
          tabBarIcon: () => (
            <Image source={require('../assets/Images/contact.png')} />
          ),
        }}
        component={Profile}
      />
      <Tab.Screen
        name="map"
        options={{
          title: 'Google Map',
          tabBarIcon: () => (
            <Image source={require('../assets/Images/fag.png')} />
          ),
        }}
        component={Map}
      />
      <Tab.Screen
        name="ProDetail"
        options={{
          title: 'Product detail',
          tabBarIcon: () => (
            <Image source={require('../assets/Images/shop.png')} />
          ),
        }}
        component={ProDetail}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
