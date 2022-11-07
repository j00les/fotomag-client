import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FormCom from "../../components/merchant/FormCom";

export default RegisterScreen = () => {
  const [role, setRole] = useState("");

  const status = (value) => {
    setRole(value);
  };

  return (
    <View className="flex-1 items-center bg-blue-300">
      <View className="h-[25%] items-center justify-end pb-5">
        <Text className="text-4xl pb-[3%]">Daftar sebagai</Text>
        <View className="flex-row">
          <TouchableOpacity
            onPress={() => status("merchant")}
            className="w-[25%] rounded-xl border-2"
          >
            <Text className="text-lg text-center ">Toko</Text>
          </TouchableOpacity>
          <View className="px-[5%]" />
          <TouchableOpacity onPress={() => setRole("user")} className="w-[25%]">
            <Text className="text-lg text-center rounded-xl border-2">
              Pengguna
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full items-center bg-red-300 h-[75%]">
        <FormCom role={role} />
      </View>
    </View>
  );
};
