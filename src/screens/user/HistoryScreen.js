import { FlatList, View } from 'react-native';
import { data as history } from '../../../server-dummy/dummy';
import HistoryCard from '../../components/user/HistoryCard';

export default function HistoryScreen() {
  const renderItem = ({ item }) => {
    return <HistoryCard history={item} />;
  };

  return (
    <View className="flex-1 pt-7 px-7">
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
}
