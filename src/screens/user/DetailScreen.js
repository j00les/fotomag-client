import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Modal, TouchableOpacity, Text, View, Pressable, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Button from '../../components/user/Button';
import { Feather } from '@expo/vector-icons';

import { styles } from '../../styles/style';

export default function DetailScreen({ route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [jilid, setJilid] = useState('unchecked');
  const [color, setColor] = useState('unchecked');
  const [black, setBlack] = useState('unchecked');
  const [orderInput, setOrderInput] = useState({
    colorVariant: '',
    isJilid: 'NO',
    duplicate: 0,
    fileUrl: {
      name: '',
      uri: '',
      type: '',
    },
    atkId: route.params.id,
  });

  const navigation = useNavigation();

  async function retrievePdf() {
    try {
      const file = await DocumentPicker.getDocumentAsync();
      console.log(file, 'filleeeeee retrievepddff');
      setOrderInput({
        ...orderInput,
        fileUrl: {
          name: file.name,
          uri: file.uri,
          type: file.mimeType,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  function changeColor(v) {
    if (v === 'Berwarna') {
      setColor('checked');
      setBlack('unchecked');
      setOrderInput({ ...orderInput, colorVariant: 'Berwarna' });
    } else {
      setBlack('checked');
      setColor('unchecked');
      setOrderInput({ ...orderInput, colorVariant: 'Hitamputih' });
    }
  }

  function changeJilid() {
    if (orderInput.isJilid === 'YES') {
      setJilid('unchecked');
      setOrderInput({ ...orderInput, isJilid: 'NO' });
    } else {
      setJilid('checked');
      setOrderInput({ ...orderInput, isJilid: 'YES' });
    }
  }

  return (
    <View className="px-7 py-2">
      <View className="border h-[50%] bg-red-400">
        <Text>foto disini</Text>
      </View>

      <View className="mt-2">
        <Text className="text-2xl">Toko Makmur jaya Abadi</Text>
        <Text>Jalan blablabla</Text>
        <Text>Print Warna: Rp.200/lembar</Text>
        <Text>Print Hitam/Putih: Rp.500/lembar</Text>
        <Text>Jilid: Rp.10.000</Text>
      </View>

      <Pressable
        className="border rounded-md  w-[15%] py-2  bg-white self-end"
        onPress={() => setModalVisible(true)}
      >
        <Text className="uppercase text-center">Pesan</Text>
      </Pressable>

      <View style={styles.centeredView}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView} className="w-[65%] h-[50%]">
              <View className="flex-row items-center justify-center w-full">
                <Text className="text-center text-xl">Pesanan Baru</Text>
              </View>

              <TouchableOpacity
                className="rounded-lg absolute right-4 top-2"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Feather name="x-circle" size={24} color="black" />
              </TouchableOpacity>

              <Text className="mr-[220px] mt-4 mb-1 text-base">File : </Text>
              <Button func={retrievePdf} reference="send-pdf" />

              {/* radio */}

              <Text className="mt-4 text-base text-left mr-[220px]">Tipe :</Text>
              <View className="flex-row mt-2 border px-2 rounded-md">
                <View className="flex-row-reverse items-center">
                  <Text>Warna</Text>

                  <RadioButton
                    color="#003b4f"
                    status={color}
                    onPress={() => changeColor('Berwarna')}
                  />
                </View>

                {/* radio */}
                <View className="flex-row-reverse items-center">
                  <Text>Hitam/Putih</Text>
                  <RadioButton
                    color="#003b4f"
                    status={black}
                    onPress={() => changeColor('Hitamputih')}
                  />
                </View>

                <View className="flex-row-reverse items-center">
                  <Text>Jilid</Text>
                  <RadioButton color="#003b4f" status={jilid} onPress={() => changeJilid()} />
                </View>
              </View>

              <Text className="mr-[195px] text-base mt-4">Duplikat :</Text>
              <View className="flex-row justify-start items-center mt-2 mr-[220px] ">
                <TextInput
                  placeholder="0"
                  onChangeText={text => setOrderInput({ ...orderInput, duplicate: text })}
                  keyboardType="number-pad"
                  className="border text-center rounded-md w-8"
                />
              </View>

              <Text className="mr-[200px] mt-3 mb-1 text-base">Alamat :</Text>
              <TouchableOpacity
                className="border mr-[180px]  bg-primary  rounded-md py-2 px-1 "
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('map-order', { orderData: orderInput });
                }}
              >
                <Text className="text-center text-white uppercase">antar ke </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
