import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { baseURL } from "../../constants/constants";

export default FormCom = props => {
  console.log(props.role);
  const registerHandler = async () => {
    try {
      const { data } = await axios({
        url: `${baseURL}/login`,
        method: "post",
        data: {
          email: cred.email,
          password: cred.password,
        },
      });

      if (data.role === "Customer") {
        navigation.navigate("UserTab");
      } else if (data.role === "Merchant") {
        navigation.navigate("MerchantTab");
      } else if (data.role === "Courier") {
        navigation.navigate("MerchantTab");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="w-full mt-[10%]">
      <View className="items-center gap-3">
        <TextInput placeholder="Nama" className="border-2 rounded-lg px-4 py-1 w-[75%]" />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="border-2 rounded-lg px-4 py-1 w-[75%]"
        />
        <TextInput
          placeholder="Kata Sandi"
          secureTextEntry
          className="border-2 rounded-lg px-4 py-1 w-[75%]"
        />
        <TextInput placeholder="Alamat" className="border-2 rounded-lg px-4 py-1 w-[75%] mb-2" />

        {props.role === "merchant" && (
          <>
            <View className="w-full items-center -right-1 gap-3">
              <TextInput
                placeholder="Nama Toko"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />

              {/* <TextInput
                placeholder="Alamat Toko"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              /> */}
              {/* <View className="border">
                <SearchMapRegister />
              </View> */}

              <TextInput
                placeholder="Harga Print"
                keyboardType="number-pad"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />
              <TextInput
                placeholder="Harga Print Berwarna"
                keyboardType="number-pad"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />
              <TextInput
                placeholder="Harga Jilid"
                keyboardType="number-pad"
                className="border-2 rounded-lg px-4 py-1 w-[75%]"
              />
            </View>
          </>
        )}
        <View className="mt-2">
          <TouchableOpacity className="rounded-lg w-[50%] h-9 bg-primary justify-center">
            <Text className="text-white text-center px-[5%] py-1 rounded-lg">Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
