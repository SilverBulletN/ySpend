import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const EmailVerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const email = useSelector((state) => state.auth.email);

  const handleVerification = () => {
    if (code.length !== 6) {
      Alert.alert("Error", "Mã xác thực không hợp lệ");
      return;
    }
    // Assuming verification logic is successful
    setIsVerified(true);
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-6 pt-10 justify-start`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-6`}>
        <Text style={tw`text-teal-500 text-lg`}>← Quay lại</Text>
      </TouchableOpacity>
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-900`}>Xác thực email</Text>
        <Text style={tw`text-gray-600 mt-2`}>
          Vui lòng nhập mã xác thực email (mặc định là 123456)
        </Text>
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Nhập mã xác thực (6 chữ số)</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="******"
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={6}
        />
      </View>
      <TouchableOpacity
        style={tw`bg-teal-500 rounded-full py-3 mt-6`}
        onPress={handleVerification}
      >
        <Text style={tw`text-center text-white text-lg`}>Xác thực</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVerified}
        onRequestClose={() => setIsVerified(false)}
      >
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`bg-white p-6 rounded-lg justify-center items-center`}>
            <Image
              source={require("../../../assets/icons/success.png")}
              style={tw`w-12 h-12 bg-teal-500 rounded-full`}
            />
            <Text style={tw`text-xl font-bold text-gray-900 mt-6`}>
              Tuyệt vời!
            </Text>
            <Text style={tw`text-lg text-teal-500 mt-2`}>{email}</Text>
            <Text style={tw`text-gray-600 mt-2 text-center`}>
              Tài khoản của bạn đã đăng kí thành công
            </Text>
            <TouchableOpacity
              style={tw`bg-teal-500 rounded-full py-3 mt-6 w-full`}
              onPress={() => {
                setIsVerified(false);
                navigation.navigate("SetupProfile");
              }}
            >
              <Text style={tw`text-center text-white text-lg px-6`}>
                Thiết lập hồ sơ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EmailVerificationScreen;
