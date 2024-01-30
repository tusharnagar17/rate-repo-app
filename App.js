import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import RepositoryLists from "./src/components/RepositoryLists";
import AppBar from "./src/components/AppBar";

export default function App() {
  cosnt[(showRepo, setShowRepo)] = useState(false);
  return (
    <AppBar name="Repository">
      <View style={styles.container}>
        <Text>Main Screen / Home Screen!</Text>
        <Text>printing my work here {tushar}!</Text>
        <Pressable
          onPress={() => {
            setShowRepo((prev) => !prev);
          }}
        >
          Repo List
          {showRepo && <RepositoryLists />}
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </AppBar>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
