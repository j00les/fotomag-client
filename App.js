import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Stack, Tab } from './src/router';
import HomeStack from './src/router/user/Stack';
import NavStack from './src/router/user/Stack';

// import { enableLatestRenderer, PROVIDER_GOOGLE } from 'react-native-maps';
import { Provider } from 'react-redux';
import store from './src/stores/store';

export default function App() {
  // enableLatestRenderer().then(res => {
  //   console.log(res);
  // });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavStack />
        {/* <TabNav /> */}
        <StatusBar />
      </NavigationContainer>
    </Provider>
  );
}
