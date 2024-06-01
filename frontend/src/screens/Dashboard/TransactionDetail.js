// src/screens/Dashboard/TransactionDetail.js
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import DefaultLayout from "../../components/layout/DefaultLayout";

const TransactionDetail = ({ navigation }) => {
  const route = useRoute();
  const { transaction } = route.params;
  const [imageError, setImageError] = useState(false);

  return (
    <DefaultLayout>
      <View style={tw`flex-1 p-6`}>
        <View style={tw`flex-row items-center justify-center mb-4 relative`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`absolute left-0 items-center`}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg`}>Chi tiết giao dịch</Text>
        </View>

        <View style={tw`bg-white p-6 mt-6 rounded-xl shadow-lg`}>
          <View style={tw`items-center`}>
            {imageError ? (
              <Ionicons
                name="cash"
                size={60}
                color="gray"
                // style={tw`w-16 h-16`}
              />
            ) : (
              <Image
                source={{ uri: transaction.logo }}
                style={tw`w-16 h-16 rounded-full`}
                onError={() => setImageError(true)}
              />
            )}
            <Text style={tw`text-red-500 text-lg mt-2`}>
              {transaction.amountString}
            </Text>
            <Text style={tw`text-black text-xl font-bold mt-2`}>
              {transaction.title}
            </Text>
          </View>

          <View style={tw`mt-6`}>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Status</Text>
              <Text style={tw`text-red-500`}>{transaction.status}</Text>
            </View>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>To</Text>
              <Text style={tw`text-black`}>{transaction.to_vendor}</Text>
            </View>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Time</Text>
              <Text style={tw`text-black`}>11:00</Text>
            </View>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Date</Text>
              <Text style={tw`text-black`}>30/02/2022</Text>
            </View>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Danh mục</Text>
              <Text style={tw`text-black`}>{transaction.category_id}</Text>
            </View>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Đính kèm</Text>
              <Text style={tw`text-black`}>Có</Text>
            </View>
          </View>

          <View style={tw`mt-6 p-4 bg-gray-100 rounded-lg`}>
            <Text style={tw`text-teal-500 mb-2`}>Thông tin đơn hàng</Text>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Dịch vụ</Text>
              <Text style={tw`text-black`}>{transaction.title}</Text>
            </View>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Mã đơn hàng</Text>
              <Text style={tw`text-black`}>9i6Orh9zjwIf8mejwoc7kpxze</Text>
            </View>
            <View style={tw`flex-row justify-between py-2`}>
              <Text style={tw`text-gray-500`}>Mô tả</Text>
              <Text style={tw`text-black`}>Netflix Subscription</Text>
            </View>
          </View>
        </View>
      </View>
    </DefaultLayout>
  );
};

export default TransactionDetail;
