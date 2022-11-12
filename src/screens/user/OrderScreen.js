import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import OrderCard from "../../components/user/OrderCard";
import { data as order } from "../../../server-dummy/dummy";

export default function OrderScreen() {
  const navigation = useNavigation();

  // const renderItem = ({ item }) => {
  //   return <OrderCard data={item} />;
  // };

  return (
    // <View className="h-[60%]  mb-4">
    <View className="flex-1 pt-7 px-7">
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold", marginVertical: 10 }}>
        {" "}
        DAFTAR PESANAN{" "}
      </Text>
      {/* <FlatList data={order} renderItem={renderItem} /> */}
      <OrderCard />
    </View>
  );
}
