// src/screens/Onboarding/OnboardingScreen2.js
import React from "react";
import { View, Text, Button } from "react-native";

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Onboarding Screen 2</Text>
      <Button title="Next" onPress={() => navigation.navigate("Onboarding3")} />
    </View>
  );
};

export default OnboardingScreen2;

