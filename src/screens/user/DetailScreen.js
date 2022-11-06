import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Modal, TouchableOpacity, Text, View, Pressable, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Button from '../../components/user/Button';
// import MapOrder from '../../components/user/MapOrder';

import { styles } from '../../styles/style';

export default function DetailScreen({ route }) {
  // transaction/:idAtk
  // req body buat post order
  // fileName, totalPages, isJilid, colorVariant, duplicate, address,totalPrice

  const dispatch = useDispatch();
  const { id } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [jilid, setJilid] = useState('unchecked');
  const [color, setColor] = useState('unchecked');
  const [black, setBlack] = useState('unchecked');
  const [orderInput, setOrderInput] = useState({
    colorVariant: '',
    isJilid: false,
    duplicate: 0,
    fileName: null,
  });

  const navigation = useNavigation();
  console.log(orderInput);

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
    if (orderInput.isJilid) {
      setJilid('unchecked');
      setOrderInput({ ...orderInput, isJilid: false });
    } else {
      setJilid('checked');
      setOrderInput({ ...orderInput, isJilid: true });
    }
  }

  // setOrderInput({ ...orderInput, duplicate: text });
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
              <Text className="text-xl">Pesanan</Text>
              <Button reference="detail-modal" />
              {/* radio */}
              <View className="flex-row">
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

              <View className="flex-row items-center">
                <Text>Rangkap: </Text>
                <TextInput
                  onChangeText={text => setOrderInput({ ...orderInput, duplicate: text })}
                  // value={text}
                  keyboardType="number-pad"
                  placeholder="rangkap"
                  className="border"
                />
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('map-order', { orderData: orderInput })}
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
