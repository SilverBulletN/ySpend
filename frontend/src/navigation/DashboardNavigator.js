// src/navigation/DashboardNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/Dashboard/HomePage";
import History from "../screens/Dashboard/History";
import Plan from "../screens/Dashboard/Plan";
import Notification from "../screens/Dashboard/Notification";
import NotificationSetting from "../screens/Dashboard/NotificationSetting";
import TransactionDetail from "../screens/Dashboard/TransactionDetail";
import PlanDetail from "../screens/Dashboard/PlanDetail";

const DashboardStack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}
    >
      <DashboardStack.Screen name="HomePage" component={HomePage} />
      <DashboardStack.Screen name="TransactionDetail" component={TransactionDetail} />
      <DashboardStack.Screen name="History" component={History} />
      <DashboardStack.Screen name="Plan" component={Plan} />
      <DashboardStack.Screen name="PlanDetail" component={PlanDetail} />
      <DashboardStack.Screen name="Notification" component={Notification} />
      <DashboardStack.Screen
        name="NotificationSetting"
        component={NotificationSetting}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardNavigator;
