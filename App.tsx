import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
}
