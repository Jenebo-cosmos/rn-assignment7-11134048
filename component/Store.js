import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const shoppingBag = require("../assets/shoppingBag.png");
const didot = require("../assets/didot.ttf");
import { useFonts } from "expo-font";
const Store = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/Logo.png")}
          style={styles.titleImage}
        />
        <TouchableOpacity>
          <Image source={require("../assets/Search.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>CHECKOUT</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Image
                source={require("../assets/remove.png")}
                style={styles.removeIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>E S T . T O T A L</Text>
        <Text style={styles.totalAmount}>${calculateTotal()}</Text>
      </View>
      <TouchableOpacity
        style={styles.footer1}
        onPress={() => navigation.navigate("Blog")}
      >
        <Image source={shoppingBag} style={styles.img} />
        <Text style={styles.check}>C H E C K O U T</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "condensed",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "didot",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 120,
    borderRadius: 5,
    resizeMode: "contain",
    buttom: 20,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "condensed",
    fontFamily: "didot",
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#888",
    fontFamily: "didot",
  },
  itemPrice: {
    fontSize: 16,
    color: "#e60000",
    fontFamily: "didot",
  },
  removeIcon: {
    top: 50,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "condensed",
    fontFamily: "didot",
    color: "grey",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "condensed",
    color: "#e60000",
    fontFamily: "didot",
  },

  footer1: {
    paddingBottom: 40,
    backgroundColor: "black",
    height: 70,
    width: 400,
    borderRadius: 20,
    marginBottom: 1,
    right: 30,
  },
  footer: {
    flexDirection: "row",
  },
  img: {
    tintColor: "white",
    left: 100,
    top: 20,
  },
  check: {
    fontFamily: "didot",
    color: "white",
    left: 150,
  },
});

export default Store;
