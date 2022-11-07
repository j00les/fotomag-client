import { Button, Text, TouchableOpacity, View } from "react-native";

export default SettingMerchant = ({ navigation }) => {
  return (
    <View className="flex-1 items-center ">
      <View className="h-[10%] w-full">
        <View className="justify-center bg-red-300 rounded-b-3xl items-center h-full">
          <Text className="font-bold">Pengaturan</Text>
        </View>
      </View>
      <View className="h-[1%] bg-white" />
      <View className="bg-yellow-300 w-full h-full rounded-t-3xl p-4">
        <View className="bg-white h-full rounded-lg">
          <View className="h-[100%]">
            <TouchableOpacity className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%] mt-[10%]">
              <Text>Daftar Kurir</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%]">
              <Text>Tambah Kurir</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%]">
              <Text>Ubah Harga</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
              className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%]"
            >
              <Text>Keluar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
