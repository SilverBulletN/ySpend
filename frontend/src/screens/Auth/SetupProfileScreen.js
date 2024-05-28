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
import { useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setProfileImage,
} from "../../store/slices/authSlice";
import tw from "twrnc";

const SetupProfileScreen = ({ navigation }) => {
  const [lastName, setLastNameLocal] = useState("");
  const [firstName, setFirstNameLocal] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
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
      setImage({ uri: result.uri });
    }
  };

  const handleProfileSetup = () => {
    if (!firstName || !lastName) {
      Alert.alert("Error", "Vui lòng nhập Họ và Tên của bạn");
      return;
    }

    // Dispatch actions to update the store
    dispatch(setFirstName(firstName));
    dispatch(setLastName(lastName));
    dispatch(
      setProfileImage(
        image ? image.uri : require("../../../assets/icons/defaultavatar.png")
      )
    ); // Set the selected or default image

    // Navigate to login screen
    navigation.navigate("Login");
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-6 justify-center`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-6`}>
        <Text style={tw`text-teal-500 text-lg`}>← Quay lại</Text>
      </TouchableOpacity>
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-900`}>Hồ sơ</Text>
        <Text style={tw`text-gray-600 mt-2`}>Tải hình ảnh của bạn lên</Text>
      </View>
      <TouchableOpacity onPress={pickImage} style={tw`items-center mb-4`}>
        {image ? (
          <Image
            source={{ uri: image.uri }}
            style={tw`w-32 h-32 rounded-full`}
          />
        ) : (
          <View
            style={tw`w-26 h-26 rounded-full bg-teal-500 justify-center items-center`}
          >
            <Image
              source={require("../../../assets/icons/upload.png")}
              style={tw`w-8 h-8`}
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
