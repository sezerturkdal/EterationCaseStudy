/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingScreen from './src/pages/ListingScreen';
import SimpsonDetailScreen from './src/pages/SimpsonDetailScreen';
import AddSimpsonScreen from './src/pages/AddSimpsonScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListingScreen"
          component={ListingScreen}
          options={{ title: 'Simpsons' }}
        />
         <Stack.Screen
          name="SimpsonDetailScreen"
          component={SimpsonDetailScreen}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name="AddSimpsonScreen"
          component={AddSimpsonScreen}
          options={{ title: 'AddSimpson' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const App: () => Node = () => {
  return (
    MyStack()
  );
};

export default App;
