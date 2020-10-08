import { StatusBar } from "expo-status-bar";
import React from "react";

import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";

import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

export default function ServicosHabilitacao({ navigation }) {
  const TaxasDeCNH = () => {
    navigation.navigate("TaxasDeCNH");
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E9E9E9" }}>
      <StatusBar style="light" />
      <View
        style={{
          backgroundColor: "#215297",
          height: 90,
        }}
      >
        <View
          style={{ height: 70, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              marginTop: 60,
            }}
          >
            Habilitação
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 50,
            left: 10,
          }}
        >
          <TouchableOpacity onPress={goBack}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ width: "100%", height: 3, backgroundColor: "#F0DC00" }}
      ></View>
      <View
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 8,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        <TouchableOpacity
          onPress={TaxasDeCNH}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="money-check-alt" size={40} color="#215297" />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Taxas CNH - (Pessoa física)
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 8,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome name="id-card-o" size={40} color="#215297" />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Consultar CNH
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 8,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="address-card" size={40} color="#215297" />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Situação CNH
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 8,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <AntDesign name="reload1" size={40} color="#215297" />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Soliticar Renovação CNH
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
