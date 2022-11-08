import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Card from "../../components/merchant/Card";

export default HomeMerchant = () => {
  let data = [1, 2, 3, 4, 5, 2, 3, 35, 325];
  const [refresh, setRefresh] = useState(false);
  return (
    <View className="flex-1 items-center ">
      <View className="h-[16%] w-full bg-red-300 rounded-b-3xl ">
        <View className="flex-row h-[50%] items-center justify-between mt-[3%] px-[4%]">
          <View className="">
            <Text>Selamat datang, Your Name</Text>
          </View>
          <View className="w-[17%] h-full border-2 rounded-full ">
            <TouchableOpacity className="w-full h-full p-2">
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/512/guest-male.png",
                }}
                className="w-[100%] h-[100%] "
              />
            </TouchableOpacity>
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
                data={data}
                renderItem={({ data }) => <Card data={data} />}
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
