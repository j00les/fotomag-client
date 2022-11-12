import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Avatar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function OrderCard({ data: order }) {
  const navigation = useNavigation();
  return (
    <>
      {/* <TouchableOpacity
      // <Stack.Screen name="order-detail" component={MapTracking} />
      onPress={() => navigation.navigate('order-detail', { id: order.id })}
      className="border-b rounded-lg mt-2 p-4 flex-row"
    >
      <View className="lk">
        <Avatar
          containerStyle={{ backgroundColor: '#BDBDBD', borderRadius: 7 }}
          size={55}
          title="toko"
        />
      </View>
      <View className="ml-4">
        <Text className="text-base">{order.name}</Text>
        <Text>{order.address}</Text>
      </View>
    </TouchableOpacity> */}

      <View className="border rounded-lg mt-4 p-4">
        <View className="flex-row-reverse">
          <TouchableOpacity className="bg-yellow-500 items-center justify-center w-[100] mx-auto rounded-md">
            <Text className="bg-red items-center justify-center text-center uppercase text-white">
              diantar
            </Text>
          </TouchableOpacity>

          <Text className="text-lg mr-36">Toko Hanif</Text>
        </View>

        <View className="flex-row">
          <Text>Order ID: </Text>
          <Text>1</Text>
        </View>
        <View className="flex-row">
          <Text>Total lembar: </Text>
          <Text>10</Text>
        </View>

        <View className="flex-row">
          <Text>Tujuan: </Text>
          <Text>Jl. Sultan Iskandar Muda No.20, Pondok Pinang</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("History")}
          className="bg-primary w-[100] mx-auto rounded-md"
        >
          <Text className="bg-red text-center uppercase text-white">Selesai</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "yellow",
    marginTop: 10,
    alignContent: "space-between",
  },
  view1: {
    alignSelf: "flex-start",
    marginEnd: 40,
    marginStart: 10,
  },
  view2: {
    marginStart: 40,
    alignSelf: "flex-end",
  },
  detailButton: {},
});
