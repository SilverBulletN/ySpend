// src/screens/Onboarding/OnboardingScreen3.js
import React from "react";
import { View, Text, Button } from "react-native";

const OnboardingScreen3 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Onboarding Screen 3</Text>
      <Button title="Next" onPress={() => navigation.navigate("Onboarding4")} />
    </View>
  );
};

export default OnboardingScreen3;
