import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
        },

        headerTintColor: "#333",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
