import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import LoginScreen from "./src/screens/login/LoginScreen";
import RegisterScreen from "./src/screens/login/RegisterScreen";
import { Provider } from "react-redux";
import store from "./src/stores/store";
import MerchantTab from "./src/router/merchant/MerchantTab";
import { Stack } from "./src/router";
import UserStack from "./src/router/user/Stack";

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
          <Stack.Screen
            name="UserTab"
            component={UserStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
