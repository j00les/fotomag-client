import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/router/user/Tab';

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
