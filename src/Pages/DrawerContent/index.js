import { StatusBar } from "expo-status-bar";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

//import { useNavigation } from "@react-navigation/native";

import {
  DrawerContentScrollView,
  DrawerItem,
  Section,
} from "@react-navigation/drawer";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import detranLogo from "../../assets/logo/detranLogoo.png";

import styles from './styles'

export function DrawerContent(props) {
  const SendoDesenvolvido = () => {
    Alert.alert("Sendo desenvolvido o melhor para você, Detran-PI.");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Image source={detranLogo} style={styles.detranLogo} />
            </View>
            <View style={styles.lineBlackHr} />
          </View>

          <View
            style={styles.positionText}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              style={{ flexDirection: "row" }}
            >
              <View>
                <AntDesign name="home" size={34} color="#6F6F6F" />
              </View>
              <Text
             style={styles.textStyle}
              >
                INÍCIO
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineBlackHrTest} />

          <View
            style={styles.positionText}
          >
            <TouchableOpacity
              onPress={SendoDesenvolvido}
              style={{ flexDirection: "row" }}
            >
              <View>
                <AntDesign name="carryout" size={34} color="#6F6F6F" />
              </View>
              <Text
              style={styles.textStyle}
              >
                Taxas de Serviços
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineBlackHrTest} />

          <View
            style={styles.positionText}
          >
            <TouchableOpacity
              onPress={SendoDesenvolvido}
              style={{ flexDirection: "row" }}
            >
              <View>
                <AntDesign name="idcard" size={34} color="#6F6F6F" />
              </View>
              <Text
                style={styles.textStyle}
              >
                Agendamento
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineBlackHrTest} />

          <View
            style={styles.positionText}
          >
            <TouchableOpacity
              onPress={SendoDesenvolvido}
              style={{ flexDirection: "row" }}
            >
              <View>
                <Ionicons name="logo-model-s" size={34} color="#6F6F6F" />
              </View>
              <Text
                style={styles.textStyle}
              >
                Veículos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}


