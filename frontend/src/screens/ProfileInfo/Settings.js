import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import DefaultLayout from "../../components/layout/DefaultLayout";

const settings = [
  { id: "1", name: "Thông báo", description: "Nhận thông báo từ ứng dụng" },
  { id: "2", name: "Chế độ tối", description: "Chuyển sang chế độ tối" },
  {
    id: "3",
    name: "Dữ liệu di động",
    description: "Cho phép sử dụng dữ liệu di động",
  },
  { id: "4", name: "Tự động sao lưu", description: "Tự động sao lưu dữ liệu" },
  {
    id: "5",
    name: "Cập nhật tự động",
    description: "Tự động cập nhật ứng dụng",
  },
  {
    id: "6",
    name: "Ẩn thông tin nhạy cảm",
    description: "Ẩn thông tin nhạy cảm trên màn hình chính",
  },
  {
    id: "7",
    name: "Định vị",
    description: "Cho phép ứng dụng truy cập vị trí của bạn",
  },
];

const Settings = ({ navigation }) => {
  const [settingsState, setSettingsState] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: false,
    7: false,
  });

  const toggleSwitch = (id) => {
    setSettingsState((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.settingItem}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg font-bold`}>{item.name}</Text>
        <Text style={tw`text-gray-500`}>{item.description}</Text>
      </View>
      <Switch
        value={settingsState[item.id]}
        onValueChange={() => toggleSwitch(item.id)}
        trackColor={{ false: "#767577", true: "#34D399" }}
        thumbColor={settingsState[item.id] ? "#ffffff" : "#f4f3f4"}
      />
    </View>
  );

  return (
    <DefaultLayout isFlatList={true}>
      <View style={tw`flex-1 pt-6`}>
        <View
          style={tw`flex-row items-center justify-between p-4 border-b border-gray-200`}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-lg font-bold text-white`}>Cài đặt chung</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={settings}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={tw`p-4 bg-white`}
        />
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});

export default Settings;
