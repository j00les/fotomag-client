import { Avatar } from '@rneui/themed';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { data as terdekat } from '../../../server-dummy/dummy';
import Card from '../../components/user/HomeCard';
import { styles } from '../../styles/style';
import { LinearGradient } from 'expo-linear-gradient';
import { WebView } from 'react-native-webview';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function HomeScreen() {
  //konteks: response midtrans buat di oper ke payment screen
  const [_, setResponse] = useState('');

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return <Card data={item} />;
  };

  async function acquireToken() {
    try {
      const { data } = await axios({
        method: 'post',
        url: 'https://6445-202-80-217-184.ap.ngrok.io/pay',
      });
      console.log(data);

      setResponse(data);
      navigation.navigate('payment', data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <View style={styles.color} className="items-center justify-between flex-row px-7 py-2">
        <View>
          <Text className="text-lg text-white">Hi user</Text>
          <Text className="text-white">Welcome!</Text>
        </View>

        <View>
          <Avatar
            size={40}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
          />
        </View>
      </View>

      <View id="wrapper" className="flex-1 pt-7 px-7 mb-5">
        <View id="balance-container" className=" h-[35%] rounded-lg pb-5">
          <LinearGradient
            className="rounded-lg h-[100%]"
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.button}
          >
            <View className="items-center mt-4">
              <Text className="text-white">Balance</Text>
              <Text className="text-4xl text-white">Rp.2.000.000</Text>
            </View>

            <View className="flex-row mt-8 px-11">
              <TouchableOpacity
                onPress={acquireToken}
                className="border w-full rounded-lg bg-white"
              >
                <Text className="text-center p-2 uppercase">Top Up</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        <Text>Toko terdekat</Text>

        <View className="h-[60%]  mb-4">
          <FlatList data={terdekat} renderItem={renderItem} />
        </View>
      </View>
    </>
  );
}
