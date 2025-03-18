import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-paper';
import SplitsScreen from '../screens/Splist';
import MusclesScreen from '../screens/muscles';
import ExercisesScreen from '../screens/Exercises';

const WorkoutsStack = createStackNavigator();

export default function WorkoutStack() {
  return (
    <WorkoutsStack.Navigator>
      <WorkoutsStack.Screen
        name="Splits"
        component={SplitsScreen}
        options={{ headerShown: false }}
      />
      <WorkoutsStack.Screen
        name="Muscles"
        component={MusclesScreen}
        options={{ headerShown: false }}
      />
      <WorkoutsStack.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{ headerShown: false }}
      />
    </WorkoutsStack.Navigator>
  );
}
