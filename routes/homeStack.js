import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { ReviewDetails } from "../screens/ReviewDetails";
import { Header } from "../shared/Header";
import { Image } from "react-native";

const Stack = createStackNavigator();

export const Homeabout = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title="Game Zone" />,
        headerBackground: () => (
          <Image
            source={require("../assets/game_bg.png")}
            style={{ height: "100%" }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Details"
      component={ReviewDetails}
      options={{ title: "Review Details" }}
    />
  </Stack.Navigator>
);
