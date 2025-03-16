import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

const ProgressBar = ({ progress, goal }:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Progress: {Math.round(progress * 100)}% ({goal} workouts this week)
      </Text>
      <Progress.Bar
        progress={progress} // Set progress as a decimal (e.g., 0.5 for 50%)
        width={null}
        height={12}
        color="#4caf50" // Green color
        borderRadius={10}
        unfilledColor="#e0e0e0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
});

export default ProgressBar;
