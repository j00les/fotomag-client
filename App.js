import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/router';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
