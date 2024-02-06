import { Text } from "react-native";
import Main from "./src/Main";
import { NativeRouter, StatusBar } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}
