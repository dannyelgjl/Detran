import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import PDFReader from "rn-pdf-reader-js";


import styles from "./styles";


export default function BoletoVeiculos({ navigation }) {
  const route = useRoute();

  const backTaxasCNH = () => {
    navigation.navigate("TaxasDeVeiculos");
  };
  
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


