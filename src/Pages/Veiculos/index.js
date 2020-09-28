import React from "react";
import { View, Text } from "react-native";

export default function Veiculos() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ backgroundColor: "#215297" }}>
        <View style={{ paddingTop: 20, paddingLeft: 50 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              marginTop: 10,
            }}
          >
            Veículos
          </Text>
        </View>
      </View>

      <View
        style={{ width: "100%", height: 3, backgroundColor: "#F0DC00" }}
      ></View>
    </View>
  );
}
