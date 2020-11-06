import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import apiTaxas from "../../../services/api.list.taxas.cnpj";

import styles from './styles'
import globalStyle from '../../../styles/globalStyle'

function TaxasDeCNH({ navigation }) {
  const emitirBoleto = (taxas) => {
    navigation.navigate("EmitirBoletoCnhCnpj", taxas);
  };

  console.log(apiTaxas);

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
          Taxas da CNH Cnpj
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
        data={apiTaxas}
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
                <TouchableOpacity onPress={() => emitirBoleto()}>
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
