import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const TransactionItem = ({ logo, title, date, amount, amountStyle }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={tw`flex-row justify-between items-center mt-4`}>
      <View style={tw`flex-row items-center`}>
        {imageError ? (
          <Ionicons name="cash" size={40} color="gray" style={tw`mr-4`} />
        ) : (
          <Image
            source={{ uri: logo }}
            style={tw`w-10 h-10 mr-4`}
            onError={() => setImageError(true)}
          />
        )}

        <View>
          <Text style={tw`text-gray-900 font-bold`}>{title}</Text>
          <Text style={tw`text-gray-500`}>{date}</Text>
        </View>
      </View>
      <Text style={tw`${amountStyle} font-bold`}>{amount}</Text>
    </View>
  );
};

export default TransactionItem;
