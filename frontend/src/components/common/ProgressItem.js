import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const ProgressItem = ({ title, progress, progressWidth }) => (
  <View style={tw`mt-4`}>
    <View style={tw`flex-row justify-between`}>
      <Text style={tw`text-gray-900`}>{title}</Text>
      <Text style={tw`text-gray-500`}>{progress}</Text>
    </View>
    <View style={tw`w-full bg-gray-200 h-2 rounded-full mt-2`}>
      <View
        style={[
          tw`bg-teal-500 h-2 rounded-full`,
          { width: `${progressWidth * 100}%` },
        ]}
      />
    </View>
  </View>
);

export default ProgressItem;
