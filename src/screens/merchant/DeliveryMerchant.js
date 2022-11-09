import { Button, FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Card from "../../components/RegisterMap.js/Card";

export default DeliveryMerchant = () => {
  const { delivery } = useSelector(state => {
    return state.merchant;
  });

  return (
    <View className="flex-1 items-center ">
      <View className="h-[10%] w-full">
        <View className="justify-center bg-red-300 rounded-b-3xl items-center h-full">
          <Text className="font-bold">Pesananan Diantar</Text>
        </View>
      </View>
      <View className="h-[1%] bg-white" />
      <View className="bg-yellow-300 w-full h-[92%] rounded-t-3xl p-4">
        <View className=" rounded-lg mt-3 h-full">
          <FlatList
            className="mb-5"
            key={delivery.id}
            data={delivery}
            renderItem={({ item }) => (
              <Card
                nama="delivery"
                id={item.id}
                warna={item.colorVariant}
                lembar={item.totalPages}
                jilid={item.isJilid}
                harga={item.totalPrice}
                alamat={item.address}
                status={item.status}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};
