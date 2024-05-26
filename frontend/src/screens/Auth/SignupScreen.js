// src/screens/Auth/SignUpScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SignUpScreen;
