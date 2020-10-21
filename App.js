import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WithCars from './Screens/WithCars';
import NoCars from './Screens/NoCars';
import NoInternet from './Screens/NoInternet';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="with cars" component={WithCars} />
        <Tab.Screen name="no cars" component={NoCars} />
        <Tab.Screen name="no cnx" component={NoInternet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}