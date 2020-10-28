import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  containerForm: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "98%",
    marginTop: 40,
    borderRadius: 6,
  },

  textInputTaxas: {
    width: "100%",
    height: 44,
    padding: 10,
    borderBottomWidth: 0.8,
    borderColor: "#E9E9E9",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    zIndex: 2,
  },

  textInputCPF: {
    width: "90%",
    height: 44,
    padding: 10,
    borderBottomWidth: 0.8,
    borderColor: "#E9E9E9",
    marginTop: 5,
    marginBottom: 20,
    fontSize: 16,
    zIndex: 2,
  },

  buttonImprimir: {
    backgroundColor: "#181818",
    marginTop: 10,
    marginBottom: 15,
    width: 140,
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 15
  }
})

export default styles