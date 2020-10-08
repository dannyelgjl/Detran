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
} from "react-native";

//import { useNavigation } from "@react-navigation/native";

import {
  DrawerContentScrollView,
  DrawerItem,
  Section,
} from "@react-navigation/drawer";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import detranLogo from "../../assets/logo/detranLogoo.png";

export function DrawerContent(props) {
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
            style={{
              marginTop: 20,
              marginLeft: 20,
              width: "100%",
            }}
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
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                  marginLeft: 10,
                  color: "#6F6F6F",
                }}
              >
                INÍCIO
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineBlackHrTest} />

          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Taxas");
              }}
              style={{ flexDirection: "row" }}
            >
              <View>
                <AntDesign name="carryout" size={34} color="#6F6F6F" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                  marginLeft: 10,
                  color: "#6F6F6F",
                }}
              >
                Taxas de Serviços
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineBlackHrTest} />

          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              style={{ flexDirection: "row" }}
            >
              <View>
                <AntDesign name="idcard" size={34} color="#6F6F6F" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                  marginLeft: 10,
                  color: "#6F6F6F",
                }}
              >
                Agendamento
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineBlackHrTest} />

          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              style={{ flexDirection: "row" }}
            >
              <View>
                <Ionicons name="logo-model-s" size={34} color="#6F6F6F" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                  marginLeft: 10,
                  color: "#6F6F6F",
                }}
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

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  userInfoSection: {
    paddingLeft: 20,
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },

  detranLogo: {
    marginTop: 30,
    width: "70%",
    height: 50,
    alignSelf: "center",
  },
  lineBlackHr: {
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    width: "95%",
    marginTop: 10,
  },

  lineBlackHrTest: {
    borderBottomColor: "#cccc",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "center",
    width: "90%",
    marginTop: 10,
  },
});
