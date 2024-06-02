import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import tw from "twrnc";
import DefaultLayout from "../../components/layout/DefaultLayout";
import TransactionItem from "../../components/common/TransactionItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import FilterModal from "./FilterModal";
import { fetchTransactions } from "../../store/slices/transactionsSlice";

const History = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    amount: "Tất cả",
    category: "Tất cả",
    time: "Tất cả",
    type: "Tất cả",
  });

  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    if (transactions.length === 0) {
      dispatch(fetchTransactions());
    }
  }, [dispatch, transactions.length]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearchQuery = transaction.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      // const matchesType = filters;
      const matchesType =
        filters.type === "Tất cả" ||
        (filters.type === "Thu nhập" && transaction.amount > 0) ||
        (filters.type === "Chi tiêu" && transaction.amount < 0);
      const matchesCategory =
        filters.category === "Tất cả" ||
        transaction.category_id === filters.category;
      // const matchesAmount = filters;
      const matchesAmount =
        filters.amount === "Tất cả" ||
        (filters.amount === "0 - 1 triệu" &&
          Math.abs(transaction.amount) >= 0 &&
          Math.abs(transaction.amount) <= 1000000) ||
        (filters.amount === "1 - 5 triệu" &&
          Math.abs(transaction.amount) > 1000000 &&
          Math.abs(transaction.amount) <= 5000000) ||
        (filters.amount === "5 - 10 triệu" &&
          Math.abs(transaction.amount) > 5000000 &&
          Math.abs(transaction.amount) <= 10000000) ||
        (filters.amount === "10 - 50 triệu" &&
          Math.abs(transaction.amount) > 10000000 &&
          Math.abs(transaction.amount) <= 50000000) ||
        (filters.amount === "> 50 triệu" &&
          Math.abs(transaction.amount) > 50000000);

      return (
        matchesSearchQuery && matchesType && matchesCategory && matchesAmount
      );
    });
  }, [searchQuery, filters, transactions]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("TransactionDetail", { transaction: item })
      }
    >
      <TransactionItem
        logo={item.logo}
        title={item.title}
        date={item.date}
        amount={item.amountString}
        amountStyle={item.amountStyle}
      />
    </TouchableOpacity>
  );

  const applyFilters = (newFilters) => {
    console.log(newFilters);
    setFilters(newFilters);
    setModalVisible(false);
  };
  const handleFilterChange = (newType) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      type: newType,
    }));
  };

  return (
    <DefaultLayout isFlatList>
      <View style={tw`p-6`}>
        <View style={tw`flex-row items-center justify-center mb-4 relative`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`absolute left-0 items-center`}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-lg`}>Lịch sử giao dịch</Text>
        </View>

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
          <TouchableOpacity
            style={tw`p-3 ml-2`}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={require("../../../assets/icons/filter.png")}
              style={tw`w-8 h-8`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-row justify-around bg-gray-50 p-4`}>
        <TouchableOpacity
          onPress={() => handleFilterChange("Tất cả")}
          style={tw`flex-1 items-center ${
            filters.type == "Tất cả" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              filters.type === "Tất cả" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Tất cả
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterChange("Chi tiêu")}
          style={tw`flex-1 items-center ${
            filters.type == "Chi tiêu" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              filters.type === "Chi tiêu" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Chi tiêu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterChange("Thu nhập")}
          style={tw`flex-1 items-center ${
            filters.type == "Thu nhập" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              filters.type === "Thu nhập" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Thu nhập
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredTransactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`px-4 pb-4 bg-gray-50`}
      />
      <FilterModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onApply={applyFilters}
      />
    </DefaultLayout>
  );
};

export default History;
