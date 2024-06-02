import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PieChart } from "react-native-chart-kit";

const PlanDetail = ({ route, navigation }) => {
  const { plan } = route.params;
  const categories = useSelector((state) => state.categories); 
  const totalBudget = 12500000;

  const pieData = [
    {
      name: "Ăn uống",
      population: 800000,
      color: "#34D399",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Giải trí",
      population: 250000,
      color: "#FB7185",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Mua sắm",
      population: 100000,
      color: "#60A5FA",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Giáo dục",
      population: 110000,
      color: "#A78BFA",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const totalSpending = pieData.reduce((total, item) => total + item.population, 0);

  const pieDataWithPercentage = pieData.map((item) => ({
    ...item,
    population: Math.round((item.population / totalSpending) * 100),
    name: `% ${item.name})`,
  }));

  return (
    <View style={tw`flex-1 bg-white p-6 pt-10`}>
      <View style={tw`flex-row justify-between items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-black text-lg`}>Kế hoạch chi tiêu</Text>
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw`mr-2`}>
            <Ionicons name="share-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`flex-row justify-around p-4`}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Tuần</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Tuần 31</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pieChartContainer}>
        <View style={styles.pieChartCenterText}>
          <Text style={styles.centerText}>
            {totalSpending.toLocaleString("vi-VN")}đ
          </Text>
          <Text style={styles.centerSubText}>tổng chi tiêu</Text>
        </View>
        <PieChart
          data={pieDataWithPercentage}
          width={350}
          height={250}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[0, 0]}
          absolute
        />
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-bold mb-4`}>Các thành phần</Text>
        <FlatList
          data={pieData}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={tw`flex-row justify-between items-center mb-4`}>
              <View style={tw`flex-row items-center`}>
                <View
                  style={[styles.colorBox, { backgroundColor: item.color }]}
                />
                <View style={tw`ml-2`}>
                  <Text style={tw`font-bold`}>{item.name}</Text>
                  <Text style={tw`text-gray-500`}>Còn 2 ngày</Text>
                </View>
              </View>
              <Text style={tw`font-bold`}>
                {item.population.toFixed(2)}% / {totalBudget.toLocaleString("vi-VN")}đ
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    borderColor: "#34D399",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  filterButtonText: {
    color: "#34D399",
  },
  colorBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  pieChartContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  pieChartCenterText: {
    position: "absolute",
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B5563",
  },
  centerSubText: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 2,
  },
});

const chartConfig = {
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

export default PlanDetail;
