import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: { paddingTop: Constants.statusBarHeight },
});

const AppBar = ({ name, children }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      {children}
    </View>
  );
};

export default AppBar;
