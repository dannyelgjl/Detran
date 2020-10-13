import {StyleSheet} from 'react-native'

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

  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginLeft: 10,
    color: "#6F6F6F",
  },

  positionText: {
    marginTop: 20,
    marginLeft: 20,
    width: "100%",
  }
});

export default styles