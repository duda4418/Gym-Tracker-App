import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplitCard from "../components/SplitCard";
import MuscleCard from "../components/MuscleCard";

export default function MusclesScreen( {navigation}:any) {

  const muscles = [
    { id: 1, name: "Shoulders", image: require("../assets/shoulders.png") },
    { id: 2, name: "Chest", image: require("../assets/shoulders.png") },
    { id: 3, name: "Biceps", image: require("../assets/shoulders.png") },
  ];

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
        <View style={styles.progressLine}/> 
        <View style={styles.progressItem}>
          <View style={styles.progressDot} />
          <Text style={styles.inactiveLabel}>Exercises</Text>
        </View>
      </View>

      {/*Muscles list */}
      <ScrollView contentContainerStyle={styles.muscleList}>
        {muscles.map((muscle, index) => (
          <MuscleCard name={muscle.name} image={muscle.image} navigation={navigation} />
        ))}
      </ScrollView>

      {/*Muscle Button */}
      <TouchableOpacity style={styles.newMuscleButton}>
        <Text style={styles.newMuscleText}>New Muscles</Text>
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


    muscleList: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingHorizontal: 10, 
      gap: 10,
    },
    splitCard: {
      flexDirection: "row",
      backgroundColor: "#AAB2C8",
      padding: 15,
      borderRadius: 20,
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },

    newMuscleButton: {
      backgroundColor: "#1A2C51",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 0,
    marginTop: 5
  },
    newMuscleText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    

  });
  