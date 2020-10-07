import { StatusBar } from "expo-status-bar";
import React from "react";
import { WebView } from "react-native-webview";
import { ScrollView, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";

export default function Boleto() {
  const route = useRoute();

  //  style={{ flex: 1 }} sou<WebView rce={{ uri: encodeURI(route.params) }} />
  return (
    <View>
      <ScrollView>
        <Text>{route.params}</Text>
      </ScrollView>
    </View>
  );
}
