import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";

const iconMap = {
  "Ăn uống": "restaurant",
  "Giải trí": "game-controller",
  "Mua sắm": "cart",
  "Đi lại": "car",
  "Điện nước": "water",
  "Lương": "cash",
  "Đầu tư": "trending-up",
  "Giáo dục": "school",
};

const ProgressItem = ({ title, mount = 0, limit_mount = 1 }) => {
  const progressWidth = mount / limit_mount;

  return (
    <View style={tw`mt-4 flex-row items-center`}>
      <View style={tw`bg-white p-2 rounded-full mr-3`}>
        <Ionicons
          name={iconMap[title] || "help-circle"}
          size={24}
          color="gray"
        />
      </View>
      <View style={tw`flex-1`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-900`}>{title}</Text>
          <Text style={tw`text-gray-500`}>
            {mount.toLocaleString()} / {limit_mount.toLocaleString()} đ
          </Text>
        </View>
        <View style={tw`w-full bg-gray-200 h-3 rounded-full mt-2`}>
          <LinearGradient
            colors={["#D5FAFA", "#2A767C"]}
            start={[0, 0]}
            end={[1, 0]}
            style={[tw`h-3 rounded-full`, { width: `${progressWidth * 100}%` }]}
          />
        </View>
      </View>
    </View>
  );
};

export default ProgressItem;
