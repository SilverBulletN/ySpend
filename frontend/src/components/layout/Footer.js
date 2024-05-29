import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

const Footer = () => {
  return (
    <View style={tw`flex-row justify-between items-center bg-white p-4 pb-5`}>
      <TouchableOpacity style={tw`flex-1 items-center`}>
        <Image
          source={require("../../../assets/icons/home.png")}
          style={tw`w-6 h-6`}
        />
      </TouchableOpacity>
      <TouchableOpacity style={tw`flex-1 items-center`}>
        <Image
          source={require("../../../assets/icons/stats.png")}
          style={tw`w-6 h-6`}
        />
      </TouchableOpacity>
      <View style={tw`flex-1 items-center`}>
        <TouchableOpacity
          style={tw`bg-teal-500 p-4 rounded-full absolute -top-12 shadow-lg`}
        >
          <Image
            source={require("../../../assets/icons/add.png")}
            style={tw`w-6 h-6`}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={tw`flex-1 items-center`}>
        <Image
          source={require("../../../assets/icons/community.png")}
          style={tw`w-6 h-6`}
        />
      </TouchableOpacity>
      <TouchableOpacity style={tw`flex-1 items-center`}>
        <Image
          source={require("../../../assets/icons/user.png")}
          style={tw`w-6 h-6`}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
