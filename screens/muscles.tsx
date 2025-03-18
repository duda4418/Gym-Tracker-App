import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MusclesScreen({navigation}:any) {

  return (
<SafeAreaView style={styles.container}>
      {/* Navigation Header with Extra Space */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="#1A2C51" size={28} />
        </TouchableOpacity>
        <Text style={styles.headerText}>MUSCLES</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressItem}>
          <View style={styles.progressDot} />
          <Text style={styles.inactiveLabel}>Splits</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <Text style={styles.activeLabel}>Muscles</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          <View style={styles.progressDot} />
          <Text style={styles.inactiveLabel}>Exercises</Text>
        </View>
      </View>
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
      marginBottom: 15, 
    },
    progressItem: {
      alignItems: "center", 
      justifyContent: "center",
    },
    progressDot: {
      width: 16,  
      height: 16,
      borderRadius: 8,
      backgroundColor: "#AAB2C8",
      marginBottom: 5, // Space between dot and text
    },
    activeDot: {
      backgroundColor: "#1A2C51",
    },
    progressLine: {
      width: "100%",  
      height: 3,  
      marginBottom: 25,
      flex: 1,
      backgroundColor: "#AAB2C8",
    },
    inactiveLabel: {
      color: "#AAB2C8",
      fontSize: 14,
      textAlign: "center",
    },
    activeLabel: {
      color: "#1A2C51",
      fontWeight: "bold",
      fontSize: 14,
      textAlign: "center",
    },
    

  });
  