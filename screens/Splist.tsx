import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import SplitButton from "../components/SplitButton";
import ProgressBar from "../components/ProgressBar";


const splits = [
    { id: "1", label: "Push", subLabel: "Chest / Shoulders / Triceps" },
    { id: "2", label: "Pull", subLabel: "Back / Biceps / Rear delts" },
    { id: "3", label: "Legs", subLabel: "Legs / Abs" },
    { id: "4", label: "Arms", subLabel: "Shoulders / Biceps / Triceps" },
    { id: "5", label: "Arnold", subLabel: "Back / Chest / Rear delts" },
  ];

export default function SplitsScreen() {

    const progress = 0.6; // Example: 60% progress
    const weeklyGoal = 5; // Example goal: 5 workouts per week
  
    return (
      <View style={styles.container}>
        <ProgressBar progress={progress} goal={weeklyGoal} />
        <FlatList
          data={splits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SplitButton
              label={item.label}
              subLabel={item.subLabel}
              onPress={() => console.log(item.label)}
            />
          )}
        />
        <Button title="New Split" onPress={() => console.log("Add new split")} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });