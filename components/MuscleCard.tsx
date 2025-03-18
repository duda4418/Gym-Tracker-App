import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MuscleCard({name, image, navigation}:any) {

  return (
     <TouchableOpacity  style={styles.card} onPress={() => navigation.navigate('Exercises', { name: 'Exercises' })}>
      <View>
          <Image source={image} style={styles.image} />
          <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 10,
      padding: 20,
    },
    card: {
      width: "48%", // This ensures two cards fit per row with spacing
      height: 150,
      backgroundColor: "#5a74a7",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    text: {
      marginTop: 10,
      color: "white",
      fontWeight: "bold",
    },
  });