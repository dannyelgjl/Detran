import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "../Pages/DrawerContent";

import Home from "../Pages/Home";
import PontCNH from "../Pages/PontCNH";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="PontCNH" component={PontCNH} />
    </Drawer.Navigator>
  );
}
