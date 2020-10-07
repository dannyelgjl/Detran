import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import api from "../../services/api";

const EmitirBoleto = () => {
  const [form, setForm] = useState({
    code: "",
    register: "",
    cpf: "",
  });

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
  });

  const submit = () => {
    api
      .post("impost/billet_cpf", {
        cnh: form,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.boletoCnh) {
          setRequest(response.data.boletoCnh);
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
          onChangeText={(event) => setForm({ ...form, cpf: event })}
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

      <Text>{request.codServico}</Text>
      <Text>{request.codigoDeBarras}</Text>
      <Text>{request.codigoDeBarrasComDigito}</Text>
      <Text>{request.cpf}</Text>
      <Text>{request.dataEmissao}</Text>
      <Text>{request.dataVencimento}</Text>
      <Text>{request.registroPgu}</Text>
      <Text>{request.servico}</Text>
      <Text>{request.valor}</Text>
    </View>
  );
};

export default EmitirBoleto;
