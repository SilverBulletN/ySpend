import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Footer = () => {
  const navigation = useNavigation();
  const [activeIcon, setActiveIcon] = useState(null);

  const handlePressIn = (icon) => {
    setActiveIcon(icon);
  };

  const handlePressOut = () => {
    setActiveIcon(null);
  };

  const getIconColor = (icon) => (icon === activeIcon ? "teal" : "gray");

  return (
    <View style={tw`flex-row justify-between items-center bg-white p-4 pb-7`}>
      <TouchableOpacity
        style={tw`flex-1 items-center`}
        onPress={() => navigation.navigate("HomePage")}
        onPressIn={() => handlePressIn("home")}
        onPressOut={handlePressOut}
      >
        <Ionicons name="home-outline" size={24} color={getIconColor("home")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex-1 items-center`}
        onPress={() => navigation.navigate("StatisticHome")}
        onPressIn={() => handlePressIn("stats")}
        onPressOut={handlePressOut}
      >
        <Ionicons
          name="stats-chart-outline"
          size={24}
          color={getIconColor("stats")}
        />
      </TouchableOpacity>
      <View style={tw`flex-1 items-center`}>
        <TouchableOpacity
          style={tw`bg-teal-500 p-4 rounded-full absolute -top-12 shadow-lg`}
          onPress={() => navigation.navigate("AddExpense")}
          onPressIn={() => handlePressIn("add")}
          onPressOut={handlePressOut}
        >
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`flex-1 items-center`}
        onPress={() => navigation.navigate("Community")}
        onPressIn={() => handlePressIn("community")}
        onPressOut={handlePressOut}
      >
        <Ionicons
          name="people-outline"
          size={24}
          color={getIconColor("community")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex-1 items-center`}
        onPress={() => navigation.navigate("ProfileInfo")}
        onPressIn={() => handlePressIn("profile")}
        onPressOut={handlePressOut}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color={getIconColor("profile")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
