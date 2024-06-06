import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/ProfileInfo/Profile";
// import PersonalProfile from "../screens/ProfileInfo/PersonalProfile";
import Achievements from "../screens/ProfileInfo/Achievements";
import Settings from "../screens/ProfileInfo/Settings";
import AccountLinking from "../screens/ProfileInfo/AccountLinking";
import Policy from "../screens/ProfileInfo/Policy";
import AboutUs from "../screens/ProfileInfo/AboutUs";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="PersonalProfile" component={PersonalProfile} /> */}
      <Stack.Screen name="Achievements" component={Achievements} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AccountLinking" component={AccountLinking} />
      <Stack.Screen name="Policy" component={Policy} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
