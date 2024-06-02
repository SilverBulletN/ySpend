import React, { useState, useMemo } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostItem from "../../components/common/PostItem";
import DefaultLayout from "../../components/layout/DefaultLayout";

const posts = [
  {
    id: "1",
    user: {
      name: "Minh Nguyen Tuan",
      avatar: "https://your-avatar-url.com/avatar1.png",
    },
    time: "08:39 am",
    content:
      "Thay vì ăn một ngày 3 bữa, mỗi bữa 50k, hãy ăn một ngày 4 bữa, mỗi bữa 30k. Như vậy vừa giúp tiết kiệm, vừa giúp giảm cân",
    image:
      "https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain",
    likes: 1964,
    comments: 135,
    type: "Post",
  },
  {
    id: "2",
    user: {
      name: "Minh Nguyen Tuan",
      avatar: "https://your-avatar-url.com/avatar2.png",
    },
    time: "08:39 am",
    content:
      "Thay vì ăn một ngày 3 bữa, một bữa 50k, hãy ăn một ngày 4 bữa, một bữa 30k. Như với vừa giúp tiết kiệm, vừa giúp giảm cân",
    image:
      "https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain",
    likes: 1964,
    comments: 135,
    type: "Photo",
  },
  {
    id: "3",
    user: {
      name: "Minh Nguyen Tuan",
      avatar: "https://your-avatar-url.com/avatar3.png",
    },
    time: "08:39 am",
    content:
      "Thay vì ăn một ngày 3 bữa, một bữa 50k, hãy ăn một ngày 4 bữa, một bữa 30k. Như với vừa giúp tiết kiệm, vừa giúp giảm cân",
    image:
      "https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain",
    likes: 1964,
    comments: 135,
    type: "Reel",
  },
  {
    id: "4",
    user: {
      name: "Minh Nguyen Tuan",
      avatar: "https://your-avatar-url.com/avatar4.png",
    },
    time: "08:39 am",
    content:
      "Thay vì ăn một ngày 3 bữa, một bữa 50k, hãy ăn một ngày 4 bữa, một bữa 30k. Như với vừa giúp tiết kiệm, vừa giúp giảm cân",
    image:
      "https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain",
    likes: 1964,
    comments: 135,
    type: "Post",
  },
];

const CommunityProfile = ({ route, navigation }) => {
  const { user } = route.params;
  const [filterType, setFilterType] = useState("Post");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (filterType === "Tất cả") return true;
      return post.type === filterType;
    });
  }, [filterType]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostDetail", { post: item })}
    >
      <PostItem post={item} navigation={navigation} />
    </TouchableOpacity>
  );

  return (
    <DefaultLayout isFlatList={true} hasBackground={false}>
      <View style={tw`flex-1 bg-white`}>
        <View
          style={tw`flex-row items-center justify-between p-4 border-b border-gray-200`}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-lg font-bold`}>Hồ sơ người dùng</Text>
          <Ionicons name="settings-outline" size={24} color="black" />
        </View>
        <View style={tw`items-center p-4`}>
          <Image
            source={{ uri: user.avatar }}
            style={tw`w-20 h-20 rounded-full`}
          />
          <Text style={tw`text-lg font-bold mt-2`}>{user.name}</Text>
          <Text style={tw`text-gray-500`}>{user.email}</Text>
          <View style={tw`flex-row mt-4`}>
            <View style={tw`items-center mx-4`}>
              <Text style={tw`font-bold`}>315</Text>
              <Text>Bài đăng</Text>
            </View>
            <View style={tw`items-center mx-4`}>
              <Text style={tw`font-bold`}>100</Text>
              <Text>Follower</Text>
            </View>
            <View style={tw`items-center mx-4`}>
              <Text style={tw`font-bold`}>200</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <View style={tw`flex-row justify-around p-4`}>
          <TouchableOpacity
            onPress={() => setFilterType("Post")}
            style={tw`flex-1 items-center ${
              filterType === "Post" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            <Ionicons
              name="list-outline"
              size={24}
              color={filterType === "Post" ? "teal" : "gray"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilterType("Photo")}
            style={tw`flex-1 items-center ${
              filterType === "Photo" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            <Ionicons
              name="images-outline"
              size={24}
              color={filterType === "Photo" ? "teal" : "gray"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilterType("Reel")}
            style={tw`flex-1 items-center ${
              filterType === "Reel" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            <Ionicons
              name="videocam-outline"
              size={24}
              color={filterType === "Reel" ? "teal" : "gray"}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={tw`p-4`}
        />
      </View>
    </DefaultLayout>
  );
};

export default CommunityProfile;
