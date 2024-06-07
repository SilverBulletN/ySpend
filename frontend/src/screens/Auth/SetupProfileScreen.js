import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setProfileImage,
} from "../../store/slices/authSlice";
import { useUpdateUserProfileMutation } from "../../store/slices/apiSlice";
import tw from "twrnc";

const SetupProfileScreen = ({ navigation }) => {
  const [lastName, setLastNameLocal] = useState("");
  const [firstName, setFirstNameLocal] = useState("");
  const [image, setImage] = useState(null);

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email); // Get email from auth state

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Cần quyền truy cập bộ nhớ để chọn ảnh");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
    } else {
      alert("Vui lòng chọn ảnh");
    }
  };

  const handleProfileSetup = async () => {
    if (!firstName || !lastName) {
      Alert.alert("Error", "Vui lòng nhập Họ và Tên của bạn");
      return;
    }

    const profileData = {
      first_name: firstName,
      last_name: lastName,
      birthday: "1990-01-01", // This should be updated with actual data
      avatar_url: image || "http://example.com/defaultavatar.png",
      setting_bits: 15, // This should be updated with actual data
    };

    try {
      const response = await updateUserProfile({ email, profileData }).unwrap();
      if (response) {
        dispatch(setFirstName(response.first_name));
        dispatch(setLastName(response.last_name));
        dispatch(setProfileImage(response.avatar_url));
        Alert.alert("Success", "Profile updated successfully!");
        navigation.navigate("Login");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to update profile");
      console.error("Profile update error:", error);
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-6 pt-10 justify-start`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-6`}>
        <Text style={tw`text-teal-500 text-lg`}>← Quay lại</Text>
      </TouchableOpacity>
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-900`}>Hồ sơ</Text>
        <Text style={tw`text-gray-600 mt-2`}>Tải hình ảnh của bạn lên</Text>
      </View>
      <TouchableOpacity onPress={pickImage} style={tw`items-center mb-4`}>
        {image ? (
          <Image source={{ uri: image }} style={tw`w-32 h-32 rounded-full`} />
        ) : (
          <View
            style={tw`w-32 h-32 rounded-full bg-teal-500 justify-center items-center`}
          >
            <Image
              source={require("../../../assets/icons/upload.png")}
              style={tw`w-6 h-6`}
            />
          </View>
        )}
      </TouchableOpacity>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Họ</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="Họ"
          value={lastName}
          onChangeText={setLastNameLocal}
        />
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Tên</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="Tên"
          value={firstName}
          onChangeText={setFirstNameLocal}
        />
      </View>
      <TouchableOpacity
        style={tw`bg-teal-500 rounded-full py-3 mt-6`}
        onPress={handleProfileSetup}
      >
        <Text style={tw`text-center text-white text-lg`}>Đi đến Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetupProfileScreen;
