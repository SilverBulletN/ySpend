// src/screens/Dashboard/HomePage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Go to History" onPress={() => navigation.navigate('History')} />
      <Button title="Go to Plan" onPress={() => navigation.navigate('Plan')} />
      <Button title="Go to Notifications" onPress={() => navigation.navigate('Notifications')} />
    </View>
  );
};

export default HomePage;
