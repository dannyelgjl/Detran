import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function DrawerContent(props) {
  return (
    <View>
      <Text>DRAWER</Text>
      <StatusBar style="auto" />
    </View>
  );
}
