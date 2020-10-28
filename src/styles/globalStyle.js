import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  //estilo global do Header
  
  headerGlobal: {
    backgroundColor: "#181818",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  textStylizationGlobal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginTop: 45,
  },

  iconArrowLeftGlobal: {
    position: "absolute",
    top: 50,
    left: 10,
  },

  lineYellowHeaderGlobal: {
    width: "100%", 
    height: 3, 
    backgroundColor: "#f2d902"
  }
})

export default styles