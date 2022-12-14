import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { logoutDong } from "../../stores/slices/userSlice";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function logout() {
    await AsyncStorage.clear();
    navigation.navigate("LoginScreen");
    dispatch(logoutDong());
    return;
  }

  return (
    <View style={styles.container}>
      <View className="border w-[500] h-[500]">
        <Image
          className="w-full h-full"
          source={{
            uri: "https://media.istockphoto.com/photos/beautiful-afro-woman-picture-id1391365592?b=1&k=20&m=1391365592&s=170667a&w=0&h=ZuQbskdodhMKCFfTaoJ9b0TJP7bYLJ_UddadoQQp0Xo=",
          }}
        />
      </View>

      <View>
        <Text style={styles.nameProfile}>Alex Chandra Hanif</Text>
        <View
          style={{
            marginLeft: 15,
            marginTop: 5,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.textBody}>alexchandra@gmail.com</Text>
          <Text style={styles.textBody}>Jakarta</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#EEE3CB",
              width: 350,
              justifyContent: "center",
              alignItems: "center",
              height: 70,
              marginTop: 30,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Total Saldo</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rp.1000.0000</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
  },
  image: {
    flex: 10,
    alignItems: "center",
  },

  imageProfile: {
    width: 450,
    height: 500,
  },
  nameProfile: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
  },
  // body: {
  //   flex: 5,
  //   backgroundColor: "#F8EDE3",
  //   borderTopEndRadius: 30,
  //   borderTopLeftRadius: 30,
  // },
  textBody: {
    fontSize: 15,
  },
});
