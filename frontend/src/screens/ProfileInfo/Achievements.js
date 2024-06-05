import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import DefaultLayout from "../../components/layout/DefaultLayout";

const achievements = [
  { id: "1", title: "Vua ăn sáng", date: "02/12/2024", achieved: true },
  { id: "2", title: "Vua ăn sáng", date: "", achieved: false },
  { id: "3", title: "Vua ăn sáng", date: "", achieved: false },
  { id: "4", title: "Vua ăn sáng", date: "", achieved: false },
  { id: "5", title: "Vua ăn sáng", date: "", achieved: false },
];

const Achievements = ({ navigation }) => {
  const [filter, setFilter] = useState("Tất cả");

  const filteredAchievements = achievements.filter((achievement) => {
    if (filter === "Tất cả") return true;
    if (filter === "Đạt được") return achievement.achieved;
    return false;
  });

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.achievementCard,
        item.achieved ? styles.achieved : styles.notAchieved,
      ]}
    >
      <Image
        source={require("../../../assets/icons/achievement.png")}
        style={styles.achievementImage}
      />
      <Text
        style={tw`text-lg font-bold ${
          item.achieved ? "text-black" : "text-gray-400"
        }`}
      >
        {item.title}
      </Text>
      {item.achieved && (
        <Text style={tw`text-gray-500`}>Nhận được vào {item.date}</Text>
      )}
    </View>
  );

  return (
    <DefaultLayout isFlatList={true} hasFooter={false} hasBackground={true}>
      <View style={tw`flex-1 pt-6`}>
        <View
          style={tw`flex-row items-center justify-between p-4 border-b border-gray-200`}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={tw`text-lg font-bold text-white`}>Thành tựu</Text>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
        <View style={tw`flex-row justify-around p-4 bg-white`}>
          <TouchableOpacity
            onPress={() => setFilter("Tất cả")}
            style={tw`flex-1 items-center ${
              filter === "Tất cả" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            <Text
              style={tw`${
                filter === "Tất cả" ? "text-teal-500" : "text-gray-500"
              }`}
            >
              Tất cả (100)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilter("Đạt được")}
            style={tw`flex-1 items-center ${
              filter === "Đạt được" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            <Text
              style={tw`${
                filter === "Đạt được" ? "text-teal-500" : "text-gray-500"
              }`}
            >
              Đạt được (50)
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={tw`bg-white`}
          data={filteredAchievements}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={tw`justify-between px-4`}
          contentContainerStyle={tw`p-4`}
        />
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  achievementCard: {
    width: "48%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  achieved: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  notAchieved: {
    backgroundColor: "#f0f0f0",
  },
  achievementImage: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
});

export default Achievements;
