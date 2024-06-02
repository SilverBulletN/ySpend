import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { useSelector } from "react-redux";

const comments = [
  {
    id: "1",
    user: {
      name: "Hao Pham",
      avatar: "https://your-avatar-url.com/avatar1.png",
    },
    time: "1 giờ trước",
    content: "Hay đấy!",
  },
  {
    id: "2",
    user: {
      name: "Nguyen Hoang",
      avatar: "https://your-avatar-url.com/avatar2.png",
    },
    time: "2 giờ trước",
    content: "Rất hữu ích",
  },
  {
    id: "3",
    user: {
      name: "Nguyen Hoang",
      avatar: "https://your-avatar-url.com/avatar3.png",
    },
    time: "1 ngày trước",
    content: "Tôi đã áp dụng và thành công, mọi người thử xem",
  },
];

const PostDetail = ({ route, navigation }) => {
  const { post } = route.params;
  const user = useSelector((state) => state.auth);

  const renderItem = ({ item }) => (
    <View style={tw`flex-row items-start mb-4`}>
      <Image
        source={{ uri: item.user.avatar }}
        style={tw`w-8 h-8 rounded-full`}
      />
      {/* <Ionicons name="person-circle-outline" size={40} color="gray" /> */}
      <View style={tw`ml-2 flex-1`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`font-bold`}>{item.user.name}</Text>
          <Text style={tw`text-gray-500 text-xs`}>{item.time}</Text>
        </View>
        <Text>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <DefaultLayout isFlatList={true} hasBackground={false}>
      <View style={tw`flex-1 bg-white mb-1`}>
        <View
          style={tw`flex-row items-center justify-between p-4 border-b border-gray-200`}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-lg font-bold`}>
            Bài viết của {post.user.name}
          </Text>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </View>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View style={tw`p-4`}>
              <View style={tw`flex-row items-center mb-2`}>
                <Image
                  source={{ uri: post.user.avatar }}
                //   source={require("../../../assets/icons/defaultavatar.png")}
                  style={tw`w-10 h-10 rounded-full`}
                />
                <View style={tw`ml-2`}>
                  <Text style={tw`font-bold`}>{post.user.name}</Text>
                  <Text style={tw`text-gray-500`}>{post.time}</Text>
                </View>
              </View>
              <Text style={tw`mb-2`}>{post.content}</Text>
              {post.image && (
                <Image
                  source={{ uri: post.image }}
                  style={tw`w-full h-40 rounded-lg mb-2`}
                />
              )}
              <View style={tw`flex-row justify-between mb-4`}>
                <View style={tw`flex-row items-center`}>
                  <Ionicons name="heart-outline" size={20} color="gray" />
                  <Text style={tw`ml-1`}>{post.likes}</Text>
                </View>
                <View style={tw`flex-row items-center`}>
                  <Ionicons name="chatbubble-outline" size={20} color="gray" />
                  <Text style={tw`ml-1`}>{post.comments}</Text>
                </View>
              </View>
            </View>
          }
          renderItem={renderItem}
          contentContainerStyle={tw`p-4`}
        />
        <View style={tw`flex-row items-center p-4 border-t border-gray-200`}>
          {user.profileImage ? (
            <Image
              source={{ uri: user.profileImage }}
              style={tw`w-12 h-12 rounded-full`}
            />
          ) : (
            <Ionicons name="person-circle-outline" size={40} color="gray" />
          )}
          <TextInput
            style={tw`ml-2 flex-1 border border-gray-200 rounded p-2`}
            placeholder="Bình luận của bạn"
          />
        </View>
      </View>
    </DefaultLayout>
  );
};

export default PostDetail;
