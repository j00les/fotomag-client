import LoginScreen from "../screens/login/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RegisterScreen from "../screens/login/RegisterScreen";
import MerchantTab from "./merchant/MerchantTab";
import UserStack from "./user/Stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Stack } from ".";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getToken } from "../stores/actions/userAction";
// import { getAccessToken } from '../stores/slices/userSlice';

export default function MainStack() {
  const isLogin = true;
  const role = "Merchant";
  const dispatch = useDispatch();

  const getData = async key => {
    try {
      const keyz = await AsyncStorage.getItem(key);
      return keyz;
    } catch (e) {
      console.log(e);
    }
  };

  const renderScreen = () => {
    if (!isLogin) {
      return (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      );
    } else if (role === "Customer") {
      return <Stack.Screen name="UserTab" component={UserStack} options={{ headerShown: false }} />;
    } else if (role === "Merchant") {
      return (
        <Stack.Screen name="MerchantTab" component={MerchantTab} options={{ headerShown: false }} />
      );
    } else {
      //kurir
    }
  };

  useEffect(() => {
    getData("@access_token").then(res => {
      dispatch(getToken(res));
    });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="RegisterScreen">
        <Stack.Screen
          options={{
            tabBarLabel: "Home",
            headerShown: false,
          }}
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{
            tabBarLabel: "Home",
            headerShown: false,
          }}
          name="RegisterScreen"
          component={RegisterScreen}
        />

        <Stack.Screen name="MerchantTab" component={MerchantTab} options={{ headerShown: false }} />

        <Stack.Screen name="UserTab" component={UserStack} options={{ headerShown: false }} />

        {/* <Stack.Screen name="UserTab" component={UserStack} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
