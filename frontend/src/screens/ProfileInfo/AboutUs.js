import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const AboutUs = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View
        style={tw`flex-row justify-between items-center p-6 pt-12 bg-teal-500`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold text-white`}>Về chúng tôi</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={tw`p-6`}>
        <View style={tw`flex items-center mb-6`}>
          <Image
            source={require("../../../assets/icons/logo.png")}
            style={tw`w-20 h-20 mb-4`}
          />
          <Text style={tw`text-2xl font-bold text-teal-500`}>ySpend</Text>
        </View>

        <View style={tw`bg-gray-100 p-4 rounded-lg mb-6`}>
          <Text style={tw`text-center text-gray-700 mb-2`}>
            Được tin tưởng bởi 5 người dùng từ 1 quốc gia
          </Text>
          <View style={tw`flex-row justify-around items-center`}>
            <View style={tw`flex items-center`}>
              <Text style={tw`text-3xl font-bold text-teal-500`}>5.0</Text>
              <Ionicons name="star" size={24} color="gold" />
              <Text style={tw`text-gray-700`}>Appstore & Google Play</Text>
            </View>
            <View style={tw`flex items-center`}>
              <Text style={tw`text-3xl font-bold text-teal-500`}>0</Text>
              <Ionicons name="star" size={24} color="gray" />
              <Text style={tw`text-gray-700`}>
                tổ chức tài chính đã liên kết
              </Text>
            </View>
          </View>
        </View>

        <Text style={tw`text-gray-700 mb-4`}>
          Ứng dụng ySpend ra đời với mục tiêu mang lại giải pháp quản lý tài
          chính cá nhân toàn diện, miễn phí và dễ sử dụng cho mọi người. Với
          ySpend, bạn không chỉ theo dõi mọi khoản chi tiêu một cách dễ dàng mà
          còn phân tích, lập kế hoạch tài chính sao cho hiệu quả nhất.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Mang lại giải pháp tài chính cá nhân hoàn hảo, ySpend là lựa chọn hàng
          đầu cho hàng triệu người dùng trên toàn thế giới.
        </Text>
        <Text style={tw`text-gray-700 mb-4`}>
          Hơn cả một ứng dụng tài chính cá nhân thông thường, ySpend luôn nỗ lực
          mang lại giá trị và trải nghiệm người dùng tốt nhất.
        </Text>

        <View style={tw`border-t border-gray-300 pt-4`}>
          <Text style={tw`text-center text-gray-700`}>
            Phát triển bởi nhóm Binance
          </Text>
          <Text style={tw`text-center text-gray-700`}>
            268 Lý Thường Kiệt, Phường 14, Quận 10, TP. HCM
          </Text>
          <Text style={tw`text-center text-gray-700`}>Phiên bản 0.0.1</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;
