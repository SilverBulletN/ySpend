// src/screens/Auth/SignUpScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen test2</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default SignUpScreen;
