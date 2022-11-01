import { FlatList, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View id="wrapper" className="flex-1 p-7 border">
      <View className="items-center justify-between flex-row">
        <View>
          <Text className="text-lg">Hi Alex Chan</Text>
          <Text>Welcome!</Text>
        </View>
        <View>
          <Text>Avatar</Text>
        </View>
      </View>

      <View id="balance-container" className="bg-blue-400 h-[30%] rounded-lg">
        <View className="items-center justify-center h-[20rem] border">
          <View className="items-center bg-red-400">
            <Text>Balance</Text>
            <Text>Rp.2000.000</Text>
          </View>

          <View className="flex-row mt-20">
            <TouchableOpacity className="border bg-white">
              <Text>TOP UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Text>Pay bill</Text>

        <View className="flex-row items-center justify-center gap-7">
          <AntDesign name="heart" size={24} color="black" />
          <AntDesign name="heart" size={24} color="black" />
          <AntDesign name="heart" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}
