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

  const [license_plate, setLicensePlate] = useState("ODZ0144");
  const [chassi, setChassi] = useState("9C2JC30707R219442");
  const [acquisition_date, setAcquisitionDate] = useState("2020-07-01");
  const [cnpj, setCnpj] = useState("12201863000106");
  const [renavam, setRenavam] = useState("464849594");

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
    const response = await api.post("impost/billet_vehicle", {
      vehicle: {
        code: codigo,
        license_plate,
        chassi,
        acquisition_date,
        cnpj,
        renavam
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
          value={descricao} 
        />

        <TextInput
          placeholder="license_plate..."
          style={styles.textInputCPF}
          value={license_plate}
          onChangeText={setLicensePlate}
        />

        <TextInput
          placeholder="renavam..."
          style={styles.textInputCPF}
          value={renavam}
          onChangeText={setRenavam}
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
