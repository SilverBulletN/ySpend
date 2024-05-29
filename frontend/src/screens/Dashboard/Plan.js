import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";
import DefaultLayout from "../../components/layout/DefaultLayout";
import PlanItem from "../../components/common/PlanItem";
import { useSelector } from "react-redux";

const Plan = ({ navigation }) => {
  const plans = useSelector((state) => state.plans);
  const renderItem = ({ item }) => (
    <PlanItem
      logo={require("../../../assets/icons/calendar.png")}
      week={`Tuần ${item.week}`}
      dateRange={`${item.month}/${item.year}`}
      amount={`${item.limit_amount.toLocaleString("vi-VN")} đ`}
    />
  );

  return (
    <DefaultLayout isFlatList>
      <View style={tw`p-6 flex-row justify-between items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={tw`text-white text-lg `}>← Kế hoạch chi tiêu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-white text-3xl`}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row justify-around bg-gray-50 p-4`}>
        <TouchableOpacity>
          <Text style={tw`text-teal-500`}>Tuần</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-gray-500`}>Tháng</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={tw`text-gray-500`}>Năm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={plans}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`px-4 bg-gray-50`}
      />
    </DefaultLayout>
  );
};

export default Plan;
