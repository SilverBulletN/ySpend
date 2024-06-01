import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const FilterModal = ({ visible, onClose, onApply }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    time: "Tất cả",
    type: "Tất cả",
    category: "Tất cả",
    amount: "Tất cả",
  });

  const applyFilters = () => {
    onApply(selectedFilters);
    onClose();
  };

  const resetFilters = () => {
    setSelectedFilters({
      time: "Tất cả",
      type: "Tất cả",
      category: "Tất cả",
      amount: "Tất cả",
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <ScrollView style={tw`flex-1 bg-gray-50 p-6 pt-10`}>
          <View style={tw`flex-row items-center justify-center mb-4 relative`}>
            <TouchableOpacity onPress={onClose}
              style={tw`absolute left-0 items-center`}
            >
              <Ionicons name="arrow-back" size={24} color="teal" />
            </TouchableOpacity>
            <Text style={tw`text-teal-500 text-xl`}>Bộ lọc</Text>
          </View>

          <Text style={tw`text-xl font-bold mb-4`}>Theo thời gian</Text>
          <View style={tw`flex-row flex-wrap mb-6`}>
            {["Tất cả", "Ngày", "Tuần", "Tháng", "Năm"].map((option) => (
              <TouchableOpacity
                key={option}
                style={tw`p-2 m-1 rounded-lg ${
                  selectedFilters.time === option ? "bg-teal-500" : "bg-white"
                } border`}
                onPress={() =>
                  setSelectedFilters({ ...selectedFilters, time: option })
                }
              >
                <Text
                  style={tw`${
                    selectedFilters.time === option
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={tw`text-xl font-bold mb-4`}>Theo loại</Text>
          <View style={tw`flex-row flex-wrap mb-6`}>
            {["Tất cả", "Thu nhập", "Chi tiêu"].map((option) => (
              <TouchableOpacity
                key={option}
                style={tw`p-2 m-1 rounded-lg ${
                  selectedFilters.type === option ? "bg-teal-500" : "bg-white"
                } border`}
                onPress={() =>
                  setSelectedFilters({ ...selectedFilters, type: option })
                }
              >
                <Text
                  style={tw`${
                    selectedFilters.type === option
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={tw`text-xl font-bold mb-4`}>Theo danh mục</Text>
          <View style={tw`flex-row flex-wrap mb-6`}>
            {[
              "Tất cả",
              "Ăn uống",
              "Mua sắm",
              "Giải trí",
              "Giáo dục",
              "Y tế",
              "Tiết kiệm",
              "Đầu tư",
            ].map((option) => (
              <TouchableOpacity
                key={option}
                style={tw`p-2 m-1 rounded-lg ${
                  selectedFilters.category === option
                    ? "bg-teal-500"
                    : "bg-white"
                } border`}
                onPress={() =>
                  setSelectedFilters({ ...selectedFilters, category: option })
                }
              >
                <Text
                  style={tw`${
                    selectedFilters.category === option
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={tw`text-xl font-bold mb-4`}>Theo số tiền</Text>
          <View style={tw`flex-row flex-wrap mb-6`}>
            {[
              "Tất cả",
              "0 - 1 triệu",
              "1 - 5 triệu",
              "5 - 10 triệu",
              "10 - 50 triệu",
              "> 50 triệu",
            ].map((option) => (
              <TouchableOpacity
                key={option}
                style={tw`p-2 m-1 rounded-lg ${
                  selectedFilters.amount === option ? "bg-teal-500" : "bg-white"
                } border`}
                onPress={() =>
                  setSelectedFilters({ ...selectedFilters, amount: option })
                }
              >
                <Text
                  style={tw`${
                    selectedFilters.amount === option
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              onPress={resetFilters}
              style={tw`bg-gray-200 p-3 rounded-lg`}
            >
              <Text style={tw`text-gray-700`}>Xoá bộ lọc</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={applyFilters}
              style={tw`bg-teal-500 p-3 rounded-lg`}
            >
              <Text style={tw`text-white`}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default FilterModal;
