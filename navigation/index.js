import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ForgotPass from "../screen/forgotpass";
import LoginScreen from "../screen/login";
import SignUpScreen from "../screen/signUp";
import HomeTab from "../screen/home";
const Stack = createStackNavigator();

function AppNavigation() {
    return ( <
        NavigationContainer >
        <
        Stack.Navigator screenOptions = {
            {
                headerShown: false,
            }
        } >
        <
        Stack.Screen name = "LoginScreen"
        component = { LoginScreen }
        /> <
        Stack.Screen name = "SignUpScreen"
        component = { SignUpScreen }
        /> <
        Stack.Screen name = "ForgotPass"
        component = { ForgotPass }
        /> <
        Stack.Screen name = "HomeTab"
        component = { HomeTab }
        />

        <
        /Stack.Navigator> <
        /NavigationContainer>
    );
}
export default AppNavigation;