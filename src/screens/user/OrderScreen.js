import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import OrderCard from '../../components/user/OrderCard';
import { data as order } from '../../../server-dummy/dummy';

export default function OrderScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return <OrderCard data={item} />;
  };

  return (
    <View className="h-[60%]  mb-4">
      <FlatList data={order} renderItem={renderItem} />
    </View>
  );
}
