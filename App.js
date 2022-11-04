import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Stack, Tab } from './src/router';
import NavStack from './src/router/user/Stack';
import HomeStack from './src/router/user/Stack';

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
      {/* <TabNav /> */}
      <StatusBar />
    </NavigationContainer>
  );
}
