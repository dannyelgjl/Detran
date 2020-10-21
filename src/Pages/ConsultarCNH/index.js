import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";


import globalStyle from '../../styles/globalStyle';

import InputCNH from '../../Components/InputConsultarCNH';


function ConsultarCNH ({ navigation }) {
    
  const goBack = () => {
    navigation.goBack();
  };

  


  return (
    <View style={{ flex: 1, backgroundColor: "E9E9E9"}}>
      <View
        style={globalStyle.headerGlobal}
      >
        <Text
          style={globalStyle.textStylizationGlobal}
        >
          Consulta de CNH
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

      <InputCNH />
    </View>
  );
}

export default ConsultarCNH;