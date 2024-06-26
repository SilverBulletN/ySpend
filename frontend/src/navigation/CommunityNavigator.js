import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CommunityFeed from "../screens/Community/CommunityFeed";
import PostDetail from "../screens/Community/PostDetail";
import CommunityProfile from "../screens/Community/CommunityProfile";

const CommunityStack = createStackNavigator();

const CommunityNavigator = () => {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen
        name="CommunityFeed"
        component={CommunityFeed}
        options={{ headerShown: false }}
      />
      <CommunityStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ headerShown: false }}
      />
      <CommunityStack.Screen
        name="CommunityProfile"
        component={CommunityProfile}
        options={{ headerShown: false }}
      />
    </CommunityStack.Navigator>
  );
};

export default CommunityNavigator;
