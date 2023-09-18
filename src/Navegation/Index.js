import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNav from "./AppNav";
import AuthNav from "./AuthNav";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function LayoutNav() {
  const { token } = useSelector((state) => state.auth);

  const [tokenState, setTokenState] = useState(token);

  return (
    <NavigationContainer>
      {token === true ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
}
