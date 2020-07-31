import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const AddTodo = ({ submitHandler }) => {
  const [text, settext] = useState("");
  const changeHandler = (val) => {
    settext(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}
        value={text}
      />

      <Button
        onPress={() => {
          submitHandler(text);
          settext("");
        }}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
