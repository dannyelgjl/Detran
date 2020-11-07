import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Pages/Home";
import Infor from "./Pages/Infor";
import PontCNH from "./Pages/PontCNH";
import TaxasDeVeiculos from "./Pages/TaxasDeVeiculos";
import Veiculos from "./Pages/Veiculos";
import EmitirBoleto from "./Pages/EmitirBoleto";
import EmitirBoletoCnhCnpj from "./Pages/EmitirBoletoCnhCnpj";

import TaxasDeCNHCpf from "./Pages/TaxasHabilitação/Cpf";
import TaxasDeCNHCnpj from "./Pages/TaxasHabilitação/Cnpj";
import ServicosHabilitacao from "./Pages/ServicosHabilitacao";
import Boleto from "./Pages/Boleto";
import EmitirBoletoVeiculos from './Pages/EmitirBoletosVeiculos';
import BoletoVeiculos from './Pages/BoletoVeiculo';
import ConsultarCNH from './Pages/ConsultarCNH';
import BoletoCnhCnpj from './Pages/BoletoCnhCnpj'

import DrawerRoutes from "./routes/Drawer.routes";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={DrawerRoutes} />
        <Stack.Screen name="Infor" component={Infor} />
        <Stack.Screen name="PontCNH" component={PontCNH} />
        <Stack.Screen name="TaxasDeVeiculos" component={TaxasDeVeiculos} />
        <Stack.Screen name="Veiculos" component={Veiculos} />
        <Stack.Screen name="EmitirBoleto" component={EmitirBoleto} />
        <Stack.Screen name="EmitirBoletoCnhCnpj" component={EmitirBoletoCnhCnpj} />
        <Stack.Screen name="TaxasDeCNHCpf" component={TaxasDeCNHCpf} />
        <Stack.Screen name="TaxasDeCNHCnpj" component={TaxasDeCNHCnpj} />
        <Stack.Screen name="Boleto" component={Boleto} />
        <Stack.Screen name="BoletoCnhCnpj" component={BoletoCnhCnpj} />
        <Stack.Screen
          name="ServicosHabilitacao"
          component={ServicosHabilitacao}
        />
        <Stack.Screen  name="EmitirBoletoVeiculos" component={EmitirBoletoVeiculos} />
        <Stack.Screen  name="BoletoVeiculos" component={BoletoVeiculos} />
        <Stack.Screen  name="ConsultarCNH" component={ConsultarCNH} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
