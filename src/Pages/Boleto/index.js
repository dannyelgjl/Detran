import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import PDFReader from "rn-pdf-reader-js";

export default function Boleto({ navigation }) {
  const route = useRoute();

  const backTaxasCNH = () => {
    navigation.navigate("TaxasDeCNH");
  };

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
        onPress={backTaxasCNH}
        style={styles.buttonBoleto}
      >
        <Text style={{ color: "#fff" }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonBoleto: {
    position: "absolute",
    bottom: 10,
    left: 20,
    backgroundColor: "#215297",
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  }
})