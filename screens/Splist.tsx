import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const splits = [
  { title: "Push", muscles: "Chest / Shoulders / Triceps" },
  { title: "Pull", muscles: "Back / Biceps / Rear delts" },
  { title: "Legs", muscles: "Legs / Abs" },
  { title: "Arms", muscles: "Shoulders / Biceps / Triceps" },
  { title: "Arnold", muscles: "Back / Chest / Rear delts" },
];

export default function SplitsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Header with Extra Space */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="#1A2C51" size={28} />
        </TouchableOpacity>
        <Text style={styles.headerText}>SPLITS</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressDot, styles.activeDot]} />
        <View style={styles.progressLine} />
        <View style={styles.progressDot} />
        <View style={styles.progressLine} />
        <View style={styles.progressDot} />
      </View>

      <View style={styles.progressLabels}>
        <Text style={styles.activeLabel}>Splits</Text>
        <Text style={styles.inactiveLabel}>Muscles</Text>
        <Text style={styles.inactiveLabel}>Exercises</Text>
      </View>

      {/* Split Options */}
      <ScrollView contentContainerStyle={styles.splitList}>
        {splits.map((split, index) => (
          <TouchableOpacity key={index} style={styles.splitCard}>
            <View>
              <Text style={styles.splitTitle}>{split.title}</Text>
              <Text style={styles.splitSubtitle}>{split.muscles}</Text>
            </View>
            <ArrowRight color="white" size={20} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* New Split Button */}
      <TouchableOpacity style={styles.newSplitButton}>
        <Text style={styles.newSplitText}>New split</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F7",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 40 : 20, // Extra top padding for Android
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30, // More space at the top
  },
  headerText: {
    fontSize: 28, // Increased title size
    fontWeight: "bold",
    marginLeft: 10,
    color: "#1A2C51",
  },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15, // Increased spacing
  },
  progressDot: {
    width: 16,  // Increased size
    height: 16,
    borderRadius: 8,
    backgroundColor: "#AAB2C8",
  },
  activeDot: {
    backgroundColor: "#1A2C51",
  },
  progressLine: {
    width: 50,  // Increased width for better spacing
    height: 4,  // Increased thickness
    backgroundColor: "#AAB2C8",
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  activeLabel: {
    color: "#1A2C51",
    fontWeight: "bold",
  },
  inactiveLabel: {
    color: "#AAB2C8",
  },
  splitList: {
    flexGrow: 1,
  },
  splitCard: {
    flexDirection: "row",
    backgroundColor: "#AAB2C8",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  splitTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A2C51",
  },
  splitSubtitle: {
    color: "#444",
    fontSize: 14,
  },
  newSplitButton: {
    backgroundColor: "#1A2C51",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  newSplitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
