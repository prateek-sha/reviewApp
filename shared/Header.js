import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.headerImage}
          source={require("../assets/heart_logo.png")}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
