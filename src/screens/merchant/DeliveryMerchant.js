import { FlatList, Text, View } from "react-native";
import Card from "../../components/merchant/Card";

export default DeliveryMerchant = () => {
  let data = [1, 2, 3, 4, 5, 2, 3, 35, 325];
  return (
    <View className="flex-1 items-center ">
      <View className="h-[10%] w-full">
        <View className="justify-center bg-red-300 rounded-b-3xl items-center h-full">
          <Text className="font-bold">Pesananan Diantar</Text>
        </View>
      </View>
      <View className="h-[1%] bg-white" />
      <View className="bg-yellow-300 w-full h-[92%] rounded-t-3xl p-4">
        <FlatList
          data={data}
          renderItem={() => <Card data={data} />}
          className="my-[3%]"
        />
      </View>
    </View>
  );
};
