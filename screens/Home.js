import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet, Keyboard } from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import { Cards } from "../shared/Cards";
import { MaterialIcons } from "@expo/vector-icons";
import { ReviewForm } from "./ReviewForm";

export const Home = (props) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((current) => {
      return [review, ...current];
    });
    setmodalOpen(false);
  };

  const pressHandler = () => {
    return props.navigation.navigate("Details");
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss;
          }}
        >
          <View style={StyleSheet.modalContent}>
            <MaterialIcons
              name="close"
              onPress={() => setmodalOpen(false)}
              style={{ ...styles.modelToggle, marginTop: 20, marginBottom: 0 }}
              size={24}
            />

            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        style={styles.modelToggle}
        onPress={() => setmodalOpen(true)}
        size={24}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Details", item)}
          >
            <Cards>
              <Text style={globalStyles.textTitle}>{item.title}</Text>
            </Cards>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modelToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
  },
});
