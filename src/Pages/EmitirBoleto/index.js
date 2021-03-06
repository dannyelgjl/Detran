import React, { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";


import globalStyle from '../../styles/globalStyle'
import styles from "./styles";
//import taxas from "../../services/api.list.taxas";

const EmitirBoleto = ({ navigation } ) => {
  const route = useRoute();
  //const teste = navigation.getParam("taxas");
  
  
 /* const submit = useCallback(() =>{
    
      api
        .post("impost/billet_cpf", {
          cnh: form,
        })
        .then((response) => {
          const base64 = Base64(response.data.arquivoBase64);
  
          if (response.data.boletoCnh) {
            setRequest(response.data.boletoCnh);
            Boleto(base64);
          } else {
            Alert.alert(response.headers.status);
          }
        })
        .catch((error) => console.log(error));
    
  
  }, []) */


  const [form, setForm] = useState({
    codigoTaxa: route.params.codigo,
    register: "",
    descricao: route.params.descricao,
    cpf: "06383007386",
  });
  
  console.log(route.params)

  function Base64(b64) {
    return "data:application/pdf;base64," + b64.replace("\n", "");
  }

  const Boleto = (params ) => {
    navigation.navigate("Boleto", params );
  };

  const goBack = () => {
    navigation.goBack();
  };

  const [request, setRequest] = useState({
    codServico: "",
    codigoDeBarras: "",
    codigoDeBarrasComDigito: "",
    cpf: "",
    dataEmissao: "",
    dataVencimento: "",
    registroPgu: "",
    servico: "",
    valor: "",
    arquivoBase64: "",
  });

  const submit = () => {
    api
      .post("api/cnh/ticket", form)
      .then((response) => {
        const base64 = Base64(response.data.arquivoBase64);

        if (response.data.boletoCnh) {
          setRequest(response.data.boletoCnh);
          Boleto(base64);
        } else {
          Alert.alert(response.headers.status);
        }
      })
      .catch((error) => console.log(error));
  };

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
         style={styles.textInputTaxas}
         editable={false}
         selectTextOnFocus={false}
         value={form.descricao}
         onChangeText={(event) => setForm({ ...form, descricao: event })}
       />

        <TextInput
          placeholder="Digite aqui seu CPF..."
          style={styles.textInputCPF}
          value={form.cpf}
          onChangeText={(event) => setForm({ ...form, cpf: event })}
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

export default EmitirBoleto;
