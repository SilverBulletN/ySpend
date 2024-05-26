import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go to Sign up" onPress={() => navigation.navigate("SignUp")}/>
    </View>
  );
};

export default LoginScreen;
