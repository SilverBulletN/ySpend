import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import DefaultLayout from "../../components/layout/DefaultLayout";
import TransactionItem from "../../components/common/TransactionItem";
import ProgressItem from "../../components/common/ProgressItem";
import { useSelector } from "react-redux";

const HomePage = ({ navigation }) => {
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  return (
    <DefaultLayout>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-white`}>Xin chào,</Text>
        <TouchableOpacity
          style={tw`bg-teal-500 p-2 rounded-lg`}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            source={require("../../../assets/icons/notification.png")}
            style={tw`w-6 h-6`}
          />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-2xl font-bold text-white`}>
        {firstName} {lastName}
      </Text>

      <View style={tw`mt-6 bg-teal-500 p-4 rounded-lg`}>
        <Text style={tw`text-white text-lg`}>Số dư</Text>
        <View style={tw`flex-row items-center mt-2`}>
          <Text style={tw`text-white text-3xl font-bold`}>
            {isBalanceVisible ? "3,000,000 đ" : "**********"}
          </Text>
          <TouchableOpacity
            style={tw`ml-2`}
            onPress={() => setIsBalanceVisible(!isBalanceVisible)}
          >
            <Image
              source={
                isBalanceVisible
                  ? require("../../../assets/icons/eye.png")
                  : require("../../../assets/icons/eye-off.png")
              }
              style={tw`w-7 h-7 m-auto`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-between mt-4`}>
          <View style={tw`flex-2`}>
            <Text style={tw`text-white`}>Thu nhập</Text>
            <Text style={tw`text-white text-lg`}>
              {isBalanceVisible ? "10,000,000 đ" : "**********"}
            </Text>
          </View>
          <View style={tw`flex-1`}>
            <Text style={tw`text-white`}>Chi tiêu</Text>
            <Text style={tw`text-white text-lg`}>
              {isBalanceVisible ? "7,000,000 đ" : "**********"}
            </Text>
          </View>
        </View>
      </View>

      <View style={tw`mt-6`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-xl font-bold text-gray-900`}>
            Giao dịch gần đây
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("History")}>
            <Text style={tw`text-teal-500`}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-4`}>
          <TransactionItem
            logo={require("../../../assets/icons/ocb.png")}
            title="Lương tháng 04/2024"
            date="Hôm qua"
            amount="+ 125,000,000 đ"
            amountStyle="text-green-500"
          />
          <TransactionItem
            logo={require("../../../assets/icons/paypal.png")}
            title="Thanh toán Netflix"
            date="Jan 30, 2022"
            amount="- 252,000 đ"
            amountStyle="text-red-500"
          />
          <TransactionItem
            logo={require("../../../assets/icons/youtube.png")}
            title="Youtube Premium"
            date="Jan 16, 2022"
            amount="- 399,000 đ"
            amountStyle="text-red-500"
          />
        </View>
      </View>

      <View style={tw`mt-6`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-xl font-bold text-gray-900`}>
            Tiến độ chi tiêu
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Plan")}>
            <Text style={tw`text-teal-500`}>+ Thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-4`}>
          <ProgressItem
            title="Ăn uống"
            progress="2,000,000/3,000,000 đ"
            progressWidth="2/3"
          />
          <ProgressItem
            title="Giáo dục"
            progress="2,000,000/3,000,000 đ"
            progressWidth="2/3"
          />
          <ProgressItem
            title="Giải trí"
            progress="2,000,000/3,000,000 đ"
            progressWidth="2/3"
          />
        </View>
      </View>
    </DefaultLayout>
  );
};

export default HomePage;
