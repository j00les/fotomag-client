import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  changeStatusDone,
  changeStatusProgress,
  changeStatusReject,
} from "../../stores/merchant/reducersMerchant";

export default Card = ({ id, warna, jilid, harga, alamat, lembar, status }) => {
  const route = useRoute();
  const dispatch = useDispatch();

  const done = (idCard) => {
    dispatch(changeStatusDone(idCard));
  };
  const progress = (idCard) => {
    dispatch(changeStatusProgress(idCard));
  };
  const reject = (idCard) => {
    dispatch(changeStatusReject(idCard));
  };

  return (
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
            {route.name === "HomeMerchant" && (
              <>
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
              </>
            )}
            {route.name === "ProgressMerchant" && (
              <>
                <View className="flex-row w-full justify-center">
                  <TouchableOpacity
                    onPress={() => done(id)}
                    className="w-[45%] bg-green-500 "
                  >
                    <Text className="text-center">Selesai Dikerjakan</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
            {route.name === "DeliveryMerchant" && (
              <>
                <View className="flex-row w-full justify-center">
                  <TouchableOpacity
                    onPress={() => console.log("lol")}
                    className="w-[45%] bg-green-500 "
                  >
                    <Text className="text-center">Tracking</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
