// src/screens/Onboarding/OnboardingScreen1.js
import React from "react";
import { View, Text, Button } from "react-native";

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to ySpend! This is Onboarding Screen 1</Text>
      <Button title="Next" onPress={() => navigation.navigate("Onboarding2")} />
    </View>
  );
};

export default OnboardingScreen1;
