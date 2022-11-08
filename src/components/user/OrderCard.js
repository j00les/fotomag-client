import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function OrderCard({ data: order }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
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
    </TouchableOpacity>
  );
}
