import { Text, View, StyleSheet } from 'react-native';

export default function HistoryCard({ history }) {
  return (
    
    <View className="border rounded-lg mt-4 p-1">
      <View style={styles.insideView1}>
        <Text>JANGAN LUPA FETCH NAMA TOKO</Text>
        </View>
        <View style={styles.mainView}>
          <View style={styles.view1}>
            <Text style={{textAlign: 'left', marginLeft:10}}>Tanggal Pesanan {"\n"}fetch createdAt </Text>
          </View>
          <View style={styles.view2}>
            <Text style={{textAlign: 'right', marginLeft:115, marginRight: 10}} >Total Harga {"\n"}fetch totalPrice </Text>
          </View>
        </View>
        <Text style={{textAlign: 'center', marginTop: 10}} >fetch status </Text>
    </View>

    
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
    // alignContent: 'space-between'
  },
  view1: {
    alignSelf: "flex-start",
    
  },
  view2: {
    alignSelf: 'flex-end'
  }
})