import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text style={tw`text-red-500`}>Open up App.tsx to start working on your app!</Text>
      <Text style={tw`text-green-700`}>BUNA BA IoN</Text>
      <StatusBar style="auto" />
    </View>
  );
}
