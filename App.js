import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import { FontDisplay, useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "./component/HomeScreen";
import CartScreen from "./component/CartScreen";

import Home from "./component/Home";
import Store from "./component/Store";
import Location from "./component/Location";
import Blog from "./component/Blog";
import Clothing from "./component/Clothing";
import Jewelry from "./component/Jewelry";
import Electronic from "./component/Electronic";
const Logo = require("./assets/Logo.png");
const Menu = require("./assets/Menu.png");
const shoppingBag = require("./assets/shoppingBag.png");
const Search = require("./assets/Search.png");
const didotFont = require("./assets/didot.ttf");
const Close = require("./assets/Close.png");

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "didot",
        },

        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen name="Cosmos" component={Blog} />

      <Drawer.Screen name="Store" component={Store} />
      <Drawer.Screen name="Location" component={CartScreen} />
      <Drawer.Screen name="Blog" component={Blog} />
      <Drawer.Screen name="Jewelry" component={CartScreen} />

      <Drawer.Screen name="Clothing" component={Clothing} />
    </Drawer.Navigator>
  );
}
export default function App() {
  const [fontsLoaded] = useFonts({
    didot: require("./assets/didot.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer style={styles.container}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
