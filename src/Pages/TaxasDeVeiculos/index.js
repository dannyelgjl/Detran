import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import apiTaxasVeiculos from "../../services/api.list.taxas.veiculos";

import styles from './styles'
import globalStyle from '../../styles/globalStyle'
import EmitirBoletoVeiculos from "../EmitirBoletosVeiculos";

function TaxasDeCNH({ navigation }) {
 const EmitirBoletoVeiculos = () => {
    navigation.navigate("EmitirBoletoVeiculos");
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E9E9E9" }}>
      <View
        style={globalStyle.headerGlobal}
      >
        <Text
          style={globalStyle.textStylizationGlobal}
        >
          Taxas de Veículos
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

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.codigo}
        data={apiTaxasVeiculos}
        renderItem={({ item }) => {
          return (

            <View
              style={styles.containerFlatlist}
            >
              <View
                style={styles.codePosition}
              >
                <Text
                  style={styles.textCode}
                >
                  Código
                </Text>
                <Text
                  style={styles.backgroundTextCode}
                >
                  {item.codigo}
                </Text>
              </View>

              <View
                style={styles.positionTaxa}
              >
                <Text
                  style={styles.textTaxaTitle}
                >
                  Taxa
                </Text>
                <Text
                  style={styles.textTaxa}
                >
                  {item.descricao}
                </Text>
              </View>

              <View
                style={styles.valorPosition}
              >
                <Text
                  style={styles.textTitleValor}
                >
                  Valor
                </Text>
                <Text
                  style={styles.textValor}
                >
                  R$ {item.valorAtual}
                </Text>
                <TouchableOpacity onPress={EmitirBoletoVeiculos}>
                  <FontAwesome
                    style={{
                      marginTop: 50,
                      marginRight: 10,
                    }}
                    name="print"
                    size={38}
                    color="#181818"
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
