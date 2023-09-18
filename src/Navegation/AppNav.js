import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/home";

const Stack = createNativeStackNavigator();

export default function AppNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen  name="Olvidaste" component={Olvidaste} /> */}
    </Stack.Navigator>
  );
}
