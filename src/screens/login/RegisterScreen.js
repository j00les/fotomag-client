import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import FormCom from "../../components/RegisterMap.js/FormCom";
import RegisterMap from "../../components/RegisterMap.js/RegisterMap";

export default RegisterScreen = () => {
  const [role, setRole] = useState("");

  const status = value => {
    setRole(value);
  };

  return (
    <View className="flex-1">
      <View className="items-center  mt-10">
        <Text className="text-3xl pb-[3%]">Daftar Sebagai</Text>
        <View className="flex-row px-5">
          <TouchableOpacity
            onPress={() => status("merchant")}
            className="w-[25%] border-b-4 border-primary"
          >
            <Text className="text-lg text-center ">Toko</Text>
          </TouchableOpacity>

          <View className="px-[5%]" />

          <TouchableOpacity onPress={() => setRole("user")} className="w-[25%]">
            <Text className="border-b-4 text-lg text-center border-secondary">Pengguna</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full items-center h-[75%] ">
        <FormCom role={role} />
      </View>

      <RegisterMap />
    </View>
  );
};
