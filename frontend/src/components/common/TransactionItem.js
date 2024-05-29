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
// const TransactionItem = ({
//   logo,
//   title,
//   date,
//   amountString,
//   amountStyle,
//   recipe_name,
//   avatar_url,
//   status,
//   to,
//   image_url,
// }) => (
//   <View style={tw`flex-row justify-between items-center mt-4`}>
//     <View style={tw`flex-row items-center`}>
//       <Image source={logo} style={tw`w-10 h-10 mr-4`} />
//       <View>
//         <Text style={tw`text-gray-900 font-bold`}>{title}</Text>
//         <Text style={tw`text-gray-500`}>{date}</Text>
//         <Text style={tw`text-gray-700`}>Recipe: {recipe_name}</Text>
//         <Text style={tw`text-gray-500`}>To: {to}</Text>
//         <Text style={tw`text-gray-500`}>Status: {status}</Text>
//         <Image
//           source={{ uri: avatar_url }}
//           style={tw`w-6 h-6 rounded-full mt-1`}
//         />
//         <Image source={{ uri: image_url }} style={tw`w-10 h-10 rounded mt-1`} />
//       </View>
//     </View>
//     <Text style={tw`${amountStyle} font-bold`}>{amountString}</Text>
//   </View>
// );

export default TransactionItem;
