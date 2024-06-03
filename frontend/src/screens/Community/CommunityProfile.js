import React, { useState, useMemo } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostItem from "../../components/common/PostItem";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { useSelector } from "react-redux";

const CommunityProfile = ({ route, navigation }) => {
  const { author_id } = route.params;
  const [filterType, setFilterType] = useState("Post");

  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.user_id === author_id);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      return post.author_id === author_id;
      // if (post.author_id !== author_id) return false;

      // if (filterType === "Tất cả") return true;
      // return post.type === filterType;
    });
  }, [posts, author_id]);

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
            source={{ uri: user.avatar_url }}
            style={tw`w-20 h-20 rounded-full`}
          />
          <Text
            style={tw`text-lg font-bold mt-2`}
          >{`${user.first_name} ${user.last_name}`}</Text>
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
          keyExtractor={(item) => item.post_id}
          renderItem={renderItem}
          contentContainerStyle={tw`p-4`}
        />
      </View>
    </DefaultLayout>
  );
};

export default CommunityProfile;
