import { Image, Text, TouchableOpacity, View } from "react-native";

export default HomeMerchant = () => {
  return (
    <View className="flex-1 items-center ">
      <View className="h-[15%] w-full bg-red-300 rounded-b-3xl ">
        <View className="flex-row h-[25%] items-center justify-between mt-[7%] px-[4%]">
          <View className="">
            <Text>Selamat datang, Your Name</Text>
          </View>
          <TouchableOpacity className="w-[10%] h-full">
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/512/guest-male.png",
              }}
              className="w-[100%] h-[100%] "
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-white h-[5%]" />
      <View className="h-[85%] w-full bg-red-300 rounded-t-3xl items-center ">
        <View className="bg-white w-[95%] h-full mt-[15%] rounded-t-3xl">
          <View>
            <Text>flex</Text>
          </View>
        </View>
      </View>

      <View className="h-[15%] w-[80%] bg-white border top-[10%] absolute rounded-xl ">
        <View className="h-full items-center justify-center">
          <Text className="font-bold text-lg ">Pendapatan</Text>
          <Text className="font-bold text-lg ">Rp. 2.000.000</Text>
        </View>
      </View>
    </View>
  );
};
