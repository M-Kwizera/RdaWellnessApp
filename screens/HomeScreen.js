
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Rwanda Wellness App</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#ff4757', padding: 10, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
