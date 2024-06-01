import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import tw from "twrnc";
import DefaultLayout from "../../components/layout/DefaultLayout";

const NotificationSetting = ({ navigation }) => {
  const [settings, setSettings] = useState({
    allNotifications: true,
    incomeNotifications: true,
    expenseNotifications: true,
    appUpdates: true,
    reminders: true,
    thresholdAlerts: false,
  });

  const toggleSwitch = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <DefaultLayout>
      <View style={tw`flex-1`}>
        <View style={tw`p-6 flex-row justify-between items-center`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={tw`text-white text-lg`}>←</Text>
          </TouchableOpacity>
          <Text style={tw`text-white text-lg`}>Cài đặt thông báo</Text>
          <View style={tw`w-6`}></View>
        </View>
        <View style={tw`m-4 p-6 bg-white rounded-lg mt-4`}>
          {[
            {
              key: "allNotifications",
              label: "Tất cả thông báo",
              description: "Cảnh báo khi chi tiêu vượt quá kế hoạch",
            },
            {
              key: "incomeNotifications",
              label: "Thông báo thu nhập",
              description: "Nhận thông báo về khoản thu",
            },
            {
              key: "expenseNotifications",
              label: "Thông báo chi tiêu",
              description: "Nhận thông báo về khoản chi",
            },
            {
              key: "appUpdates",
              label: "Cập nhật ứng dụng",
              description: "Nhận thông báo khi có bản cập nhật mới",
            },
            {
              key: "reminders",
              label: "Nhắc nhở",
              description: "Nhắc nhở hóa đơn sắp tới",
            },
            {
              key: "thresholdAlerts",
              label: "Cảnh báo đạt ngưỡng",
              description: "Cảnh báo khi chi tiêu vượt quá kế hoạch",
            },
          ].map((setting) => (
            <View
              key={setting.key}
              style={tw`flex-row justify-between items-center mb-4`}
            >
              <View style={tw`flex-1`}>
                <Text style={tw`text-lg font-bold text-gray-900`}>
                  {setting.label}
                </Text>
                <Text style={tw`text-gray-600`}>{setting.description}</Text>
              </View>
              <Switch
                value={settings[setting.key]}
                onValueChange={() => toggleSwitch(setting.key)}
              />
            </View>
          ))}
        </View>
      </View>
    </DefaultLayout>
  );
};

export default NotificationSetting;
