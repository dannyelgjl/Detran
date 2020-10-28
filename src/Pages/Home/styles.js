import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  openDrawerMenuIcon: {
    marginBottom: 30,
    alignItems: "center",
    position: "absolute",
    top: 45,
    left: 15,
  },

  styleCard: {
    width: 114,
    marginRight: 8,
    height: 100,
    borderRadius: 15,
    backgroundColor: "#d0b100",
    alignItems: "center",
    justifyContent: "center",
  },

  imageIcon: {
    width: 66,
    height: 42,
    zIndex: 1,
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
    marginTop: 22,
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
    width: 109,
    height: 95,
    marginRight: 8,
    borderRadius: 15,
    position: "absolute",
    backgroundColor: "#2d2600",
    opacity: 0.5,
  },

  imageLocationIcon: {
    zIndex: 1,
  },

  ImageText: {
    color: "#fff",
    marginTop: 4,
    fontSize: 14,
    textAlign: "center",
  },

  titleServiços: {
    fontSize: 24, 
    fontWeight: "bold", 
    color: "white"
  },

  noticiasContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  noticiasTextTitle: {
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#fff"
  },

  vertodosTextNoticias: {
    fontSize: 14, 
    fontWeight: "bold", 
    color: "#fff"
  },

  imageNoticias: {
    width: "92%",
    height: 250,
    borderRadius: 10,
    alignSelf: "center",
  }

});



export default styles;