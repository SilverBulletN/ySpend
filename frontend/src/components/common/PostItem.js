import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

const PostItem = ({ post, navigation }) => {
  const user = useSelector((state) =>
    state.users.find((u) => u.user_id === post.author_id)
  );

  // State to manage likes and liked status
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.total_likes);

  const handleLikePress = () => {
    setLiked(!liked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <View style={tw`bg-white p-4 mb-4 rounded-lg`}>
      <TouchableOpacity
        style={tw`flex-row items-center mb-2`}
        onPress={() => {
          console.log("Navigate to Community Profile: ", post.author_id);
          navigation.navigate("CommunityProfile", {
            author_id: post.author_id,
          });
        }}
      >
        {user?.avatar_url ? (
          <Image
            source={{ uri: user.avatar_url }}
            style={tw`w-10 h-10 rounded-full`}
          />
        ) : (
          <Ionicons name="person-circle-outline" size={40} color="gray" />
        )}
        <View style={tw`ml-2`}>
          <Text style={tw`font-bold`}>
            {user ? `${user.first_name} ${user.last_name}` : "Unknown User"}
          </Text>
          <Text style={tw`text-gray-500`}>
            {new Date(post.publish_date).toLocaleTimeString()}
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={tw`mb-2`}>{post.content}</Text>
      {post.image && (
        <Image
          source={{ uri: post.image }}
          style={tw`w-full h-40 rounded-lg mb-2`}
        />
      )}
      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity
          style={tw`flex-row items-center`}
          onPress={handleLikePress}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={20}
            color={liked ? "red" : "gray"}
          />
          <Text style={tw`ml-1`}>{likeCount}</Text>
        </TouchableOpacity>
        <View style={tw`flex-row items-center`}>
          <Ionicons name="chatbubble-outline" size={20} color="gray" />
          <Text style={tw`ml-1`}>{post.total_cmts}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
