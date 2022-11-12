import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function HistoryCard({ history }) {
  return (
    // <View className="border rounded-lg mt-4 p-1">
    //   <View style={styles.insideView1}>
    //     <Text>JANGAN LUPA FETCH NAMA TOKO</Text>
    //     </View>
    //     <View style={styles.mainView}>
    //       <View style={styles.view1}>
    //         <Text style={{textAlign: 'left', marginLeft:10}}>Tanggal Pesanan {"\n"}fetch createdAt </Text>
    //       </View>
    //       <View style={styles.view2}>
    //         <Text style={{textAlign: 'right', marginLeft:115, marginRight: 10}} >Total Harga {"\n"}fetch totalPrice </Text>
    //       </View>
    //     </View>
    //     <Text style={{textAlign: 'center', marginTop: 10}} >fetch status </Text>
    // </View>
    <View className="border rounded-lg mt-4 p-4">
      <View className="flex-row-reverse">
        <TouchableOpacity className="bg-green-500 items-center justify-center w-[100] mx-auto rounded-md">
          <Text className="bg-red items-center justify-center text-center uppercase text-white">
            sukses
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

      {/* <TouchableOpacity className="bg-primary w-[100] mx-auto rounded-md">
        <Text className="bg-red text-center uppercase text-white">Selesai</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  insideView1: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: "center",
    marginTop: 2,
    fontSize: 20,
    fontWeight: "bold",
  },
  mainView: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "yellow",
    marginTop: 10,
    // alignContent: 'space-between'
  },
  view1: {
    alignSelf: "flex-start",
  },
  view2: {
    alignSelf: "flex-end",
  },
});
