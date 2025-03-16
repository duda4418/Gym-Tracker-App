import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For the arrow icon

const SplitButton = ({ label, subLabel, onPress }:any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.subLabel}>{subLabel}</Text>
      </View>
      <FontAwesome name="angle-right" size={24} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "#f0f4f8",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subLabel: {
    fontSize: 14,
    color: "#666",
  },
});

export default SplitButton;
