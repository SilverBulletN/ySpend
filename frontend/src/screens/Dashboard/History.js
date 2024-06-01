import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import DefaultLayout from "../../components/layout/DefaultLayout";
import TransactionItem from "../../components/common/TransactionItem";
import Ionicons from "react-native-vector-icons/Ionicons";

const History = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const transactions = useSelector((state) => state.transactions);

  const renderItem = ({ item }) => (
    <TransactionItem
      logo={item.logo}
      title={item.title}
      date={item.date}
      amount={item.amountString}
      amountStyle={item.amountStyle}
    />
  );

  return (
    <DefaultLayout isFlatList>
      <View style={tw`p-6`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`mb-4 flex-row items-center`}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={tw`text-white text-lg ml-2`}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <View style={tw`flex-row items-center`}>
          <View
            style={tw`bg-white p-3 rounded-lg flex-1 flex-row items-center`}
          >
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              style={tw`ml-2 flex-1`}
              placeholder="Tìm kiếm giao dịch"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={tw`p-3 ml-2`}>
            {/* <Ionicons name="filter-outline" size={24} color="white" /> */}
            <Image
              source={require("../../../assets/icons/filter.png")}
              style={tw`w-8 h-8`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-row justify-around bg-gray-50 p-4`}>
        <TouchableOpacity>
          <Text style={tw`text-teal-500`}>Tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-gray-500`}>Chi tiêu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-gray-500`}>Thu nhập</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`px-4 bg-gray-50`}
      />
    </DefaultLayout>
  );
};

export default History;
