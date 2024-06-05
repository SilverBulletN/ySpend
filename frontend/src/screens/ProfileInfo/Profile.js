import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticated } from "../../store/slices/authSlice";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthenticated(false));
    navigation.navigate("Login");
  };

  return (
    <DefaultLayout isFlatList={false} hasBackground={true} hasFooter={true}>
      <View style={tw`flex-1 p-6`}>
        <View style={tw`flex-row items-center justify-between p-4`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-lg font-bold text-white`}>Tài khoản</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`items-center p-4 rounded-b-lg mt-6`}>
          <Image
            source={
              user.profileImage
                ? { uri: user.profileImage }
                : require("../../../assets/icons/defaultavatar.png")
            }
            style={tw`w-30 h-30 rounded-full mb-2 border-2 border-white`}
          />
          <Text style={tw`text-lg font-bold`}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={tw`text-gray-500`}>{user.email}</Text>
        </View>
        <View style={tw`mt-4`}>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-b border-gray-200`}
            // onPress={() => navigation.navigate("PersonalProfile")}
          >
            <Ionicons name="person-outline" size={24} color="gray" />
            <Text style={tw`ml-4`}>Hồ sơ cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-b border-gray-200`}
            onPress={() => navigation.navigate("Achievements")}
          >
            <Ionicons name="trophy-outline" size={24} color="gray" />
            <Text style={tw`ml-4`}>Thành tựu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-b border-gray-200`}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="settings-outline" size={24} color="gray" />
            <Text style={tw`ml-4`}>Cài đặt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-b border-gray-200`}
            // onPress={() => navigation.navigate("AccountLinking")}
          >
            <Ionicons name="link-outline" size={24} color="gray" />
            <Text style={tw`ml-4`}>Liên kết tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-b border-gray-200`}
            // onPress={() => navigation.navigate("Policy")}
          >
            <Ionicons name="document-text-outline" size={24} color="gray" />
            <Text style={tw`ml-4`}>Chính sách và điều khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center p-4 border-b border-gray-200`}
            // onPress={() => navigation.navigate("AboutUs")}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="gray"
            />
            <Text style={tw`ml-4`}>Về chúng tôi</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={tw`flex-row items-center p-4 mt-4`}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={tw`ml-4 text-red-500`}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </DefaultLayout>
  );
};

export default Profile;
