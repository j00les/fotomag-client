import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function HomeCard({ data: merchantData }) {
  const navigation = useNavigation();
  // console.log(merchantData.id);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('detail', { id: merchantData.id })}
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
        <Text className="text-base">{merchantData.name}</Text>
        <Text>{merchantData.address}</Text>
      </View>
    </TouchableOpacity>
  );
}
