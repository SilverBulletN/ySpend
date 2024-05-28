// src/screens/Onboarding/OnboardingScreen1.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-gray-50 justify-center items-center`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={tw`w-24 h-24`}
        />
        <Text style={tw`text-xl font-bold text-gray-900 mt-6`}>
          Chào mừng đến với ySpend
        </Text>
        <Text style={tw`text-lg text-gray-700 mt-2`}>
          Chi tiêu quen, dùng ySpend!
        </Text>
      </View>
      <View style={tw`w-full p-6`}>
        <TouchableOpacity
          style={tw`bg-teal-500 rounded-full py-3`}
          onPress={() => navigation.navigate("Onboarding2")}
        >
          <Text style={tw`text-center text-white text-lg`}>Bắt đầu</Text>
        </TouchableOpacity>
        <Text style={tw`text-center text-gray-700 mt-4`}>
          Đã có tài khoản?{" "}
          <Text
            style={tw`text-teal-500`}
            onPress={() => navigation.navigate("Login")}
          >
            Đăng nhập
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default OnboardingScreen1;
