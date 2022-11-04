import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { data as terdekat } from '../../../dummy';
import Card from '../../components/user/HomeCard';
import { styles } from '../../styles/style';
import { LinearGradient } from 'expo-linear-gradient';
// import { styles } from '../../styles/style';

export default function HomeScreen() {
  const renderItem = ({ item }) => {
    return <Card data={item} />;
  };

  return (
    <>
      <View style={styles.color} className="items-center justify-between flex-row border px-7 py-2">
        <View>
          <Text className="text-lg text-white">Hi Alex Chan</Text>
          <Text className="text-white">Welcome!</Text>
        </View>

        <View>
          <Text>Avatar</Text>
        </View>
      </View>

      <View id="wrapper" className=" border flex-1 pt-7 px-7 mb-5">
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
              <TouchableOpacity className="border w-full rounded-lg bg-white">
                <Text className="text-center p-2 uppercase">Top Up</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        <Text>Toko terdekat</Text>

        <View className="h-[80%] border bg-red-400 my-4">
          <FlatList data={terdekat} renderItem={renderItem} />
        </View>
      </View>
    </>
  );
}
