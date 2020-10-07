import React, { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import api from "../../services/api";

const EmitirBoleto = ({ navigation }) => {
  const [form, setForm] = useState({
    code: "",
    register: "",
    cpf: "",
  });

  const Boleto = (params) => {
    navigation.navigate("Boleto", params);
  };

  function Base64(b64) {
    return "data:application/pdf;base64," + b64.replace("\n", "");
  }

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
  };

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#E9E9E9" }}>
      <View style={{ backgroundColor: "#215297", width: "100%" }}>
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
            Taxas Teste
          </Text>
        </View>
      </View>
      <View
        style={{ width: "100%", height: 3, backgroundColor: "#F0DC00" }}
      ></View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          width: "90%",
          marginTop: 40,
          borderRadius: 6,
        }}
      >
        <TextInput
          placeholder="Código do serviço..."
          style={{
            width: "90%",
            height: 44,
            padding: 10,
            borderBottomWidth: 0.5,
            borderColor: "#E9E9E9",
            marginTop: 20,
            marginBottom: 20,
            fontSize: 16,
            zIndex: 2,
          }}
          onChangeText={(event) => setForm({ ...form, code: event })}
        />

        <TextInput
          placeholder="CPF..."
          style={{
            width: "90%",
            height: 44,
            padding: 10,
            borderBottomWidth: 0.5,
            borderColor: "#E9E9E9",
            marginTop: 5,
            marginBottom: 20,
            fontSize: 16,
            zIndex: 2,
          }}
          onChangeText={(text) => setForm({ ...form, cpf: text })}
        />
        <TextInput
          placeholder="Número do registro..."
          style={{
            width: "90%",
            height: 44,
            padding: 10,
            borderBottomWidth: 0.5,
            borderColor: "#E9E9E9",
            marginTop: 5,
            marginBottom: 20,
            fontSize: 16,
            zIndex: 2,
          }}
          onChangeText={(event) => setForm({ ...form, register: event })}
        />

        <TouchableOpacity
          onPress={submit}
          style={{
            backgroundColor: "#215297",
            marginTop: 10,
            marginBottom: 15,
            width: 140,
            height: 38,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Imprimir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmitirBoleto;
