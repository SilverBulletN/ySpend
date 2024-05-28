// src/screens/Onboarding/OnboardingScreen2.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-gray-50 justify-center items-center`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Image
          source={require("../../../assets/icons/onboarding2.png")}
          style={tw`w-48 h-48`}
        />
        <Text style={tw`text-xl font-bold text-gray-900 mt-6`}>Why spend?</Text>
        <Text style={tw`text-lg text-gray-700 mt-2 text-center`}>
          Ghi nhận các khoản thu chi, quản lý tiền bạc một cách hiệu quả
        </Text>
      </View>
      <View style={tw`flex-row justify-center items-center my-4`}>
        <View style={tw`w-2 h-2 bg-teal-500 rounded-full mx-1`} />
        <View style={tw`w-2 h-2 bg-teal-200 rounded-full mx-1`} />
        <View style={tw`w-2 h-2 bg-teal-200 rounded-full mx-1`} />
      </View>
      <View style={tw`w-full p-6`}>
        <TouchableOpacity
          style={tw`bg-teal-500 rounded-full py-3`}
          onPress={() => navigation.navigate("Onboarding3")}
        >
          <Text style={tw`text-center text-white text-lg`}>Tiếp tục</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`text-center text-gray-700 mt-4`}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={tw`text-center`}>Bỏ qua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen2;
