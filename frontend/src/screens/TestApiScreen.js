// src/screens/TestApiScreen.js
import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import tw from "twrnc";

const TestApiScreen = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const testApiCall = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://192.168.1.112:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test6@gmail.com",
          password: "passwords123",
        }),
        timeout: 20000, // 20 seconds timeout
      });

      console.log("Response:", res); // Log the raw response

      const data = await res.json();
      console.log("Data:", data); // Log the parsed data

      if (res.ok) {
        setResponse(data);
        Alert.alert("Success", "API call was successful");
      } else {
        Alert.alert("Error", data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error details:", error); // Log the error for debugging
      if (error.response) {
        console.error("Error response:", error.response.data); // Log the response data
        Alert.alert(
          "Error",
          `Server responded with status: ${error.response.status}`
        );
      } else if (error.request) {
        console.error("Error request:", error.request); // Log the request details
        Alert.alert(
          "Error",
          "No response received from server. Check your network."
        );
      } else {
        console.error("Error message:", error.message); // Log the error message
        Alert.alert("Error", `Something went wrong! ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl mb-4`}>Test API Screen</Text>
      <Button title="Test API Call" onPress={testApiCall} />
      {loading && <Text style={tw`mt-4`}>Loading...</Text>}
      {response && (
        <View style={tw`mt-4`}>
          <Text>Response:</Text>
          <Text>{JSON.stringify(response, null, 2)}</Text>
        </View>
      )}
    </View>
  );
};

export default TestApiScreen;
