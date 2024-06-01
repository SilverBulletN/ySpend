import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import DefaultLayout from "../../components/layout/DefaultLayout";
import TransactionItem from "../../components/common/TransactionItem";
import ProgressItem from "../../components/common/ProgressItem";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomePage = ({ navigation }) => {
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const transactions = useSelector((state) => state.transactions);
  const recentTransactions = transactions.slice(-3).reverse();
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <DefaultLayout>
      <View style={tw`flex-row justify-between items-center mt-6 mx-6`}>
        <Text style={tw`text-white`}>Xin chào,</Text>
        <TouchableOpacity
          style={tw`bg-teal-500 p-2 rounded-lg`}
          onPress={() => navigation.navigate("Notification")}
        >
          <Image
            source={require("../../../assets/icons/notification.png")}
            style={tw`w-6 h-6`}
          />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-2xl font-bold text-white mx-6`}>
        {firstName} {lastName}
      </Text>

      <View style={tw`bg-teal-500 p-4 rounded-lg m-6`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-white text-lg`}>Số dư</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center mt-2`}>
          <Text style={tw`text-white text-3xl font-bold`}>
            {isBalanceVisible ? "3,000,000 đ" : "**********"}
          </Text>
          <TouchableOpacity
            style={tw`ml-2`}
            onPress={() => setIsBalanceVisible(!isBalanceVisible)}
          >
            <Ionicons
              name={isBalanceVisible ? "eye" : "eye-off"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row mt-4`}>
          <View style={tw`flex-1`}>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="arrow-down" size={20} color="white" />
              <Text style={tw`text-white ml-1`}>Thu nhập</Text>
            </View>
            <Text style={tw`text-white text-lg`}>
              {isBalanceVisible ? "10,000,000 đ" : "**********"}
            </Text>
          </View>
          <View style={tw`flex-1`}>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="arrow-up" size={20} color="white" />
              <Text style={tw`text-white ml-1`}>Chi tiêu</Text>
            </View>
            <Text style={tw`text-white text-lg`}>
              {isBalanceVisible ? "7,000,000 đ" : "**********"}
            </Text>
          </View>
        </View>
      </View>

      <View style={tw`mx-6`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-xl font-bold text-gray-900`}>
            Giao dịch gần đây
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("History")}>
            <Text style={tw`text-teal-500`}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View>
          {recentTransactions.map((transaction) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TransactionDetail", {
                  transaction: transaction,
                })
              }
            >
              <TransactionItem
                key={transaction.id}
                logo={transaction.logo}
                title={transaction.title}
                date={transaction.date}
                amount={transaction.amount}
                amountStyle={transaction.amountStyle}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={tw`m-6`}>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-lg font-bold text-gray-900`}>
              Tiến độ chi tiêu
            </Text>
            <View style={tw`flex-row items-center`}>
              <TouchableOpacity
                style={tw`bg-gray-200 px-3 py-1 rounded-full mr-2 ml-2`}
                onPress={() => navigation.navigate("Plan")}
              >
                <Text style={tw`text-black font-semibold`}>+ Thêm</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Plan")}>
            <Text style={tw`text-gray-500`}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ProgressItem title="Ăn uống" mount={2000000} limit_mount={3000000} />
          <ProgressItem
            title="Giáo dục"
            mount={2500000}
            limit_mount={3000000}
          />
          <ProgressItem
            title="Giải trí"
            mount={2000000}
            limit_mount={3000000}
          />
        </View>
      </View>
    </DefaultLayout>
  );
};

export default HomePage;
