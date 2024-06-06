import React, { useState, useMemo, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";
import DefaultLayout from "../../components/layout/DefaultLayout";
import PlanItem from "../../components/common/PlanItem";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { fetchPlans } from "../../store/slices/plansSlice";

const Plan = ({ navigation }) => {
  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState("Tuần");
  const plans = useSelector((state) => state.plans);

  useEffect(() => {
    if (plans.length === 0) {
      dispatch(fetchPlans());
    }
  }, [dispatch, plans.length]);

  const filteredPlans = useMemo(() => {
    return plans.filter((plan) => {
      if (filterType === "Tuần") return plan.type === "week";
      if (filterType === "Tháng") return plan.type === "month";
      if (filterType === "Năm") return plan.type === "year";
      return true;
    });
  }, [filterType, plans]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("PlanDetail", { plan: item })}
    >
      <PlanItem
        logo={require("../../../assets/icons/calendar.png")}
        week={`Tuần ${item.week}`}
        dateRange={`${item.month}/${item.year}`}
        amount={`${item.limit_amount.toLocaleString("vi-VN")} đ`}
      />
    </TouchableOpacity>
  );

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
          <Text style={tw`text-white text-lg`}>Kế hoạch chi tiêu</Text>
          <TouchableOpacity style={tw`absolute right-0 items-center`}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`flex-row justify-around bg-gray-50 p-4 bg-white`}>
        <TouchableOpacity
          onPress={() => setFilterType("Tuần")}
          style={tw`flex-1 items-center ${
            filterType === "Tuần" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              filterType === "Tuần" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Tuần
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilterType("Tháng")}
          style={tw`flex-1 items-center ${
            filterType === "Tháng" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              filterType === "Tháng" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Tháng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilterType("Năm")}
          style={tw`flex-1 items-center ${
            filterType === "Năm" ? "border-b-2 border-teal-500" : ""
          }`}
        >
          <Text
            style={tw`${
              filterType === "Năm" ? "text-teal-500" : "text-gray-500"
            }`}
          >
            Năm
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredPlans}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`px-4 pb-4 bg-gray-50`}
      />
    </DefaultLayout>
  );
};

export default Plan;
