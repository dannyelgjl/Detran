import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Pages/Home";
import Infor from "./Pages/Infor";
import PontCNH from "./Pages/PontCNH";
import Taxas from "./Pages/Taxas";
import Veiculos from "./Pages/Veiculos";

import DrawerRoutes from "./routes/Drawer.routes";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={DrawerRoutes} />
        <Stack.Screen name="Infor" component={Infor} />
        <Stack.Screen name="PontCNH" component={PontCNH} />
        <Stack.Screen name="Taxas" component={Taxas} />
        <Stack.Screen name="Veiculos" component={Veiculos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
