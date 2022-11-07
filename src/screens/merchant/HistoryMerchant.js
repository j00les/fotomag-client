import { Text, View } from "react-native";

export default HistoryMerchant = () => {
  return (
    <View className="flex-1 items-center ">
      <View className="h-[10%] w-full">
        <View className="justify-center bg-red-300 rounded-b-3xl items-center h-full">
          <Text className="font-bold">Pesananan Selesai</Text>
        </View>
      </View>
      <View className="h-[1%] bg-white" />
      <View className="bg-yellow-300 w-full h-full rounded-t-3xl p-4">
        <View className="bg-blue-400 h-full rounded-lg">
          <Text className="text-center top-10">flatList</Text>
        </View>
      </View>
    </View>
  );
};
