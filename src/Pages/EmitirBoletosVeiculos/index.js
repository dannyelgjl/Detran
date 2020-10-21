import React, { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import globalStyle from '../../styles/globalStyle'
import styles from "./styles";


const EmitirBoletoVeiculos = ({ navigation } ) => {
  const route = useRoute();
  
  const goBack = () => {
    navigation.goBack();
  }

  const BoletoVeiculo = (params) => {
    navigation.navigate("BoletoVeiculos", params);
  }
  console.log(route.boletoveiculo);

  const [formveiculo, setFormVeiculo] = useState({
    code: "22",
    license_plate: "QKQ3482",
    chassi: "9C2JC30707R219442",
    acquisition_date: "2020-07-01",
    cnpj: "12201863000106",
    renavam: "1040467447"
  });



  const [request, setRequest] = useState({
    codigoTaxa: "",
    servico: "",
    valor: "",
    cnpj: "",
    placa: "",
    renavam: "",
    chassi: "",
    dataEmissao: "",
    dataVencimento: "",
    codigoDeBarras: "",
  });

  function Base64(b64) {
    return "data:application/pdf;base64," + b64.replace("\n", "");
  }

  const submit = () => {
    api.post("impost/billet_vehicle", {
      vehicle: formveiculo,
    }).then((response) => {
      const base64 = Base64(response.data.arquivoBase64);

      if (response.data.boletoVeiculo) {
        setRequest(response.data.boletoVeiculo);
        BoletoVeiculo(base64);

      }else{
        Alert.alert(response.headers.status);
      }
    }).catch((error) => console.log(error));  
  }   
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
          placeholder="Code..."
          style={styles.textInputCPF}
          value={formveiculo.code}
          onChangeText={(event) => setFormVeiculo({ ...formveiculo, code: event })}
        />

        <TextInput
          placeholder="license_plate..."
          style={styles.textInputCPF}
          value={formveiculo.license_plate}
          onChangeText={(event) => setFormVeiculo({...formveiculo, license_plate: event})}
        />

        <TextInput
          placeholder="chassi..."
          style={styles.textInputCPF}
          value={formveiculo.chassi}
          onChangeText={(event) => setFormVeiculo({...formveiculo, chassi: event})}
        /> 

        <TextInput
          placeholder="acquisition_date..."
          style={styles.textInputCPF}
          value={formveiculo.acquisition_date}
          onChangeText={(event) => setFormVeiculo({...formveiculo, acquisition_date: event})}
        />

        <TextInput
          placeholder="cnpj..."
          style={styles.textInputCPF}
          value={formveiculo.cnpj}
          onChangeText={(event) => setFormVeiculo({...formveiculo, cnpj: event})}
        />  

        <TextInput
          placeholder="renavam..."
          style={styles.textInputCPF}
          value={formveiculo.renavam}
          onChangeText={(event) => setFormVeiculo({...formveiculo, renavam: event})}
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
