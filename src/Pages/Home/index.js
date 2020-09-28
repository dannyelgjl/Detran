import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

import {
  Feather,
  AntDesign,
  Octicons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons/";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const Infor = () => {
    navigation.navigate("Infor");
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const PontCNH = () => {
    navigation.navigate("PontCNH");
  };

  const image = {
    uri:
      "https://abrilviagemeturismo.files.wordpress.com/2019/03/2018-scorecard-featured-image-layout-2000_1200.001.jpeg",
  };

  return (
    <View style={{ flex: 1, height: "100%", backgroundColor: "#215297" }}>
      <View style={{ backgroundColor: "#215297" }}>
        <View source={image} style={{ width: "100%", height: 80 }}>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Detran-Pi</Text>
          </View>

          <View
            style={{
              marginBottom: 30,
              alignItems: "center",

              position: "absolute",
              top: 35,
              left: 15,
            }}
          >
            <TouchableOpacity onPress={openDrawer}>
              <Feather name="menu" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 30, right: 30 }}
          />
        </View>
        <View
          style={{ width: "100%", height: 3, backgroundColor: "#F0DC00" }}
        ></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Serviços
          </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            flexDirection={"row"}
            style={{ paddingVertical: 5, paddingLeft: 16, width: "100%" }}
          >
            <TouchableOpacity onPress={Infor}>
              <View style={styles.styleCard}>
                <AntDesign
                  name="car"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>
                <Text style={styles.ImageText}>Veículos</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={PontCNH}>
              <View style={styles.styleCard}>
                <Octicons
                  name="clippy"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />

                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Habilitação</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={PontCNH}>
              <View style={styles.styleCard}>
                <AntDesign
                  name="filetext1"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>2ºVia</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Infor}>
              <View style={styles.styleCard}>
                <AntDesign
                  name="carryout"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Licenciamento</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={PontCNH}>
              <View style={styles.styleCard}>
                <AntDesign
                  name="idcard"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Consultar CNH</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            flexDirection={"row"}
            style={{ paddingVertical: 10, paddingLeft: 16 }}
          >
            <TouchableOpacity onPress={PontCNH}>
              <View style={styles.styleCard}>
                <AntDesign
                  name="solution1"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Agendamento</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={PontCNH}>
              <View style={styles.styleCard}>
                <FontAwesome
                  name="road"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Financeiro</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={PontCNH}>
              <View style={styles.styleCard}>
                <FontAwesome5
                  name="traffic-light"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Ajuda</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Infor}>
              <View style={styles.styleCard}>
                <Ionicons
                  name="logo-model-s"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Reclamações</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={PontCNH}>
              <View style={styles.styleCard}>
                <MaterialIcons
                  name="announcement"
                  size={36}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.ImageText}>Contatos</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          style={{
            width: "100%",
            height: 3,
            backgroundColor: "#F0DC00",
            marginTop: 20,
          }}
        ></View>
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
              Notícias
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
              Ver todas
            </Text>
          </View>
          <Image
            source={image}
            style={{
              width: "92%",
              height: 250,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
          <View style={{ position: "absolute", bottom: 0, padding: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="map-pin"
                color="white"
                size={20}
                style={{ marginLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}
              >
                Teste
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 4,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              {" "}
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impresso
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  styleCard: {
    width: 100,
    marginRight: 8,
    height: 100,
    borderRadius: 15,
    backgroundColor: "#6698C6",
    alignItems: "center",
    justifyContent: "center",
  },

  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    backgroundColor: "#000",
    opacity: 0.5,
  },

  searchContainer: {
    paddingTop: 20,
    paddingLeft: 50,
  },

  UserGreet: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },

  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },

  ImageOverlay: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 15,
    position: "absolute",
    backgroundColor: "#215297",
    opacity: 0.5,
  },

  imageLocationIcon: {
    zIndex: 1,
  },

  ImageText: {
    color: "white",
    marginTop: 4,
    fontSize: 14,
  },
});
