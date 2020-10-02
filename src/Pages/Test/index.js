import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import api from "../../services/api";

const Test = () => {
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="code"
        onChangeText={(event) => setForm({ ...form, code: event })}
      />
      <TextInput
        placeholder="cpf"
        onChangeText={(event) => setForm({ ...form, cpf: event })}
      />
      <TextInput
        placeholder="register"
        onChangeText={(event) => setForm({ ...form, register: event })}
      />

      <Button title="ok" onPress={submit} />

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

export default Test;
