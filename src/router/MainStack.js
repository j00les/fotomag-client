import LoginScreen from "../screens/login/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RegisterScreen from "../screens/login/RegisterScreen";
import MerchantTab from "./merchant/MerchantTab";
import UserStack from "./user/Stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Stack } from ".";
import StackCourier from "./courier/stackCourier";

export default function MainStack() {
  //----mungkin nanti bisa dipakai (logic nav guard)----------------
  // const isLogin = true;
  // const role = "Merchant";
  // const renderScreen = () => {
  //   if (!isLogin) {
  //     return (
  //       <>
  //         <Stack.Screen name="LoginScreen" component={LoginScreen} />
  //         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  //       </>
  //     );
  //   } else if (role === "Customer") {
  //     return <Stack.Screen name="UserTab" component={UserStack} options={{ headerShown: false }} />;
  //   } else if (role === "Merchant") {
  //     return (
  //       <Stack.Screen name="MerchantTab" component={MerchantTab} options={{ headerShown: false }} />
  //     );
  //   } else if (role === "Courier") {
  //     //kurir
  //     return (
  //       <Stack.Screen
  //         name="StackCourier"
  //         component={StackCourier}
  //         options={{ headerShown: false }}
  //       />
  //     );
  //   }
  // };
  //--------------------------------------------

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="MerchantTab" component={MerchantTab} options={{ headerShown: false }} />

        <Stack.Screen name="UserTab" component={UserStack} options={{ headerShown: false }} />

        <Stack.Screen
          name="StackCourier"
          component={StackCourier}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
