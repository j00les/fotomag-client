import { useState } from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import Button from '../../components/user/Button';
import { styles } from '../../styles/style';

export default function DetailScreen({ route, navigation }) {
  // transaction/:idAtk
  // req body buat post order

  // fileName, totalPages, isJilid, colorVariant, duplicate, address,totalPrice

  const dispatch = useDispatch();

  const { id } = route.params;
  const [modalVisible, setModalVisible] = useState(true);
  const [orderInput, setOrder] = useState({
    // file
  });

  const handleFormValueChange = (key, value) => {
    console.log(key);
    // setOrder({
    //   ...formValues,
    //   [key]: value,
    // });
  };

  const [checked, setChecked] = useState('');

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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text className="text-xl">Pesanan</Text>
              <Button reference="detail-modal" />
              {/* radio */}
              <View className="flex-row">
                <View className="flex-row-reverse items-center">
                  <Text>Warna</Text>
                  <RadioButton
                    onChange={e => console.log(e)}
                    value="warna"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                  />
                </View>
                {/* radio */}
                <View className=" flex-row-reverse items-center">
                  <Text>Hitam/Putih</Text>
                  <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                  />
                </View>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable className="flex-3" onPress={() => console.log('aklsdj')}>
          <Text>I'm pressable!</Text>
        </Pressable>
      </View>
    </View>
  );
}

// const handleChange = e => {
//   const name = e.target.name;

//   if (name === 'image-1' || 'image-2' || 'image-3') {
//     setForm({
//       ...formInput,
//       [name]: { ...formInput[name], imgUrl: e.target.value },
//     });
//   }
//   setForm({ ...formInput, [name]: e.target.value });
// };

// const handleSubmit = e => {
//   e.preventDefault();
//   if (Object.keys(product.productById).length > 0) {
//     dispatch(updateProduct(product.productById.id, formInput));
//     dispatch(clearProductState());
//     toast.success('Product successfully updated!');
//   } else {
//     dispatch(createProduct(formInput));
//     toast.success('Product successfully created!');
//   }

//   modalElement.checked = false;
// };
