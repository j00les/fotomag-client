import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function OrderCard({ data: order }) {
  const navigation = useNavigation();
  return (
    <>
    {/* <TouchableOpacity
      // <Stack.Screen name="order-detail" component={MapTracking} />
      onPress={() => navigation.navigate('order-detail', { id: order.id })}
      className="border-b rounded-lg mt-2 p-4 flex-row"
    >
      <View className="lk">
        <Avatar
          containerStyle={{ backgroundColor: '#BDBDBD', borderRadius: 7 }}
          size={55}
          title="toko"
        />
      </View>
      <View className="ml-4">
        <Text className="text-base">{order.name}</Text>
        <Text>{order.address}</Text>
      </View>
    </TouchableOpacity> */}
    
    <View className="border rounded-lg mt-4 p-1">
      <View style={styles.insideView1}>
        <Text>JANGAN LUPA FETCH NAMA TOKO</Text>
        </View>
        <View style={styles.mainView}>
          <View style={styles.view1}>
            <Button title="Pesanan Selesai" style={styles.statusButton} />
          </View>
          <View style={styles.view2}>
          <Button title="Lihat Detail" style={styles.detailButton} onPress={() => navigation.navigate('order-detail', { id: order.id })} />
          </View>
        </View>
        <Text style={{textAlign: 'center', marginTop: 10}} >fetch status </Text>
    </View>



    </>
  );
}

const styles = StyleSheet.create({
  insideView1: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: 2,
    fontSize: 20,
    fontWeight: 'bold'
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: "yellow",
    marginTop: 10,
    alignContent: 'space-between'
  },
  view1: {
    alignSelf: "flex-start",
    marginEnd : 40,
    marginStart : 10
    
  },
  view2: {
    marginStart : 40,
    alignSelf: 'flex-end'
  },
  detailButton: {

  }
})