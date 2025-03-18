import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from "react-native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";

export default function SplitCard({split, navigation}:any) {

  return (
      <TouchableOpacity style={styles.splitCard} onPress={() => navigation.navigate('Muscles', { name: 'Muscles' })}>
        <View>
          <Text style={styles.splitTitle}>{split.title}</Text>
          <Text style={styles.splitSubtitle}>{split.muscles}</Text>
        </View>
        <ArrowRight color="white" size={20} />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  splitCard: {
    flexDirection: "row",
    backgroundColor: "#AAB2C8",
    padding: 15,
    borderRadius: 20,
    marginBottom: 5,
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
});
