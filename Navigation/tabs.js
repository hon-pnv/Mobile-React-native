import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../screens/HomeScreen';
import {Find} from '../screens/FindScreen';
import {Post} from '../screens/PostScreen';
import {Chat } from '../screens/ChatScreen';
import Setting from '../screens/Setting';

const BottomTab = createBottomTabNavigator();

const iconUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjmWv58Qw-Cjo05ZBK8XWtOU0IDsrHhATg&usqp=CAU';

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: ({focused}) => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="FavouriteTab"
        component={Find}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Favourite'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="MyBookingTab"
        component={Post}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Booking'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ChatTab"
        component={Chat}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Chat'}</Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="SettingTab"
        component={Setting}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Setting'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});