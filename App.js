import React, { useState } from "react";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import { StyleSheet, View, Text } from "react-native";
import { AppLoading } from "expo";
import { globalStyles } from "./styles/global";
import AppNavigator from "./routes/drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontloading, setfontloading] = useState(false);

  if (fontloading) {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontloading(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
