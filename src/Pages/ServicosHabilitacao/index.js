import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";

import { FontAwesome, FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";

import { View, Text, TouchableOpacity, Alert, StyleSheet, Modal, TouchableHighlight, Image } from "react-native";

import styles from './styles'
import globalStyle from '../../styles/globalStyle'

export default function ServicosHabilitacao({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []); 

  const TaxasDeCNH = useCallback(() => {
    navigation.navigate("TaxasDeCNH");
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const ConsultarCNH = () => {
    navigation.navigate("ConsultarCNH");
  }

  const goBack = () => {
    navigation.goBack();
  };

  const SendoDesenvolvido = useCallback(() => {
    Alert.alert("Sendo desenvolvido o melhor para você, Detran-PI.");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#E9E9E9" }}>
      <StatusBar style="light" />
      <View
        style={globalStyle.headerGlobal}
      >
        <Text
          style={globalStyle.textStylizationGlobal}
        >
          Habilitação
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
          onPress={openModal}
          style={styles.directionItem}
        >
          <FontAwesome5 name="money-check-alt" size={40} color="#d0b100" />
          <Text
            style={styles.textServiço}
          >
            Taxas - CNH
          </Text>
        </TouchableOpacity>
      </View>

      <View
         style={styles.containerServiços}
      >
        <TouchableOpacity
          onPress={ConsultarCNH}
          style={styles.directionItem}
        >
          <FontAwesome name="id-card-o" size={40} color="#d0b100" />
          <Text
            style={styles.textServiço}
          >
            Consultar CNH
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
            Situação CNH
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
            Soliticar Renovação CNH
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles1.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles1.centeredView}>
        
          <View style={styles1.modalView}>
            <TouchableOpacity 
            onPress={() => {
              setModalVisible(!modalVisible);
            }}

            style={{ 
              top: 10,
              right: 10,
              alignItems: 'flex-end', 
              position: "absolute", 
              }}>
              <Feather name="x-circle" size={28} color="#d0b100"/>
            </TouchableOpacity>
            
            <Text style={styles1.modalText}>Taxas - CNH</Text>

           <View style={{ padding: 16,justifyContent: "space-between",width: 300,  flexDirection: "row", marginBottom: 20, }}>
            <Image  
                style={{ width: 120, height: 120, borderRadius: 60 }}
                source={require("../../assets/images/cpf.png")}
                />

            <Image  
                style={{ width: 120, height: 120, borderRadius: 60  }}
                source={require("../../assets/images/cnpj.png")}
                />
           </View>
           
            <View style={styles1.containerButton}>
              <TouchableHighlight
                style={{ ...styles1.openButton, backgroundColor: '#d0b100', marginRight: 20 }}
                onPress={TaxasDeCNH}>
                <Text style={styles1.textStyle}>Pessoa Fisíca</Text>
              </TouchableHighlight>


              <TouchableHighlight
                style={{ ...styles1.openButton, backgroundColor: '#d0b100' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles1.textStyle}>Pessoa Jurídica</Text>
              </TouchableHighlight>
            </View>
            
          </View>
        </View>
      </Modal>

      
    </View>
    </View>
  );
}


const styles1 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    height: "80%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#1a1a1a',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    marginBottom: 4,
    width: 130,
    
  },

  containerButton: {
    flexDirection: "row",
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    
  },
  modalText: {
    marginTop: 10,
    marginBottom: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
});