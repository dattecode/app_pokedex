import React from "react";
import { Image, Text } from "react-native";
import Pokedex from "./pages/Pokedex";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokeDetails from "./pages/PokeDetails";

const Stack = createNativeStackNavigator();
const Main = () => {

  //Doms Elements
  const LogoTitle = () => {
    return (
      <Image
        source={require("./imags/pokeball.png")}
        style={{ width: 65, height: 65, }}
      />
    );
  };

  const PokeRight = () => {
    return (
      <Text
      style={{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
      }}
      >
        Pokedex
      </Text>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => 
            <PokeRight/>
          }}
        />
        <Stack.Screen
          name="PokeDetails"
          component={PokeDetails}
          options={{
            title: "Details",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
