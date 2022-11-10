import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "../../constants/constants";

export default LoginScreen = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const storeData = async value => {
    try {
      await AsyncStorage.setItem("access_token", value);
    } catch (e) {
      console.log(e);
    }
  };

  const loginHandler = async () => {
    try {
      console.log("masok login");
      const { data } = await axios({
        url: `${baseURL}/login`,
        method: "post",
        data: {
          email: cred.email,
          password: cred.password,
        },
      });

      await storeData(data.access_token);

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
        <View className="h-[25%] w-full px-2 rounded-b-3xl">
          <View className="mx-auto w-[300] h-[120]  mt-10">
            <Image
              className="h-full w-full"
              source={require("../../../assets/fotomag-logo-baruu.png")}
            />
          </View>
        </View>

        <View className="h-[75%] w-full  mx-auto  rounded-b-2xl">
          <LottieView
            className="ml-4"
            source={require("../../../assets/merchanLottie/Login.json")}
            autoPlay
            loop
          />
        </View>
      </View>
      <View className="flex-1 w-full rounded-t-3xl  items-center">
        <View className="gap-2 mt-2 w-[70%]">
          <KeyboardAvoidingView>
            <View className="gap-1">
              <Text>Email</Text>
              <TextInput
                onChangeText={text => setCred({ ...cred, email: text })}
                className="border-2 rounded-lg px-2"
              />
            </View>
            <View className="gap-1 mb-2">
              <Text>Password</Text>
              <TextInput
                onChangeText={text => setCred({ ...cred, password: text })}
                secureTextEntry
                className="border-2 rounded-lg px-2"
              />
            </View>

            <View className="items-center pt-3">
              <TouchableOpacity
                onPress={() => loginHandler()}
                className="rounded-lg w-[50%] h-9 bg-primary justify-center"
              >
                <Text className="text-center text-white">Masuk</Text>
              </TouchableOpacity>
            </View>

            <View className="items-center text-center flex-row  justify-center pt-3 gap-1">
              <Text className="text-center">Belum memiliki akun?</Text>

              <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                <Text className="text-red-400">Buat sekarang</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};
