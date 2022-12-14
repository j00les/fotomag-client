import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { baseURL } from "../../constants/constants";
import RegisterMap from "./RegisterMap";

export default FormCom = props => {
  // merchant/user input
  const [merchantInput, setMerchantInput] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    atkAddress: "",
    atkName: "",
    priceColor: 0,
    priceBlack: 0,
    priceJilid: 0,
    longitude: "",
    latitude: "",
  });
  const navigation = useNavigation();
  const { user } = useSelector(state => state);

  useEffect(() => {
    setMerchantInput({ ...merchantInput, latitude: user.selectedLongLat.latitude });
    setMerchantInput({ ...merchantInput, longitude: user.selectedLongLat.longitude });
  }, [user.selectedLongLat]);

  const registerHandler = async () => {
    try {
      if (props.role === "merchant") {
        const { data } = await axios({
          url: `${baseURL}/merchant/register`,
          method: "post",
          data: {
            name: merchantInput.name,
            email: merchantInput.email,
            password: merchantInput.password,
            address: merchantInput.address,
            atkName: merchantInput.atkName,
            atkAddress: merchantInput.atkAddress,
            priceColor: merchantInput.priceColor,
            priceBlack: merchantInput.priceBlack,
            priceJilid: merchantInput.priceJilid,
            longitude: merchantInput.longitude,
            latitude: merchantInput.latitude,
            // ...merchantInput,
          },
        });
        // console.log(data);
      } else if (props.role === "user") {
        const { data } = await axios({
          url: `${baseURL}/customer/register`,
          method: "post",
          data: {
            name: merchantInput.name,
            email: merchantInput.email,
            password: merchantInput.password,
            address: merchantInput.address,
          },
        });
        navigation.navigate("LoginScreen");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="w-full mt-[10%]  h-[90%]">
      <View className="items-center gap-3">
        <TextInput
          onChangeText={text => setMerchantInput({ ...merchantInput, name: text })}
          placeholder="Nama"
          className="border-2 rounded-lg px-4 py-1 w-[75%]"
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="border-2 rounded-lg px-4 py-1 w-[75%]"
          onChangeText={text => setMerchantInput({ ...merchantInput, email: text })}
        />

        <TextInput
          placeholder="Kata Sandi"
          secureTextEntry
          className="border-2 rounded-lg  px-4 py-1 w-[75%]"
          onChangeText={text => setMerchantInput({ ...merchantInput, password: text })}
        />

        <TextInput
          placeholder="Alamat"
          className="border-2 rounded-lg px-4 py-1 w-[75%] mb-2"
          onChangeText={text => setMerchantInput({ ...merchantInput, address: text })}
        />

        {props.role === "merchant" && (
          <>
            <View className="w-full items-center -right-1 gap-3">
              <TextInput
                onChangeText={text => setMerchantInput({ ...merchantInput, atkName: text })}
                placeholder="Nama Toko"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />

              <View className="flex-1 flex-row py-3 w-[75%] items-center rounded-lg">
                <TextInput
                  placeholder="Alamat Toko"
                  className="border-2 px-4 rounded-lg h-10 w-[74%] items-center"
                  onChangeText={text => setMerchantInput({ ...merchantInput, atkAddress: text })}
                />
                <RegisterMap />
              </View>

              <TextInput
                onChangeText={text => setMerchantInput({ ...merchantInput, priceBlack: text })}
                placeholder="Harga Print"
                keyboardType="number-pad"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />

              <TextInput
                onChangeText={text => setMerchantInput({ ...merchantInput, atkAddress: text })}
                placeholder="Atk address"
                keyboardType="number-pad"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />

              <TextInput
                onChangeText={text => setMerchantInput({ ...merchantInput, priceColor: text })}
                placeholder="Harga Print Berwarna"
                keyboardType="number-pad"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />
              <TextInput
                onChangeText={text => setMerchantInput({ ...merchantInput, priceJilid: text })}
                placeholder="Harga Jilid"
                keyboardType="number-pad"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />
            </View>
          </>
        )}

        <View className="flex-1">
          <TouchableOpacity
            onPress={() => registerHandler()}
            className="mt-10 rounded-lg w-[50%] h-9 bg-primary justify-center"
          >
            <Text className="text-white text-center px-[5%] py-1 rounded-lg">Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
