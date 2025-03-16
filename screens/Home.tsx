import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function HomeScreen({navigation} : any) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(0);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>GYM TRACKER APP</Text>

        <TouchableOpacity style={styles.uploadContainer} onPress={pickImage}>
            {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.qrImage} />
            ) : (
            <Text style={styles.uploadText}>Upload QR</Text>
            )}
        </TouchableOpacity>

        {/* <Button
             icon={({ size }) => (
                <MaterialCommunityIcons name="chevron-triple-right" size={22} color="white" />
              )}
            mode="contained"
            style={styles.startButton}
            labelStyle={styles.buttonText}
            contentStyle={{ flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => navigation.navigate('NavBar', { name: 'NavBar' })}
            >
            Continueu
        </Button>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  uploadContainer: {
    width: 350,
    height: 350,
    backgroundColor: "#D3D3D3",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  uploadText: {
    color: "#555",
  },
  qrImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  startButton: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18, 
    textAlign: 'center',

  }
  
});
