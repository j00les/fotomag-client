import { View, Text } from 'react-native';
export default function HomeCard({ data: merchantData }) {
  return (
    <View className="border rounded-lg mt-2 p-10">
      <Text>{merchantData.name}</Text>
    </View>
  );
}
