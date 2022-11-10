import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardCourier from "../../components/courier/CardCourier";
import { getListTrxCou } from "../../stores/courier/reducersCourier";

export default HomeCourier = ({ navigation }) => {
  const dispatch = useDispatch();
  const { done } = useSelector((state) => {
    return state.courier;
  });

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("LoginScreen");
  };

  useEffect(() => {
    dispatch(getListTrxCou());
  }, []);

  return (
    <>
      <View className="flex-1 items-center ">
        <View className="h-[16%] w-full bg-red-300 rounded-b-3xl ">
          <View className="flex-row h-[50%] items-center justify-center mt-[3%] px-[4%]">
            <View className="">
              <Text className="text-2xl font-bold">
                Selamat datang, Your Name
              </Text>
              <Button title="keluar" onPress={() => logout()} />
              <Button
                title="Maps"
                onPress={() => navigation.navigate("TrackingCourier")}
              />
            </View>
          </View>
        </View>
        <View className="bg-white h-[1%]" />
        <View className="h-[85%] w-full bg-red-300 rounded-t-3xl items-center ">
          <View className="bg-white w-[95%] h-full mt-[5%] rounded-t-3xl">
            <View className="bg-yellow-200  rounded-t-3xl h-[7%] rounded-b-3xl justify-center items-center">
              <Text>Orderan</Text>
            </View>
            <View className="bg-white h-[1%]" />
            <View className="bg-yellow-200 h-[87%] rounded-t-3xl">
              <View className="p-4 mt-3 h-full">
                <FlatList
                  key={done.id}
                  data={done}
                  renderItem={({ item }) => (
                    <CardCourier
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
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
