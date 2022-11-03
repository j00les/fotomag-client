import { Text, View } from 'react-native';

export default function HistoryCard({ history }) {
  return (
    <View className="border rounded-lg mt-2 p-10">
      <View className="flex flex-row">
        <View className="border p-4 bg-red-400 rounded-full">
          <Text>coba</Text>
        </View>
        <Text>{history.name}</Text>
      </View>
    </View>
  );
}
