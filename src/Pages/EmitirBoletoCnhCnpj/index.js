import React, { useState, useCallback } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";
import api from "../../services/api";

import globalStyle from '../../styles/globalStyle'
import styles from "./styles";


const EmitirBoletoVeiculos = ({ navigation } ) => {
  const route = useRoute();
  
  const [code, setCode] = useState("72");
  const [cnpj, setCnpj] = useState("00000000000191");

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  
  const boletoVeiculoNavigation = useCallback((params) => {
    navigation.navigate("BoletoVeiculos", params);
  }, []);

  const base64 = useCallback((b64) => {
    return "data:application/pdf;base64," + b64.replace("\n", "");
  }, []);

  const submit = useCallback(async () => {
    const response = await api.post("impost/billet_cnpj", {
      cnpj: {
        code,
        cnpj
      },
    });
      const { arquivoBase64 } = response.data;
      const hashBase64 = base64(arquivoBase64);

      hashBase64 && boletoVeiculoNavigation(hashBase64);  
  }, []);   
 ;

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#E9E9E9" }}>
      <View
        style={globalStyle.headerGlobal}
      >
        <Text
          style={globalStyle.textStylizationGlobal}
        >
          Emitir Boleto
        </Text>

        <View
          style={globalStyle.iconArrowLeftGlobal}
        >
          <TouchableOpacity onPress={goBack}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={globalStyle.lineYellowHeaderGlobal}
      ></View>

      <View
        style={styles.containerForm}
      >
        
        <TextInput
          style={styles.textInputCPF}
          editable={false}
          selectTextOnFocus={false}
          
        />

        <TextInput
          placeholder="license_plate..."
          style={styles.textInputCPF}
         
        />

        <TextInput
          placeholder="renavam..."
          style={styles.textInputCPF}
          
        />  

        <TouchableOpacity
          onPress={submit}
          style={styles.buttonImprimir}
        >

          <Text style={styles.buttonText}>Imprimir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmitirBoletoVeiculos;
