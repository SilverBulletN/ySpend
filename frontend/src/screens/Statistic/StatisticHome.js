import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/layout/DefaultLayout";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      data: [500, 1000, 1500, 1200, 1120, 900, 1300, 1100, 1400],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Spending"], // optional
};

const renderExpenseItem = ({ item, navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("TransactionDetail", { transaction: item })
    }
  >
    <View style={tw`flex-row justify-between items-center py-2`}>
      <View style={tw`flex-row items-center`}>
        <View style={tw`bg-green-500 p-2 rounded-full mr-4`}>
          <Ionicons name="cash" size={24} color="white" />
        </View>
        <View>
          <Text style={tw`text-gray-700`}>{item.recipe_name}</Text>
          <Text style={tw`text-gray-500`}>{item.date}</Text>
        </View>
      </View>
      <Text style={tw`text-red-500`}>{item.amount.toLocaleString()} đ</Text>
    </View>
  </TouchableOpacity>
);

const StatisticHome = ({ navigation }) => {
  const transactions = useSelector((state) => state.transactions);

  const highestExpenses = useMemo(() => {
    return transactions
      .filter((transaction) => transaction.amount < 0)
      .sort((a, b) => a.amount - b.amount)
      .slice(0, 3);
  }, [transactions]);

  const highestIncome = useMemo(() => {
    return transactions
      .filter((transaction) => transaction.amount > 0)
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 3);
  }, [transactions]);

  return (
    <DefaultLayout isFlatList={true} hasBackground={false}>
      <View style={tw`flex-1 bg-gray-50`}>
        <View style={tw`p-6`}>
          <View style={tw`flex-row items-center mb-4`}>
            <Text style={tw`text-lg font-bold text-gray-900 m-auto`}>
              Thống kê tổng quan
            </Text>
          </View>

          <LineChart
            data={data}
            width={Dimensions.get("window").width - 32} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

          <View style={tw`bg-white p-4 rounded-lg mt-4`}>
            <Text style={tw`text-lg font-bold text-gray-900 mb-2`}>
              Chi tiêu nhiều nhất
            </Text>
            <FlatList
              data={highestExpenses}
              renderItem={({ item }) => renderExpenseItem({ item, navigation })}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={tw`bg-white p-4 rounded-lg mt-4`}>
            <Text style={tw`text-lg font-bold text-gray-900 mb-2`}>
              Thu nhập nhiều nhất
            </Text>
            <FlatList
              data={highestIncome}
              renderItem={({ item }) => renderExpenseItem({ item, navigation })}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </DefaultLayout>
  );
};

export default StatisticHome;
