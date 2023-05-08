

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// for navigation screens
import LoginScreen from "../screens/login";
import SignupScreen from "../screens/signupScreen";

const Stack  = createStackNavigator();

export default function AuthStack(){
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions = {{headerShown: false}}>
            <Stack.Screen name = 'Login' component={LoginScreen} />
            <Stack.Screen name = 'signup' component={SignupScreen}/>
        </Stack.Navigator>
    );

}