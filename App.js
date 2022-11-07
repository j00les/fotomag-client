import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Stack } from "./src/router";

import LoginScreen from "./src/screens/login/LoginScreen";
import { Stack, RegisterScreen }from "./src/screens/login/RegisterScreen";

import MerchantTab  from './src/router';
import HomeStack from './src/router/user/Stack';
import Stack from "./src/router/merchant/MerchantStack';

import { Provider } from 'react-redux';
import store from './src/stores/store";

export default function App() {
  return (

    <Provider store={store}>
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

        <Stack.Screen
          name="MerchantTab"
          component={MerchantTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
