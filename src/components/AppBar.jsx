import React from "react";
import { View, Text } from "react-native";
import theme from "./../theme";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";

const AppBar = ({ name, children }) => {
  return (
    <View style={theme.containerTop}>
      <ScrollView horizontal>
        <Link to="SignIn">
          <Text>Sign-In Page</Text>
        </Link>

        <Link to="/">
          <Text>Repository Page</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
