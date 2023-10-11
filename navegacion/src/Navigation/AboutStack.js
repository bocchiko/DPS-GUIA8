import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../screens/About';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="about" component={About} options={{headerShown: false}}/>
        </Stack.Navigator>
    );

}