import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/merchant/Card";
import { getListTrxCus } from "../../stores/merchant/reducersMerchant";

export default HomeMerchant = () => {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const { pending } = useSelector((state) => {
    return state.merchant;
  });

  useEffect(() => {
    dispatch(getListTrxCus());
  }, []);

  return (
    <View className="flex-1 items-center ">
      <View className="h-[16%] w-full bg-red-300 rounded-b-3xl ">
        <View className="flex-row h-[50%] items-center justify-center mt-[3%] px-[4%]">
          <View className="">
            <Text className="text-2xl font-bold">
              Selamat datang, Your Name
            </Text>
          </View>
        </View>
      </View>
      <View className="bg-white h-[5%]" />
      <View className="h-[85%] w-full bg-red-300 rounded-t-3xl items-center ">
        <View className="bg-white w-[95%] h-full mt-[12%] rounded-t-3xl">
          <View className="bg-yellow-200  rounded-t-3xl h-[7%] rounded-b-3xl justify-center items-center">
            <Text>Orderan</Text>
          </View>
          <View className="bg-white h-[1%]" />
          <View className="bg-yellow-200 h-[78%] rounded-t-3xl">
            <View className="p-4 mt-3 h-full">
              <FlatList
                key={pending.id}
                data={pending}
                renderItem={({ item }) => (
                  <Card
                    nama="home"
                    id={item.id}
                    warna={item.colorVariant}
                    lembar={item.totalPages}
                    jilid={item.isJilid}
                    harga={item.totalPrice}
                    alamat={item.address}
                    status={item.status}
                  />
                )}
                refreshing={refresh}
                onRefresh={() => {
                  setRefresh(true),
                    setTimeout(() => {
                      console.log("wow");
                    }, 5000),
                    setRefresh(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>

      <View className="h-[15%] w-[80%] bg-white border top-[11%] absolute rounded-xl ">
        <View className="h-full bg-slate-400 items-center justify-center rounded-xl">
          <Text className="font-bold text-lg ">Pendapatan</Text>
          <Text className="font-bold text-4xl ">Rp. 2.000.000</Text>
        </View>
      </View>
    </View>
  );
};
