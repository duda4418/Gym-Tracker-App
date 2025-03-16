import React from 'react';
import { PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import HomeScreen from './screens/Home';
import SplitsScreen from './screens/Splist';


const Stack = createNativeStackNavigator()

export default function Main() {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options ={{headerShown:false}}/>
          <Stack.Screen name="Splits" component={SplitsScreen} options ={{headerShown:true}}/>

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
