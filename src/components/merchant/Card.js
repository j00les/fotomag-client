import { Text, TouchableOpacity, View } from "react-native";

export default Card = (props) => {
  return (
    <View className="flex-1 items-center mb-2">
      <View className="w-[95%] bg-blue-200 rounded-xl p-3">
        <View>
          <Text>Order Id</Text>
          <Text>Total Lembar</Text>
          <Text>Warna</Text>
          <Text>Jilid</Text>
          <Text>Total Harga</Text>
        </View>
        <View className="w-full items-center">
          <View className="w-[95%] flex-row mt-[4%] justify-between">
            <TouchableOpacity className="w-[45%] bg-red-500">
              <Text className="text-center">Tolak</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[45%] bg-green-500 ">
              <Text className="text-center">Terima</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
