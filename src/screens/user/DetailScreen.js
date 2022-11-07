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
  // transaction/:idAtk
  // req body buat post order
  // fileName, totalPages, isJilid, colorVariant, duplicate, address,totalPrice
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [jilid, setJilid] = useState('unchecked');
  const [color, setColor] = useState('unchecked');
  const [black, setBlack] = useState('unchecked');
  const [orderInput, setOrderInput] = useState({
    colorVariant: '',
    isJilid: '',
    duplicate: 0,
    fileUrl: null,
  });

  const navigation = useNavigation();

  console.log(orderInput);
  async function retrievePdf() {
    try {
      const file = await DocumentPicker.getDocumentAsync();
      setOrderInput({ ...orderInput, fileUrl: file.uri });
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
      <View className="border p-10 bg-red-400"></View>

      <Pressable
        className="border rounded-md  w-[15%] py-2  bg-white self-end"
        onPress={() => setModalVisible(true)}
      >
        <Text className="uppercase text-center">Pesan</Text>
      </Pressable>

      <View style={styles.centeredView}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          {/* radio group */}
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View className="flex-row items-center w-full  ">
                <Text className="text-xl">Pesanan Baru</Text>
              </View>

              <TouchableOpacity
                className="rounded-lg absolute right-4 top-2"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Feather name="x-circle" size={24} color="black" />
              </TouchableOpacity>

              <Button func={retrievePdf} reference="send-pdf" />

              {/* radio */}
              <View className="flex-row mt-2">
                <View className="flex-row-reverse items-center">
                  <Text>Warna</Text>
                  <RadioButton status={color} onPress={() => changeColor('Berwarna')} />
                </View>

                {/* radio */}
                <View className="flex-row-reverse items-center">
                  <Text>Hitam/Putih</Text>
                  <RadioButton status={black} onPress={() => changeColor('Hitamputih')} />
                </View>

                <View className="flex-row-reverse items-center">
                  <Text>Jilid</Text>
                  <RadioButton status={jilid} onPress={() => changeJilid()} />
                </View>
              </View>

              <View className="flex-row items-center mt-2">
                <Text>Rangkap: </Text>
                <TextInput
                  onChangeText={text => setOrderInput({ ...orderInput, duplicate: text })}
                  // value={text}
                  keyboardType="number-pad"
                  placeholder="rangkap"
                  className="border"
                />
              </View>

              {/*  */}

              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('map-order', { orderData: orderInput });
                }}
              >
                <Text>Map</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
