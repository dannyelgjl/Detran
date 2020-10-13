import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import apiTaxas from "../../services/api.list.taxas";

function TaxasDeCNH({ navigation }) {
  const EmitirBoleto = (taxas) => {
    navigation.navigate("EmitirBoleto", taxas);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E9E9E9" }}>
      <View
        style={{
          backgroundColor: "#215297",
          height: 90,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
            marginTop: 45,
          }}
        >
          Taxas da CNH
        </Text>

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
        data={apiTaxas}
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
                marginBottom: 10,
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
                <TouchableOpacity onPress={() => EmitirBoleto(item.descricao)}>
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
