import React from "react";
import { View, TouchableOpacity, Text, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import PDFReader from "rn-pdf-reader-js";

export default function Boleto() {
  const route = useRoute();

  //  style={{ flex: 1 }} <WebView rce={{ uri: encodeURI(route.params) }} />
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <PDFReader
        withScroll
        withPinchZoom
        onLoad={() => console.log("Sucesso")}
        onError={(err) => console.log(err)}
        source={{ base64: route.params }}
      />
      <TouchableOpacity
        onPress={() => {}}
        style={{ position: "absolute", bottom: 0, left: 0 }}
      >
        <Text>Download</Text>
      </TouchableOpacity>
    </View>
  );
}
