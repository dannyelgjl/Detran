import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
 containerFlatlist: {
  
    backgroundColor: "white",
    marginTop: 8,
    marginLeft: 8,
    width: "95%",
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
 },

 codePosition: {
 
    alignItems: "flex-start",
    marginLeft: 10,
    marginTop: 18,
 },

 textCode: {
    fontSize: 20, 
    fontWeight: "bold",
    alignItems: "flex-start",
 },

 backgroundTextCode: {
    backgroundColor: "#3D903D",
    fontSize: 16,
    borderRadius: 6,
    color: "white",
    width: 25,
    height: 22,
    textAlign: "center",
    left: 15,
    marginTop: 10,
 },

 positionTaxa: {
    alignItems: "center",
    width: 150,
    height: 150,
    bottom: 75,
    left: 90,
    marginLeft: 10,
    marginTop: 16,
 },

 textTaxaTitle: {
    fontSize: 20,
    fontWeight: "bold",
 },

 textTaxa: {
    width: 150,
    height: 100,
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
 },

 valorPosition: {
    marginRight: 20,
    bottom: 224,
    marginBottom: 30,
    alignItems: "flex-end",
 },

 textTitleValor: {
    fontSize: 20,
    fontWeight: "bold",
    fontSize: 20,
 },

 textValor: {
    textAlign: "center", 
    fontSize: 15, 
    marginTop: 10
 }
})

export default styles;