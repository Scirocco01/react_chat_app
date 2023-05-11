

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screens/homeScreen";

const StackTwo = createStackNavigator();

export default function HomeStack(){
    return(
        <StackTwo.Navigator>
            <StackTwo.Screen name = 'home' component={HomeScreen}/>
        </StackTwo.Navigator>
    );
} 