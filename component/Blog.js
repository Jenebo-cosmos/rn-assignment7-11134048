import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const shoppingBag = require("../assets/shoppingBag.png");
const Blog = ({ navigation }) => {
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
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../assets/Menu.png")} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require("../assets/Logo.png")} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/Search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image
              source={require("../assets/shoppingBag.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.storyText}>OUR STORY</Text>

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
      <TouchableOpacity
        onPress={() => navigation.navigate("Store")}
        style={styles.footer1}
      >
        <Image source={shoppingBag} style={styles.img} />
        <Text style={styles.check}>VIEW ITEMS IN BASKET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginEnd: 10,
  },
  logo: {},
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 50,
  },
  storyText: {
    fontSize: 24,
    fontWeight: "condensed",
    marginLeft: 10,
    marginBottom: 10,
    fontFamily: "didot",
  },
  productContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    borderColor: "#ddd",

    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "condensed",
    marginTop: 10,
    left: 0,
    fontFamily: "didot",
  },
  productPrice: {
    fontSize: 16,
    color: "#e60000",
    marginVertical: 5,
    left: -30,
    fontFamily: "didot",
  },
  addButton: {
    top: -20,
    left: 60,
  },
  footer: {
    flexDirection: "row",
    paddingTop: 650,
  },
  img: {
    tintColor: "white",
    left: 100,
    top: 20,
  },
  check: {
    fontFamily: "didot",
    color: "white",
    left: 130,
  },
  footer1: {
    paddingBottom: 40,
    backgroundColor: "black",
    height: 70,
    width: 400,
    borderRadius: 20,
    marginBottom: 1,
    right: 20,
  },
});

export default Blog;
