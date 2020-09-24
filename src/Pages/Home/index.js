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

import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App({ navigation }) {
  const Infor = () => {
    navigation.navigate("Infor");
  };

  const image = {
    uri:
      "https://abrilviagemeturismo.files.wordpress.com/2019/03/2018-scorecard-featured-image-layout-2000_1200.001.jpeg",
  };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://abrilviagemeturismo.files.wordpress.com/2019/03/2018-scorecard-featured-image-layout-2000_1200.001.jpeg",
      },
      title: "transito-1",
      key: "1",
    },

    {
      image: {
        uri:
          "https://conteudo.imguol.com.br/c/entretenimento/19/2020/01/09/9jan2020---transito-na-marginal-pinheiros-em-sao-paulo-1578583450150_v2_1920x1168.jpg",
      },
      title: "transito-2",
      key: "2",
    },

    {
      image: {
        uri:
          "https://www.jornalcontabil.com.br/wp-content/uploads/2019/05/vista-da-cidade-a-noite-com-transito-e-luz-de-trilha_1359-936.jpg",
      },
      title: "transito-3",
      key: "3",
    },

    {
      image: {
        uri:
          "https://www.goedert.com.br/wp-content/uploads/2019/07/adobestock_127887299_3000x1204.jpg",
      },
      title: "transito-4",
      key: "4",
    },
  ]);

  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Detran-Go</Text>
            <Text style={styles.userText}>
              é simplesmente uma simulação de texto da indústria tipográfica
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Buscar..."
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: "absolute", top: 30, right: 60, opacity: 0.6 }}
            />
          </View>
          <Feather
            name="menu"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, left: 16 }}
          />

          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, right: 30 }}
          />
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            TEXTO TEXTO TEXTO
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={gallery}
          renderItem={({ item }) => {
            return (
              <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                <TouchableOpacity onPress={Infor}>
                  <Image
                    source={item.image}
                    style={{
                      width: 150,
                      marginRight: 8,
                      height: 250,
                      borderRadius: 10,
                    }}
                  />
                  <View style={styles.ImageOverlay}></View>
                  <Feather
                    name="map-pin"
                    size={16}
                    color="white"
                    style={styles.imageLocationIcon}
                  />
                  <Text style={styles.ImageText}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Todas infors
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#ff6200" }}
            >
              Ver todos
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

  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.5,
    borderBottomRightRadius: 65,
  },

  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },

  UserGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },

  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
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
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },

  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },

  ImageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});
