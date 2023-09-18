import React from "react";
import Login from "../screens/login/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/home";

const Stack = createNativeStackNavigator();

export default function AuthNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
