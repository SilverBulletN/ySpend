import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

const TransactionItem = ({ logo, title, date, amount, amountStyle }) => (
  <View style={tw`flex-row justify-between items-center mt-4`}>
    <View style={tw`flex-row items-center`}>
      <Image source={logo} style={tw`w-10 h-10 mr-4`} />
      <View>
        <Text style={tw`text-gray-900 font-bold`}>{title}</Text>
        <Text style={tw`text-gray-500`}>{date}</Text>
      </View>
    </View>
    <Text style={tw`${amountStyle} font-bold`}>{amount}</Text>
  </View>
);

export default TransactionItem;
