import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

export const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>About us</Text>
      <Text style={globalStyles.paragraph}>Too lazy to type about us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", textTransform: "uppercase" },
});
