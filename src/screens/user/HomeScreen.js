import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { data as terdekat } from '../../../dummy';
import Card from '../../components/user/HomeCard';

export default function HomeScreen() {
  const renderItem = ({ item }) => {
    return <Card data={item} />;
  };

  return (
    <View id="wrapper" className="flex-1 pt-7 px-7">
      <View className="items-center justify-between flex-row">
        <View>
          <Text className="text-lg">Hi Alex Chan</Text>
          <Text>Welcome!</Text>
        </View>
        <View>
          <Text>Avatar</Text>
        </View>
      </View>
      <View id="balance-container" className="bg-blue-400 border h-[30%] rounded-lg">
        <View className="items-center justify-center w-[300] mx-auto mt-9 h-[20rem]">
          <View className="items-center bg-red-400">
            <Text>Balance</Text>
            <Text className="text-4xl">Rp.2.000.000</Text>
          </View>

          <View className="flex-row mt-8 px-11">
            <TouchableOpacity className="border w-full rounded-lg bg-white">
              <Text className="text-center p-2">TOP UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text>Toko terdekat</Text>

      {/* toko terdekat */}
      <View className="h-[60%]">
        <FlatList data={terdekat} renderItem={renderItem} />
      </View>
    </View>
  );
}
