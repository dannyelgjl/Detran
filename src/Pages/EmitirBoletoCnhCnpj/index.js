import React, { useState, useCallback } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";
import api from "../../services/api";

import globalStyle from '../../styles/globalStyle'
import styles from "./styles";


const EmitirBoletoVeiculos = ({ navigation } ) => {
  const route = useRoute();
  const { codigo, descricao } = route.params;

  console.log(route.params);

  const [cnpj, setCnpj] = useState("54246051000127");

  console.log(cnpj);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  
  const boletoVeiculoNavigation = useCallback((params) => {
    navigation.navigate("BoletoCnhCnpj", params);
  }, []);

  const base64 = useCallback((b64) => {
    return "data:application/pdf;base64," + b64.replace("\n", "");
  }, []);

  const submit = useCallback(async () => {
    const response = await api.post("api/cnpj/ticket", {
        codigoTaxa: codigo,
        cnpj
    });
      const { arquivoBase64 } = response.data;
      console.log(arquivoBase64);
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
          value={descricao}
        />

        <TextInput
          placeholder="Digite seu CNPJ..."
          value={cnpj}
          onTextChange={setCnpj}
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
