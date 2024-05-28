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

const SignUpScreen = ({ navigation }) => {
  const [email, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignUp = () => {
    if (!validateEmail(email)) {
      setEmailError("Email không hợp lệ");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setPasswordError("Mật khẩu không khớp");
      return;
    } else {
      setPasswordError("");
    }

    // Perform sign-up logic here
    Alert.alert("Sign Up", "Đăng ký thành công!");
    dispatch(setEmail(email));
    dispatch(setAuthenticated(true));
    navigation.navigate("EmailVerification");
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-6 justify-center`}>
      <View style={tw`items-center mb-6`}>
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={tw`w-16 h-16`}
        />
        <Text style={tw`text-2xl font-bold text-gray-900 mt-4`}>Đăng ký</Text>
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Địa chỉ Email</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="placeholder@gmail.com"
          value={email}
          onChangeText={setEmailLocal}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={tw`text-red-500`}>{emailError}</Text> : null}
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
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Nhập lại mật khẩu</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="********"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        {passwordError ? (
          <Text style={tw`text-red-500`}>{passwordError}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={tw`bg-teal-500 rounded-full py-3`}
        onPress={handleSignUp}
      >
        <Text style={tw`text-center text-white text-lg`}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={tw`flex-row justify-center items-center my-6`}>
        <View style={tw`h-px w-full bg-gray-300`} />
        <Text style={tw`mx-4 text-gray-500`}>or</Text>
        <View style={tw`h-px w-full bg-gray-300`} />
      </View>
      <View style={tw`flex-row justify-center`}>
        <TouchableOpacity style={tw`mx-4`}>
          <Image
            source={require("../../../assets/icons/google.png")}
            style={tw`w-10 h-10`}
          />
        </TouchableOpacity>
        <TouchableOpacity style={tw`mx-4`}>
          <Image
            source={require("../../../assets/icons/facebook.png")}
            style={tw`w-10 h-10`}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`mt-6`}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={tw`text-center text-gray-700`}>
          Đã có tài khoản? <Text style={tw`text-teal-500`}>Đăng nhập</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
