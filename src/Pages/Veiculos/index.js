import { StatusBar } from "expo-status-bar";
import React from "react";

import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";

import { View, Text, TouchableOpacity, Alert } from "react-native";

import styles from './styles'
import globalStyle from '../../styles/globalStyle'

export default function ServicosHabilitacao({ navigation }) {
  const TaxasDeCNH = () => {
    navigation.navigate("TaxasDeCNH");
  };

  const taxasVeiculos = () => {
    navigation.navigate("TaxasDeVeiculos")
  }

  const goBack = () => {
    navigation.goBack();
  };

  const SendoDesenvolvido = () => {
    Alert.alert("Sendo desenvolvido o melhor para você, Detran-PI.");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E9E9E9" }}>
      <StatusBar style="light" />
      <View
        style={globalStyle.headerGlobal}
      >
        <Text
          style={globalStyle.textStylizationGlobal}
        >
          Veículos
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
        style={styles.containerServiços}
      >
        <TouchableOpacity
          onPress={taxasVeiculos}
          style={styles.directionItem}
        >
          <FontAwesome5 name="money-check-alt" size={40} color="#d0b100" />
          <Text
            style={styles.textServiço}
          >
            Taxas
          </Text>
        </TouchableOpacity>
      </View>

      <View
         style={styles.containerServiços}
      >
        <TouchableOpacity
          onPress={SendoDesenvolvido}
          style={styles.directionItem}
        >
          <FontAwesome name="id-card-o" size={40} color="#d0b100" />
          <Text
            style={styles.textServiço}
          >
            Consultar Veículo
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.containerServiços}
      >
        <TouchableOpacity
          onPress={SendoDesenvolvido}
          style={styles.directionItem}
        >
          <FontAwesome5 name="address-card" size={40} color="#d0b100" />
          <Text
            style={styles.textServiço}
          >
            Situação Veículo
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.containerServiços}
      >
        <TouchableOpacity
          onPress={SendoDesenvolvido}
          style={styles.directionItem}
        >
          <AntDesign name="reload1" size={40} color="#d0b100" />
          <Text
            style={styles.textServiço}
          >
            Soliticar Renovação Veículo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
