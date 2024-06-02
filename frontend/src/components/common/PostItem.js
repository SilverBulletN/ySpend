import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";

const PostItem = ({ post }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <View style={tw`bg-white p-4 mb-4 rounded-lg shadow-lg`}>
      <View style={tw`flex-row items-center mb-2`}>
        {imageError ? (
          <Ionicons name="person-circle-outline" size={40} color="gray" />
        ) : (
          <Image
            source={{ uri: post.user.avatar }}
            style={tw`w-10 h-10 rounded-full`}
            onError={() => setImageError(true)}
          />
        )}
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
      <View style={tw`flex-row justify-between`}>
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
  );
};

export default PostItem;
