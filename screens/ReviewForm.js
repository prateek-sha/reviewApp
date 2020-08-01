import React from "react";
import { Formik } from "formik";
import { StyleSheet, View, Button, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { TextInput } from "react-native-gesture-handler";
import * as yup from "yup";
import { NewButton } from "../shared/NewButton";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5 ", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export const ReviewForm = ({ addReview }) => {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View style={{ ...globalStyles.container, flex: 0 }}>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.error}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.error}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              keyboardType="number-pad"
              placeholder="Review Rating(1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("rating")}
            />

            <Text style={globalStyles.error}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <NewButton Title="Submit" pressHandler={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({});
