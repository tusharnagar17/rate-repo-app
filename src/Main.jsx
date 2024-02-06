import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import RepositoryLists from "./components/RepositoryLists";
import AppBar from "./components/AppBar";
import theme from "./theme";
import { Route, Routes, Navigate, Link } from "react-router-native";
import SignIn from "./SignIn";

export default function Main() {
  const [showRepo, setShowRepo] = useState(false);
  const tushar = `King = Tushar`;
  return (
    <View style={{ paddingLeft: 10 }}>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryLists />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </View>
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
