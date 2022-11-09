import { Text, TouchableOpacity, View } from "react-native";

export default CardCourier = ({
  id,
  lembar,
  warna,
  jilid,
  harga,
  alamat,
  status,
}) => {
  return (
    <>
      <View className="items-center mb-2">
        <View className="w-[95%] bg-blue-200 rounded-xl p-3">
          <View>
            <View className="flex-row justify-between">
              <Text>Order Id : {id}</Text>
              <Text>{status}</Text>
            </View>
            <Text>Total Lembar : {lembar}</Text>
            <Text>Warna: {warna}</Text>
            <Text>Jilid : {jilid}</Text>
            <Text>Total Harga : {harga}</Text>
            <Text>Alamat : {alamat}</Text>
          </View>
          <View className="w-full items-center">
            <View className="w-[95%] flex-row mt-[4%] justify-between">
              <TouchableOpacity
                onPress={() => reject(id)}
                className="w-[45%] bg-red-500"
              >
                <Text className="text-center">Tolak</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => progress(id)}
                className="w-[45%] bg-green-500 "
              >
                <Text className="text-center">Terima</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
