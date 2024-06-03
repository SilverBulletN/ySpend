import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../store/slices/commentsSlice";
import PostItem from "../../components/common/PostItem";

const PostDetail = ({ route, navigation }) => {
  const { post } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const comments = useSelector((state) => state.comments[post.post_id]) || [];
  const users = useSelector((state) => state.users);
  const existingCommentIds = comments.map((comment) => comment.cmt_date);

  useEffect(() => {
    dispatch(fetchComments({ postId: post.post_id, existingCommentIds }));
  }, [dispatch, post.post_id]);

  const renderItem = ({ item }) => {
    const commentUser = users.find((u) => u.user_id === item.user_id);
    return (
      <View style={tw`flex-row items-start mb-4 p-2`}>
        {commentUser?.avatar_url ? (
          <Image
            source={{ uri: commentUser.avatar_url }}
            style={tw`w-8 h-8 rounded-full`}
          />
        ) : (
          <Ionicons name="person-circle-outline" size={32} color="gray" />
        )}
        <View style={tw`ml-2 flex-1`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`font-bold`}>
              {commentUser
                ? `${commentUser.first_name} ${commentUser.last_name}`
                : "Unknown"}
            </Text>
            <Text style={tw`text-gray-500 text-xs`}>{item.cmt_date}</Text>
          </View>
          <Text>{item.comment}</Text>
        </View>
      </View>
    );
  };

  const postUser = users.find((u) => u.user_id === post.author_id);

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
            Bài viết của{" "}
            {postUser
              ? `${postUser.first_name} ${postUser.last_name}`
              : "Unknown"}
          </Text>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </View>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.post_id + "_" + item.user_id} // Ensure unique key
          ListHeaderComponent={<PostItem post={post} navigation={navigation} />}
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
