import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Alert, Modal, Text, Pressable, View, TextInput, KeyboardAvoidingView } from "react-native";
import { styles } from "../../styles/style";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { baseURL } from "../../constants/constants";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const TopUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const navigation = useNavigation();

  async function acquireToken() {
    try {
      console.log("cek");
      let token = await AsyncStorage.getItem("access_token");
      const { data } = await axios({
        method: "post",
        url: `${baseURL}/balance/pay`,
        data: {
          nominal: balance,
        },
        headers: {
          access_token: token,
        },
      });
      console.log(data);

      navigation.navigate("Bayar", data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        statusBarTranslucent={true}
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalTopUpView}>
            {/* <KeyboardAvoidingView> */}
            <Text className="text-2xl mt-4">Isi Saldo</Text>

            <Pressable
              className="right-4 top-2 absolute"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Feather name="x-circle" size={24} color="black" />
            </Pressable>

            <View className="w-[80%] mt-[3%]">
              <View>
                <Text className="mb-2">Nominal Saldo</Text>
                <TextInput
                  onChangeText={text => setBalance(text)}
                  keyboardType="number-pad"
                  placeholder="Isi Nominal"
                  className="border-2 rounded-lg px-4 py-1 w-full"
                />
              </View>

              <TouchableOpacity
                onPress={() => acquireToken()}
                className="bg-primary p-2 flex-2 rounded-md mt-2"
              >
                <Text className="text-white  text-center">Selanjutnya</Text>
              </TouchableOpacity>
            </View>
            {/* </KeyboardAvoidingView> */}
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="border w-full rounded-lg bg-white"
      >
        <Text className="text-center p-2 uppercase">Isi Saldo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUp;
