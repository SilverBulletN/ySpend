import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Modal,
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
  const [isModalVisible, setModalVisible] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("PostDetail", { post: item })}
    >
      <PostItem post={item} navigation={navigation} />
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
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()} // Ensure the key is unique
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
                onFocus={() => setModalVisible(true)}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
        >
          <View style={tw`bg-white p-6 rounded-lg w-4/5`}>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={30} color="black" />
              </TouchableOpacity>
              <Text style={tw`text-lg font-bold`}>Create Post</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={tw`text-teal-500`}>Post</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row items-center my-4`}>
              <Image
                source={{ uri: user.profileImage }}
                style={tw`w-12 h-12 rounded-full`}
              />
              <Text style={tw`ml-4 text-lg font-bold`}>
                {user.firstName} {user.lastName}
              </Text>
            </View>
            <TextInput
              style={tw`border border-gray-200 rounded p-2`}
              placeholder="What do you think?"
              value={newPostContent}
              onChangeText={setNewPostContent}
              multiline
            />
          </View>
        </View>
      </Modal>
    </DefaultLayout>
  );
};

export default CommunityFeed;
