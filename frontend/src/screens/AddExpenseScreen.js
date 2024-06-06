import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import tw from "twrnc";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTransaction } from "../store/slices/transactionsSlice";
import { BASE_URL } from "@env";

const categories = [
  "Ăn uống",
  "Giải trí",
  "Mua sắm",
  "Đi lại",
  "Điện nước",
  "Lương",
  "Đầu tư",
  "Giáo dục",
];

const AddExpenseScreen = ({ navigation }) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [receiptImage, setReceiptImage] = useState(null);
  const [transactionType, setTransactionType] = useState("Chi tiêu");

  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();

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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setReceiptImage(uri);
    } else {
      alert("Vui lòng chọn ảnh");
    }
  };

  const handleAddExpense = async () => {
    if (!content || !amount) {
      Alert.alert("Error", "Vui lòng nhập nội dung và số tiền");
      return;
    }

    const transactionAmount =
      transactionType === "Chi tiêu" ? -Math.abs(amount) : Math.abs(amount);

    const payload = {
      recipe_name: content,
      status: "Pending",
      to_vendor: "Unknown",
      category_id: categories.indexOf(category) + 1,
      image_url:
        "https://th.bing.com/th/id/OIP.WtLSoVwahL411IVgkZ_PIQHaHa?rs=1&pid=ImgDetMain",
      amount: transactionAmount,
    };

    console.log("Request payload:", JSON.stringify(payload));

    try {
      const response = await axios.post(
        `${BASE_URL}/recipes?email=${email}`,
        payload
      );

      if (response.status === 201) {
        const newTransaction = {
          id: response.data.recipe_id,
          owner_id: response.data.owner.user_id,
          avatar_url: response.data.owner.avatar_url,
          recipe_name: response.data.recipe_name,
          status: response.data.status,
          to_vendor: response.data.to_vendor,
          category_id: response.data.category_id,
          image_url: receiptImage,
          amount: response.data.amount,
          title: response.data.recipe_name,
          date: new Date().toLocaleDateString(),
          amountString:
            response.data.amount > 0
              ? `+ ${response.data.amount.toLocaleString()} đ`
              : `- ${Math.abs(response.data.amount).toLocaleString()} đ`,
          amountStyle:
            response.data.amount > 0 ? "text-green-500" : "text-red-500",
          logo: response.data.image_url,
        };

        dispatch(addTransaction(newTransaction));
        Alert.alert("Success", "Giao dịch đã được thêm thành công!");
        navigation.navigate("HomePage");
      } else {
        Alert.alert("Error", "Failed to add transaction");
      }
    } catch (error) {
      console.error("Add transaction error:", error);
      Alert.alert("Error", "Failed to add transaction");
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-6 pt-12`}>
      <View style={tw`flex-row justify-between mb-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={tw`text-teal-500 text-lg`}>← Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddExpense}>
          <Text style={tw`text-lg font-bold text-gray-900`}>
            Thêm giao dịch
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Nội dung</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="Nhập nội dung"
          value={content}
          onChangeText={setContent}
        />
      </View>
      <View style={tw`mb-4`}>
        <View style={tw`flex-row justify-around`}>
          <TouchableOpacity
            style={tw`p-2 px-6 rounded ${
              transactionType === "Chi tiêu" ? "bg-teal-500" : "bg-gray-200"
            }`}
            onPress={() => setTransactionType("Chi tiêu")}
          >
            <Text
              style={tw`${
                transactionType === "Chi tiêu" ? "text-white" : "text-black"
              }`}
            >
              Chi tiêu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`p-2 px-6 rounded ${
              transactionType === "Thu nhập" ? "bg-teal-500" : "bg-gray-200"
            }`}
            onPress={() => setTransactionType("Thu nhập")}
          >
            <Text
              style={tw`${
                transactionType === "Thu nhập" ? "text-white" : "text-black"
              }`}
            >
              Thu nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Danh mục</Text>
        <View style={tw`border-b border-gray-300`}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            {categories.map((cat) => (
              <Picker.Item key={cat} label={cat} value={cat} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Số tiền</Text>
        <TextInput
          style={tw`border-b border-gray-300 py-2 text-gray-900`}
          placeholder="Nhập số tiền"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Ngày</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            style={tw`border-b border-gray-300 py-2 text-gray-900`}
            placeholder="Chọn ngày"
            value={date.toLocaleDateString()}
            editable={false}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600`}>Hóa đơn</Text>
        <TouchableOpacity
          style={tw`border border-gray-300 p-4 rounded-lg flex-row items-center justify-center`}
          onPress={pickImage}
        >
          {receiptImage ? (
            <Image source={{ uri: receiptImage }} style={tw`w-60 h-40`} />
          ) : (
            <>
              <Ionicons name="add-circle-outline" size={24} color="gray" />
              <Text style={tw`ml-2 text-gray-500`}>Thêm hóa đơn</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`bg-teal-500 rounded-full py-3`}
        onPress={handleAddExpense}
      >
        <Text style={tw`text-center text-white text-lg`}>Thêm giao dịch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpenseScreen;
