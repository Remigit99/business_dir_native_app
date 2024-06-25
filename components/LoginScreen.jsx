import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View>
      <Text>Welcome To The</Text>
      <Text>Login Screen</Text>
      <View>
        <TouchableOpacity>
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
