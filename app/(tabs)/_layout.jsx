import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{headerShown: false}}
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Explore" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
