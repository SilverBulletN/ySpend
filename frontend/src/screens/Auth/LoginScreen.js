import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { setEmail, setAuthenticated } from "../../store/slices/authSlice";
import tw from "twrnc";

const LoginScreen = ({ navigation }) => {
  const [email, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Vui lòng nhập Email và Mật khẩu");
      return;
    }

    // Simulate login
    if (email === "admin@gmail.com" && password === "123456") {
      dispatch(setEmail(email));
      dispatch(setAuthenticated(true));
      navigation.navigate("Dashboard");
    } else {
      Alert.alert("Error", "Email hoặc Mật khẩu không đúng");
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-6 justify-center`}>
      <View style={tw`items-center mb-6`}>
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={tw`w-16 h-16`}
        />
        <Text style={tw`text-2xl font-bold text-gray-900 mt-4`}>Đăng nhập</Text>
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Địa chỉ Email</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="Mainideas@gmail.com"
          value={email}
          onChangeText={setEmailLocal}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Mật khẩu</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={tw`bg-teal-500 rounded-full py-3 mt-6`}
        onPress={handleLogin}
      >
        <Text style={tw`text-center text-white text-lg`}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`mt-6`}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={tw`text-center text-gray-700`}>
          Chưa có tài khoản? <Text style={tw`text-teal-500`}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
