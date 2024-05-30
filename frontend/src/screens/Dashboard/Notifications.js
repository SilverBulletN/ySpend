import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/layout/DefaultLayout";
import NotificationItem from "../../components/common/NotificationItem";

const notifications = [
  {
    id: "1",
    title: "Thanh toán thành công",
    description: "Hóa đơn tiền điện tháng 4/2024 đã được thanh toán",
    time: "1 giờ trước",
    logo: require("../../../assets/icons/electric.png"),
  },
  {
    id: "2",
    title: "Hóa đơn sắp tới",
    description: "Sắp đến lúc thanh toán hóa đơn tiền nước tháng 5/2024",
    time: "1 giờ trước",
    logo: require("../../../assets/icons/momo.png"),
  },
  // Add more notifications as needed
];

const Notification = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <NotificationItem
      logo={item.logo}
      title={item.title}
      description={item.description}
      time={item.time}
    />
  );

  return (
    <DefaultLayout isFlatList>
      <View style={tw`flex-1`}>
        <View style={tw`p-6 items-center flex-row`}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`text-white text-lg`}>←</Text>
          </TouchableOpacity>
            <Text style={tw`text-white text-lg`}>Thông báo</Text>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`text-white text-lg`}>...</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={tw`p-4 bg-gray-50`}
        />
      </View>
    </DefaultLayout>
  );
};

export default Notification;
