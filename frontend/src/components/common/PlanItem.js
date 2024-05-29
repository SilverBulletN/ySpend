import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

const PlanItem = ({ logo, week, dateRange, amount }) => (
  <View
    style={tw`flex-row justify-between items-center p-4 border-b border-gray-200`}
  >
    <View style={tw`flex-row items-center`}>
      <Image source={logo} style={tw`w-10 h-10 mr-4`} />
      <View>
        <Text style={tw`text-gray-900 font-bold`}>{week}</Text>
        <Text style={tw`text-gray-500`}>{dateRange}</Text>
      </View>
    </View>
    <Text style={tw`text-gray-900 font-bold`}>{amount}</Text>
  </View>
);

export default PlanItem;
