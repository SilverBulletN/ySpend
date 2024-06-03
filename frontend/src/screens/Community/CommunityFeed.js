import React, { useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import DefaultLayout from "../../components/layout/DefaultLayout";
import PostItem from "../../components/common/PostItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/slices/postsSlice";
import { fetchUsers } from "../../store/slices/usersSlice";

const CommunityFeed = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()); // Fetch posts when the component is mounted
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => navigation.navigate("PostDetail", { post: item })}
    >
      <PostItem post={item} navigation={navigation} key={item.id} />
    </TouchableOpacity>
  );

  return (
    <DefaultLayout isFlatList={true} hasBackground={false}>
      <View style={tw`flex-row justify-between items-center px-4 pb-3 pt-5`}>
        <View style={tw`flex-row items-center`}>
          <Image
            source={require("../../../assets/icons/logo.png")}
            style={tw`w-8 h-8`}
          />
          <Text style={tw`text-lg font-bold text-teal-500 ml-2`}>
            ySpend Community
          </Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <TouchableOpacity style={tw`mr-4`}>
            <Ionicons name="search" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={tw`bg-white p-4 mb-4 rounded-lg shadow-lg`}>
            <View style={tw`flex-row items-center mb-2`}>
              {user.profileImage ? (
                <Image
                  source={{ uri: user.profileImage }}
                  style={tw`w-12 h-12 rounded-full`}
                />
              ) : (
                <Ionicons name="person-circle-outline" size={40} color="gray" />
              )}
              <TextInput
                style={tw`ml-2 flex-1 border border-gray-200 rounded p-2 h-full`}
                placeholder="Bạn có ý tưởng gì hay?"
              />
            </View>
            <View style={tw`flex-row justify-around`}>
              <View style={tw`flex-row items-center`}>
                <Ionicons name="image-outline" size={20} color="gray" />
                <Text style={tw`ml-1`}>Image</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <Ionicons name="videocam-outline" size={20} color="gray" />
                <Text style={tw`ml-1`}>Videos</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <Ionicons name="attach-outline" size={20} color="gray" />
                <Text style={tw`ml-1`}>Attach</Text>
              </View>
            </View>
          </View>
        }
        renderItem={renderItem}
        contentContainerStyle={tw`p-4`}
      />
    </DefaultLayout>
  );
};

export default CommunityFeed;
