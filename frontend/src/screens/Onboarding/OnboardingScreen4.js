// src/screens/Onboarding/OnboardingScreen4.js
import React from "react";
import { View, Text, Button } from "react-native";

const OnboardingScreen4 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Onboarding Screen 4</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

export default OnboardingScreen4;
