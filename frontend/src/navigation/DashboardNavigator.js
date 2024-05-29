// src/navigation/DashboardNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/Dashboard/HomePage";
import History from "../screens/Dashboard/History";
import Plan from "../screens/Dashboard/Plan";
import Notifications from "../screens/Dashboard/Notifications";

const DashboardStack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: true }}
    >
      <DashboardStack.Screen name="HomePage" component={HomePage} />
      <DashboardStack.Screen name="History" component={History} />
      <DashboardStack.Screen name="Plan" component={Plan} />
      <DashboardStack.Screen name="Notifications" component={Notifications} />
    </DashboardStack.Navigator>
  );
};

export default DashboardNavigator;
