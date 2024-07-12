import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  fontFamily,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

const remove = require("../assets/remove.png");
const shoppingBag = require("../assets/shoppingBag.png");
const dress1 = require("../assets/dress1.png");
const dress4 = require("../assets/dress4.png");
const dress3 = require("../assets/dress3.png");
const Logo = require("../assets/Logo.png");
const Search = require("../assets/Search.png");
const didotFont = require("../assets/didot.ttf");
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <Image source={Search} style={styles.img2} />
        <Image source={Logo} style={styles.img1} />
      </View>
      <Text style={styles.header}>C H E C K O U T</Text>
      <ScrollView>
        <View style={styles.images}>
          <Image source={dress1} style={styles.pics} />

          <View style={styles.up}>
            <TouchableOpacity
              onPress={() => alert("You are removing this item from the cart")}
            >
              <Image source={remove} style={styles.button1} />
            </TouchableOpacity>
            <Text style={styles.write1}>OFFICE WEAR</Text>
            <Text style={styles.write2}>Office wear for your office</Text>
            <Text style={styles.write3}>$120</Text>
          </View>
        </View>
        <View style={styles.images}>
          <Image source={dress4} style={styles.pics} />

          <View>
            <TouchableOpacity
              onPress={() => alert("You are removing this item from the cart")}
            >
              <Image source={remove} style={styles.button1} />
            </TouchableOpacity>
            <Text style={styles.write1}>LAMAREI</Text>
            <Text style={styles.write2}>Recycle Boucle knit Cardigan Pink</Text>
            <Text style={styles.write3}>$120</Text>
          </View>
        </View>
        <View style={styles.images}>
          <Image source={dress3} style={styles.pics} />

          <View>
            <TouchableOpacity
              onPress={() => alert("You are removing this item from the cart")}
            >
              <Image source={remove} style={styles.button1} />
            </TouchableOpacity>
            <Text style={styles.write1}>CHURCH WEAR </Text>
            <Text style={styles.write2}>Recycle Boucle knit Cardigan Pink</Text>
            <Text style={styles.write3}>$120</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.txt1}>E S T . TOTAL</Text>
          <Text style={styles.txt2}>$240</Text>
        </View>
        <TouchableOpacity
          onPress={() => alert("Are you sure you want to checkout? ")}
        >
          <View style={styles.footer1}>
            <Image source={shoppingBag} style={styles.img} />
            <Text style={styles.check}>C H E C K O U T</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button1: {
    top: 190,
    left: 150,
  },
  images: {
    flexDirection: "row",
    top: 20,
    padding: 10,
    height: 250,
    width: 200,
  },
  header: {
    fontSize: 20,
    fontWeight: "condensedBold",
    paddingTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    textTransform: "uppercase",
    fontFamily: "didot",
  },
  header1: {
    flexDirection: "row",
    paddingTop: 50,
  },
  img1: {
    left: 120,
  },
  img2: {
    left: 300,
  },

  write1: {
    fontWeight: "condensed",

    fontSize: 15,
    left: 10,
    color: "grey",
    fontFamily: "didot",
  },
  write2: {
    color: "grey",

    left: 10,
    fontSize: 11,
    fontFamily: "didot",
  },
  write3: {
    color: "brown",

    left: 10,
    fontFamily: "didot",
  },
  check: {
    textAlign: "center",
    color: "white",
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
  footer: {
    flexDirection: "row",
    paddingTop: 650,
  },
  img: {
    tintColor: "white",
    left: 100,
    top: 20,
  },
  txt1: {
    fontSize: 20,
    left: 10,
    color: "grey",
    fontFamily: "didot",
  },
  txt2: {
    fontSize: 20,
    left: 160,
    color: "brown",
    fontFamily: "didot",
  },
  check: {
    fontFamily: "didot",
    color: "white",
    left: 150,
  },
});
