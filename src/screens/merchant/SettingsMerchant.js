import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  changePrice,
  registerCourier,
} from "../../stores/merchant/reducersMerchant";

import { Button, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";


export default SettingMerchant = ({ navigation }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalprice, setModalprice] = useState(false);
  const [history, setHistory] = useState(false);

  const { success } = useSelector(state => {

    return state.merchant;
  });
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [price, setPrice] = useState({
    priceColor: 0,
    priceBlack: 0,
    priceJilid: 0,
  });

  const onChange = name => value => {
    let newInput = {
      ...input,
      [name]: value,
    };
    setInput(newInput);
  };

  const onChangePrice = name => value => {
    let newInput = {
      ...price,
      [name]: value,
    };
    setPrice(newInput);
  };

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("LoginScreen");
  };

  return (
    <>
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
              <TouchableOpacity
                onPress={() => setModal(true)}
                className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%] mt-[10%]"
              >
                <Text>Tambah Kurir Baru</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHistory(true)}
                className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%]"
              >
                <Text>Order Selesai</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalprice(true)}
                className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%]"
              >
                <Text>Ubah Harga</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => logout()}
                className="bg-yellow-200 h-[5%] justify-center items-center w-full mb-[3%]"
              >
                <Text>Keluar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal visible={modal} transparent={true} animationType="fade">
        <View className="h-full w-full justify-center items-center">
          <View className="h-[50%] w-[90%] bg-red-400 justify-center rounded-2xl">
            <View className="w-full]">
              <View className="items-center gap-3">
                <Text className="mb-5">Tambah Kurir Baru</Text>
                <TextInput
                  onChangeText={value => onChange("name")(value)}
                  placeholder="Nama"
                  className="border-2 rounded-2xl px-4 w-[75%]"
                />
                <TextInput
                  onChangeText={value => onChange("email")(value)}
                  placeholder="Email"
                  keyboardType="email-address"
                  className="border-2 rounded-2xl px-4 w-[75%]"
                />
                <TextInput
                  onChangeText={value => onChange("password")(value)}
                  placeholder="Kata Sandi"
                  secureTextEntry
                  className="border-2 rounded-2xl px-4 w-[75%]"
                />

                <View className="flex-row gap-2">
                  <TouchableOpacity onPress={() => setModal(false)} className="mt-[5%]">
                    <Text className="border-2 text-center px-[5%] py-1 rounded-2xl">Batal</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(registerCourier(input));
                      console.log(input);
                    }}
                    className="mt-[5%]"
                  >
                    <Text className="border-2 text-center px-[5%] py-1 rounded-2xl">Daftar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={modalprice} transparent={true} animationType="fade">
        <View className="h-full w-full justify-center items-center">
          <View className="h-[50%] w-[90%] bg-red-400 justify-center rounded-2xl">
            <View className="w-full]">
              <View className="items-center gap-3">
                <Text className="mb-5">Tambah Kurir Baru</Text>
                <TextInput
                  onChangeText={value => onChangePrice("priceColor")(value)}
                  keyboardType={"number-pad"}
                  placeholder="Harga Print Berwarna"
                  className="border-2 rounded-2xl px-4 w-[75%]"
                />
                <TextInput
                  onChangeText={value => onChangePrice("priceBlack")(value)}
                  keyboardType={"number-pad"}
                  placeholder="Harga Print Hitam"
                  className="border-2 rounded-2xl px-4 w-[75%]"
                />
                <TextInput
                  onChangeText={value => onChangePrice("priceJilid")(value)}
                  keyboardType={"number-pad"}
                  placeholder="Harga Jilid"
                  className="border-2 rounded-2xl px-4 w-[75%]"
                />

                <View className="flex-row gap-2">
                  <TouchableOpacity onPress={() => setModalprice(false)} className="mt-[5%]">
                    <Text className="border-2 text-center px-[5%] py-1 rounded-2xl">Batal</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      dispatch(changePrice(price)), console.log(price);
                    }}
                    className="mt-[5%]"
                  >
                    <Text className="border-2 text-center px-[5%] py-1 rounded-2xl">
                      Ubah
                    </Text>

                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={history} transparent={true} animationType="fade">
        <View className="h-full w-full justify-center items-center">
          <View className="h-[90%] w-[90%] bg-red-400 justify-center items-center rounded-2xl">
            <View className="-top-4 mr-4 items-end w-full">
              <TouchableOpacity
                onPress={() => setHistory(false)}
                className="bg-slate-600 rounded-full px-2 py-1"
              >
                <View>
                  <Text>X</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="w-[90%] h-[90%] ">
              <Text className="text-center -top-4 font-bold">Daftar Pesanan Sukses</Text>
              <FlatList
                keyExtractor={item => item.id}
                data={success}
                renderItem={({ item }) => (
                  <Card
                    nama="history"
                    id={item.id}
                    warna={item.colorVariant}
                    lembar={item.totalPages}
                    jilid={item.isJilid}
                    harga={item.totalPrice}
                    alamat={item.address}
                    status={item.status}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
