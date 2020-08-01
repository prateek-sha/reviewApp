import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Cards } from "../shared/Cards";
import { image } from "../styles/global";

export const ReviewDetails = ({ route, navigation }) => {
  const ratings = route.params.rating;
  return (
    <View style={globalStyles.container}>
      <Cards>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>Game Zone rating:</Text>
          <Image source={image.rating[ratings]} />
        </View>
      </Cards>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 1,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
