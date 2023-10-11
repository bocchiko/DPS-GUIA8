import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    );

}