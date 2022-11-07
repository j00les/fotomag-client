import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Stack } from "./src/router";

import LoginScreen from "./src/screens/login/LoginScreen";
import RegisterScreen from "./src/screens/login/RegisterScreen";

import MerchantTab from "./src/router/merchant/MerchantTab";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        {}
        <Stack.Screen name="MerchantTab" component={MerchantTab} />
      </Stack.Navigator>
      {/* <TabNav />  */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <HomeMerchant /> */}
    </NavigationContainer>
  );
}
