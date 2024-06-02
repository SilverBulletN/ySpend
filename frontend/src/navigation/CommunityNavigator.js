import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CommunityFeed from "../screens/Community/CommunityFeed";

const Stack = createStackNavigator();

const CommunityNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CommunityFeed"
        component={CommunityFeed}
        options={{ headerShown: false }}
      />
      {/* Add more screens related to the community as needed */}
    </Stack.Navigator>
  );
};

export default CommunityNavigator;
