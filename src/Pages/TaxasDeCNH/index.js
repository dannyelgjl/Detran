import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

function TaxasDeCNH({ navigation }) {
  const EmitirBoleto = () => {
    navigation.navigate("EmitirBoleto");
  };

  const goBack = () => {
    navigation.goBack();
  };

  const [taxas, setTaxas] = useState([
    {
      codigo: "56",
      descricao: "Permissão para Dirigir (A ou X) - Primeira Habilitação",
      valorAtual: "247.10",
    },
    {
      codigo: "57",
      descricao: "Permissão para Dirigir (B) - Primeira Habilitação",
      valorAtual: "264.75",
    },
    {
      codigo: "58",
      descricao: "Permissão para Dirigir (AB) - Primeira Habilitação",
      valorAtual: "264.75",
    },
    {
      codigo: "59",
      descricao: "Reabilitação de Condutor (1 categoria)",
      valorAtual: "250.63",
    },
    {
      codigo: "60",
      descricao: "Reabilitação de Condutor (2 categorias)",
      valorAtual: "264.75",
    },
    {
      codigo: "2",
      descricao: "Renovação de CNH",
      valorAtual: "183.56",
    },
    {
      codigo: "50",
      descricao: "Renovação de CNH - Condutor de outra UF",
      valorAtual: "183.56",
    },
    {
      codigo: "4",
      descricao: "Renovação com Mudança/Adição de Categoria",
      valorAtual: "211.80",
    },
    {
      codigo: "52",
      descricao: "Renovação com Mudança/Adição de Categoria (Outro Estado)",
      valorAtual: "211.80",
    },
    {
      codigo: "3",
      descricao: "CNH PERMANENTE",
      valorAtual: "105.90",
    },
    {
      codigo: "53",
      descricao: "CNH PERMANENTE (Outro Estado)",
      valorAtual: "105.90",
    },
    {
      codigo: "61",
      descricao: "Permissão Internacional para Dirigir (PID)",
      valorAtual: "183.56",
    },
    {
      codigo: "62",
      descricao: "Alteração de Dados",
      valorAtual: "201.21",
    },
    {
      codigo: "11",
      descricao: "Segunda Via de CNH",
      valorAtual: "88.25",
    },
    {
      codigo: "10",
      descricao: "Desistência de Categoria",
      valorAtual: "28.24",
    },
    {
      codigo: "40",
      descricao: "Reconstituição de Processo",
      valorAtual: "56.48",
    },
    {
      codigo: "21",
      descricao: "Devolução de CNH",
      valorAtual: "14.12",
    },
    {
      codigo: "7",
      descricao: "Repetição do Exame",
      valorAtual: " 60.01",
    },
    {
      codigo: "5",
      descricao: "Certidão Negativa de CNH",
      valorAtual: "28.24",
    },
    {
      codigo: "20",
      descricao: "Transferência de Processo",
      valorAtual: "56.48",
    },
    {
      codigo: "6",
      descricao: "Cópia do Prontuário",
      valorAtual: "60.01",
    },
    {
      codigo: "8",
      descricao: "Falta Injustificada",
      valorAtual: "45.89",
    },
    {
      codigo: "13",
      descricao: "Licença p/ Aprend. de Dir. Veículo (LADV)",
      valorAtual: "28.24",
    },
    {
      codigo: "12",
      descricao: "Licença para Estrangeiro",
      valorAtual: "56.48",
    },
    {
      codigo: "29",
      descricao: "Renovação Anual Escr. Despachante",
      valorAtual: "211.80",
    },
    {
      codigo: "28",
      descricao: "Registro Preposto Despachante",
      valorAtual: "211.80",
    },
    {
      codigo: "19",
      descricao: "Registro de Instrutor CFC",
      valorAtual: "208.27",
    },
    {
      codigo: "18",
      descricao: "Renovação Anual Reg. Instrutor CFC",
      valorAtual: "141.20",
    },
    {
      codigo: "75",
      descricao: "EXTRATO DE VEICULO POR PROPRIETARIO",
      valorAtual: "14.12",
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#E9E9E9" }}>
      <View style={{ backgroundColor: "#215297", height: 90 }}>
        <View
          style={{ height: 70, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              marginTop: 10,
              marginTop: 60,
            }}
          >
            Taxas da CNH
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 10,
          }}
        >
          <TouchableOpacity onPress={goBack}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ width: "100%", height: 3, backgroundColor: "#F0DC00" }}
      ></View>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.codigo}
        data={taxas}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                marginTop: 8,
                marginLeft: 8,
                width: "95%",
                height: 180,
                borderRadius: 8,
              }}
            >
              <View
                style={{
                  alignItems: "flex-start",
                  marginLeft: 10,
                  marginTop: 18,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    alignItems: "flex-start",
                  }}
                >
                  Código
                </Text>
                <Text
                  style={{
                    backgroundColor: "#3D903D",
                    fontSize: 16,
                    borderRadius: 6,
                    color: "white",
                    width: 25,
                    height: 22,
                    textAlign: "center",
                    left: 15,
                    marginTop: 10,
                  }}
                >
                  {item.codigo}
                </Text>
              </View>

              <View
                style={{
                  alignItems: "center",
                  width: 150,
                  height: 150,
                  bottom: 75,
                  left: 90,
                  marginLeft: 10,
                  marginTop: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Taxa
                </Text>
                <Text
                  style={{
                    width: 150,
                    height: 100,
                    textAlign: "center",
                    fontSize: 15,
                    marginTop: 10,
                  }}
                >
                  {item.descricao}
                </Text>
              </View>

              <View
                style={{
                  marginRight: 20,
                  bottom: 224,
                  marginBottom: 30,
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Valor
                </Text>
                <Text
                  style={{ textAlign: "center", fontSize: 15, marginTop: 10 }}
                >
                  R$ {item.valorAtual}
                </Text>
                <TouchableOpacity onPress={EmitirBoleto}>
                  <FontAwesome
                    style={{
                      marginTop: 50,
                      marginRight: 10,
                    }}
                    name="print"
                    size={38}
                    color="#215297"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default TaxasDeCNH;
