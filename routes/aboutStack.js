import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { About } from "../screens/About";
import { Header } from "../shared/Header";
import { Image } from "react-native";

const Stack = createStackNavigator();

export const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="About Game Zone" />
          ),
          headerBackground: () => (
            <Image
              source={require("../assets/game_bg.png")}
              style={{ height: "100%" }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
