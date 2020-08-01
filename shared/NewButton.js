import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export const NewButton = ({ Title, pressHandler }) => {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.button}>
        <Text style={styles.text}>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
