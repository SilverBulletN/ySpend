import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";
import Footer from "./Footer";

const { width } = Dimensions.get("window");

const DefaultLayout = ({ children }) => {
  return (
    <View style={tw`flex-1`}>
      <View style={styles.curvedBackgroundContainer}>
        <LinearGradient
          colors={["#00bfa5", "#00897b"]}
          style={styles.curvedBackground}
        />
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={tw`p-6`}>{children}</View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  curvedBackgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "25%",
    zIndex: -1,
    overflow: "hidden",
  },
  curvedBackground: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: "30% 50%",
    borderBottomRightRadius: "30% 50%",
  },
  circle1: {
    position: "absolute",
    top: 30,
    left: 30,
    width: 100,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
  },
  circle2: {
    position: "absolute",
    top: 60,
    right: 40,
    width: 80,
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 40,
  },
  scrollView: {
    zIndex: 1,
  },
});

export default DefaultLayout;
