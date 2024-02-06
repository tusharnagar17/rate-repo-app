import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  containerTop: {
    paddingTop: Constants.statusBarHeight,
    fontSize: 22,
    fontWeight: 20,
    // backgroundColor: "#4f5052",
  },
  button: {
    padding: 5,
    backgroundColor: "#076eca",
    height: 30,
    width: 50,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 2,
    fontSize: 16,
  },
});

export default styles;
