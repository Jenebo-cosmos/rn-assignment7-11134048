import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

import { useEffect, useState } from "react";

const Menu = require("../assets/Menu.png");
const remove = require("../assets/remove.png");
const add_circle = require("../assets/add_circle.png");
const Filter = require("../assets/Filter.png");
const Listview = require("../assets/Listview.png");
const shoppingBag = require("../assets/shoppingBag.png");
const Logo = require("../assets/Logo.png");

const didot = require("../assets/didot.ttf");
const Search = require("../assets/Search.png");
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadCart();
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerimg}>
        <Image source={Search} style={styles.headerimg1} />
        <Image source={shoppingBag} style={styles.headerimg2} />
        <Image source={Menu} style={styles.headerimg3} />
        <Image source={Logo} style={styles.headerimg4} />
      </View>
      <View style={styles.header}>
        <Text style={[styles.font, { fontWeight: "thin" }]}>OUR STORY</Text>
        <View style={styles.img0}>
          <Image source={Listview} style={styles.img1} />
        </View>
        <View style={styles.img}>
          <Image source={Filter} style={styles.img2} />
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Clothing", { product: item, addToCart })
            }
            style={styles.productContainer}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image
                source={require("../assets/add_circle.png")}
                style={styles.addButton}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  header: {
    flexDirection: "row",
    paddingTop: 20,
  },
  headerimg: {
    flexDirection: "row",
  },
  headerimg1: {
    left: 270,
  },
  headerimg2: {
    left: 290,
  },
  headerimg3: {
    right: 30,
  },
  headerimg4: {
    left: 60,
  },
  img: {
    backgroundColor: "#f5f5f5",
    height: 30,
    width: 30,
    borderRadius: 30,
    left: 155,
  },
  img0: {
    backgroundColor: "#f5f5f5",
    height: 30,
    width: 30,
    borderRadius: 30,
    left: 140,
  },
  img1: {
    left: 5,
    top: 5,
  },
  img2: {
    left: 5,
    top: 5,
  },

  font: {
    fontSize: 24,
    fontWeight: "bold",
    left: 20,
    fontFamily: "didot",
  },

  productContainer: {
    margin: 10,
    flexDirection: "row",
    margin: 10,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "space-around",
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    right: 250,
  },
  productTitle: {
    fontSize: 10,

    marginTop: 10,
    fontFamily: "didot",
    left: 20,
  },
  productPrice: {
    fontSize: 10,
    color: "#e60000",
    marginVertical: 5,
    right: 150,
    fontFamily: "didot",
    top: 60,
  },
  addButton: {
    width: 30,
    height: 30,
    marginBottom: 10,
    top: -10,
    left: 60,
  },
  addbutton: {},
});
