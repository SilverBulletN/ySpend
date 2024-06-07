import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";
import { useSelector } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DefaultLayout from "../../components/layout/DefaultLayout";
import NotificationItem from "../../components/common/NotificationItem";

const notifications = [
  {
    id: "1",
    title: "Thanh toán thành công",
    description: "Tiền điện tháng 4/2024 đã được thanh toán",
    time: "1 giờ trước",
    logo: require("../../../assets/icons/electric.png"),
  },
  {
    id: "2",
    title: "Chương trình khuyến mại",
    description: "Giảm giá 10% khi thanh toán qua Momo",
    time: "2 giờ trước",
    logo: require("../../../assets/icons/momo.png"),
  },
  {
    id: "3",
    title: "Nhắc nhở thanh toán hoá đơn",
    description: "Thanh toán hoá đơn với ZaloPay",
    time: "5 giờ trước",
    logo: require("../../../assets/icons/zalopay.png"),
  },
  {
    id: "4",
    title: "Đăng ký Netflix Premium",
    description: "Đăng ký Netflix Premium tháng 5/2024",
    time: "1 ngày trước",
    logo: require("../../../assets/icons/netflix.png"),
  },
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
        <View style={tw`p-6 flex-row justify-between items-center`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-white text-xl`}>Thông báo</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationSetting")}
          >
            <Ionicons name="settings-outline" size={24} color="white" />
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
