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

import style from "./styles";

export default function Veiculos(props) {
  const [isSelected, setSelection] = useState(false);

  const SendoDesenvolvido = () => {
    Alert.alert("Sendo desenvolvido o melhor para você, Detran-PI.");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#eeee" }}>
     
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder="Digite seu CPF..."
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
        </View>

        <TouchableOpacity
          onPress={SendoDesenvolvido}
          style={style.input}
        >
          <Text style={{ fontSize: 15, color: "#fff" }}>Consultar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
