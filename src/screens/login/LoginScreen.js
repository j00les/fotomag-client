import { View, Text, TextInput, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "https://e07d-36-78-13-68.ap.ngrok.io";
export default LoginScreen = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const getData = async (key) => {
    try {
      const keyz = await AsyncStorage.getItem(key);
      console.log(keyz);
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("access_token", jsonValue);
    } catch (e) {
      consol.log(e);
    }
  };

  const loginHandler = async () => {
    try {
      const { data } = await axios({
        url: `${baseURL}/login`,
        method: "post",
        data: {
          email: cred.email,
          password: cred.password,
        },
      });
      console.log(data);

      // taruh redux
      //set-item
      storeData(data.access_token);
      // set//nama-user
      //  set // role
      // set//islogin

      if (data.role === "Customer") {
        navigation.navigate("UserTab");
      } else if (data.role === "Merchant") {
        navigation.navigate("MerchantTab");
      } else if (data.role === "Courier") {
        navigation.navigate("StackCourier");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="flex-1 items-center">
      <View className="flex-1 w-full">
        <View className="h-[25%] w-full bg-blue-200 p-3 rounded-b-3xl">
          <Text className="text-4xl ">Welcome Back</Text>
          <Text className="text-xl">Login to continue</Text>
        </View>
        <View className="h-[75%] w-full bg-red-300 rounded-b-2xl">
          <LottieView
            source={require("../../../assets/merchanLottie/Login.json")}
            autoPlay
            loop
          />
        </View>
      </View>
      <View className="flex-1 w-full rounded-t-3xl bg-blue-200 items-center">
        <View className="gap-2 mt-2 w-[70%]">
          <View className="gap-1">
            <Text>Email</Text>
            <TextInput
              onChangeText={(text) => setCred({ ...cred, email: text })}
              className="border-2 rounded-lg px-2"
            />
          </View>
          <View className="gap-1 mb-2">
            <Text>Password</Text>
            <TextInput
              onChangeText={(text) => setCred({ ...cred, password: text })}
              secureTextEntry
              className="border-2 rounded-lg px-2"
            />
          </View>
          <View className="items-center">
            <TouchableOpacity
              onPress={() => loginHandler()}
              className="border-2 rounded-xl w-[50%] h-9 bg-blue-400 justify-center"
            >
              <Text className="text-center">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center flex-row gap-1">
            <Text>Don't Have Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text className="text-red-400">Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
