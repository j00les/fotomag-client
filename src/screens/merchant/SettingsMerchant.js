import { useState } from "react";
import { Button, Modal, Text, TouchableOpacity, View } from "react-native";

import Modals from "../../components/merchant/Modal";

export default SettingMerchant = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <View>
        <Modal visible={modal} transparent={true} animationType="fade">
          <View className="h-full w-full justify-center items-center">
            <View className="h-[100%] w-[90%] bg-red-400 justify-center">
              <Modals />
              <Button title="close" onPress={() => setModal(false)} />
            </View>
          </View>
        </Modal>
      </View>
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
                <Text>Tambah Kurir Baru</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModal(true)}
                className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%]"
              >
                <Text>Order Selesai</Text>
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
    </>
  );
};
