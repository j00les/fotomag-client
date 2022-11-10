import { Avatar } from "@rneui/themed";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { data as terdekat } from "../../../server-dummy/dummy";
import HomeCard from "../../components/user/HomeCard";
import { CustomText, styles } from "../../styles/style";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import axios from "axios";
import SearchMap from "../../components/user/SearchMap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../stores/actions/userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "../../constants/constants";
import TopUp from "../../components/user/TopUp";
import { getUserLongLat } from "../../stores/slices/userSlice";

export default function HomeScreen() {
  //konteks: response midtrans buat di oper ke payment screen
  const [_, setResponse] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(user);

  const renderItem = ({ item }) => {
    return <HomeCard data={item} />;
  };

  const getData = async key => {
    try {
      const keyz = await AsyncStorage.getItem(key);
      return keyz;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let loc = await Location.getCurrentPositionAsync({});

        if (loc !== null) {
          // console.log(loc);
          // dispatch(getUserLongLat(loc));
        }
        let token = await AsyncStorage.getItem("@access_token");
        console.log(token);
        await axios({
          method: "patch",
          url: `${baseURL}/customer`,
          data: {
            latitude: user.userLat,
            longitude: user.userLong,
          },
          headers: {
            access_token: token,
          },
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [user.access_token]);

  async function acquireToken() {
    try {
      const { data } = await axios({
        method: "post",
        url: `${baseURL}/balance/pay`,
        // data: {
        //   // nominal: ,
        // },
        headers: {
          access_token: user.access_token,
        },
      });
      setResponse(data);

      navigation.navigate("payment", data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <View className="items-center justify-between flex-row px-7 py-2">
        <View>
          <Text className="text-xl">Halo user</Text>
          <Text>address disini</Text>
        </View>

        <View>
          <Avatar
            size={60}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
          />
        </View>
      </View>

      <View id="wrapper" className="flex-1 pt-7 px-7 mb-5">
        <View id="balance-container" className=" h-[35%] rounded-lg pb-5">
          <LinearGradient
            className="rounded-lg h-[100%]"
            colors={["#001627", "#003b4f", "#38657b"]}
            style={styles.button}
          >
            <View className="items-center mt-4">
              <Text className="text-white mb-2">Saldo</Text>
              <Text className="text-4xl text-white">Rp.2.000.000</Text>
            </View>

            <View className="flex-row mt-8 px-11">
              <TopUp />
              {/* <TouchableOpacity
                onPress={acquireToken}
                className="border w-full rounded-lg bg-white"
              >
                <Text className="text-center p-2 uppercase">Top Up</Text>
              </TouchableOpacity> */}
            </View>
          </LinearGradient>
        </View>

        <Text className="ml-3 text-base">Toko terdekat</Text>

        <View className="h-[60%]  mb-4">
          <FlatList data={terdekat} renderItem={renderItem} />
        </View>
      </View>
    </>
  );
}
