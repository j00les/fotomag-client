import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default FormCom = (props) => {
  return (
    <View className="w-full mt-[10%]">
      <View className="items-center gap-3">
        <TextInput
          placeholder="Nama"
          className="border-2 rounded-2xl px-4 w-[75%]"
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="border-2 rounded-2xl px-4 w-[75%]"
        />
        <TextInput
          placeholder="Kata Sandi"
          secureTextEntry
          className="border-2 rounded-2xl px-4 w-[75%]"
        />
        <TextInput
          placeholder="Alamat"
          className="border-2 rounded-2xl px-4 w-[75%] mb-2"
        />
        {props.role === "merchant" && (
          <>
            <View className="w-full items-center -right-1 gap-3">
              <TextInput
                placeholder="Nama Toko"
                className="border-2 rounded-2xl px-4 w-[75%]"
              />
              <TextInput
                placeholder="Alamat Toko"
                className="border-2 rounded-2xl px-4 w-[75%]"
              />
              <TextInput
                placeholder="Harga Print"
                keyboardType="number-pad"
                className="border-2 rounded-2xl px-4 w-[75%]"
              />
              <TextInput
                placeholder="Harga Print Berwarna"
                keyboardType="number-pad"
                className="border-2 rounded-2xl px-4 w-[75%]"
              />
              <TextInput
                placeholder="Harga Jilid"
                keyboardType="number-pad"
                className="border-2 rounded-2xl px-4 w-[75%]"
              />
            </View>
          </>
        )}
        <View>
          <TouchableOpacity className="mt-[5%]">
            <Text className="border-2 text-center px-[5%] py-1 rounded-2xl">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
