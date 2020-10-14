import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  CheckBox,
} from "react-native";

export default function Veiculos(props) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#eeee" }}>
      <View style={{ backgroundColor: "#215297" }}>
        <View
          style={{ height: 70, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              marginTop: 10,
            }}
          >
            CNH
          </Text>
        </View>
      </View>
      <View
        style={{ width: "100%", height: 3, backgroundColor: "#F0DC00" }}
      ></View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder={"Nº Renavam"}
          style={{
            width: "90%",
            height: 44,
            padding: 10,
            borderBottomWidth: 0.5,
            borderColor: "black",
            marginTop: 40,
            marginBottom: 20,
            fontSize: 18,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CheckBox
            style={{
              alignSelf: "flex-start",

              marginLeft: 20,
            }}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text
            style={{
              color: "#000",
            }}
          >
            Salvar estes dados para outras consultas.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Test");
          }}
          style={{
            backgroundColor: "#215297",
            marginTop: 20,
            width: 140,
            height: 38,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15, color: "#fff" }}>Consultar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
