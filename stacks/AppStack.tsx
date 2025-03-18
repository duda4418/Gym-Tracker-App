import React from 'react';
import { PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import NavBar from '../components/NavBar';
import MusclesScreen from '../screens/muscles';

const Stack = createNativeStackNavigator()

export default function AppStack() {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="NavBar"
            component={NavBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
