import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';

export default function LoginScreen({navigation}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
    navigation.navigate('NavBar', {name:'NavBar'})
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style = {styles.button}>
        Log in
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp', {name:'SignUp'})}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10 },
  button: { backgroundColor: "#007bff", padding: 10, borderRadius: 10, width: "100%", alignItems: "center" },
  buttonText: { color: "white", fontSize: 16 },
  linkText: { marginTop: 15, color: "#007bff", fontSize: 16 },
});
