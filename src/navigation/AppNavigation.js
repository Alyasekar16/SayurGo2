import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from "../screens/CartScreen";
import PesananScreen from '../tabs/PesananScreen';



const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#2E7D32',
          tabBarInactiveTintColor: '#9E9E9E',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 65,
            paddingBottom: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: -2 },
            shadowRadius: 5,
            elevation: 5,
          },
          tabBarIcon: ({ focused }) => {
            // map route names to icon files
            let iconPath;
            if (route.name === 'Home') {
              iconPath = require('../../assets/icons/home.png');
            } else if (route.name === 'Explore') {
              // keep explore icon (if you don't have explore.png, you can reuse another icon)
              // change this path if you have a specific icon for Explore
              iconPath = require('../../assets/icons/cart.png');
            } else if (route.name === 'Cart') {
              iconPath = require('../../assets/icons/cart.png');
            } else if (route.name === 'Profile') {
              iconPath = require('../../assets/icons/user.png');
            }

            // safe fallback (avoid crash if iconPath undefined)
            if (!iconPath) return null;

            return (
              <Image
                source={iconPath}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#2E7D32' : '#9E9E9E',
                }}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="DetailProfile" component={DetailProfileScreen} />
        <Tab.Screen name="Pesanan" component={PesananScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}